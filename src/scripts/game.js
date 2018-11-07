import Input from './input'
import GameMap from './gameMap'

/** @class Game
  * A class representing the high-level functionality
  * of a game - the game loop, buffer swapping, etc.
  */
export default class Game {

    /** @constructor
     * Creates the game instance
     * @param {integer} width - the width of the game screen in pixels
     * @param {integer} heght - the height of the game screen in pixels
     */
    constructor(width, height) {
      this.frameStart = null

        this.width = width
        this.height = height

        this.input = new Input()
        this.entities = []

        this.camera = new Camera( width, height, 0 )

        this.setupCloudLayer()
        this.setupMapLayer()
        this.setupScreenBuffer()
    }

    /** @method setupCloudLayer
     * Creates layer with clouds and attaches it to camera
     */
    setupCloudLayer() {
        var cloudFile = require( '../palettes/Clouds.json' )
        this.clouds = GameMap.parseMap( cloudFile )

        this.cloudBuffer = document.createElement( 'canvas' )
        this.cloudBuffer.width = this.clouds.width * this.clouds.tileWidth
        this.cloudBuffer.height = this.clouds.height * this.clouds.tileHeight
        this.cloudBufferCtx = this.cloudBuffer.getContext( '2d' )

        this.camera.addLayer( this.cloudBuffer, 0.75, 0 )
    }

    /** @method setupMapLayer
     * Creates map layer and attaches it to camera
     */
    setupMapLayer() {
        var mapFile = require( '../palettes/Map.json' )
        this.map = GameMap.parseMap( mapFile )

        this.backBuffer = document.createElement( 'canvas' )
        this.backBuffer.width = this.map.width * this.map.tileWidth
        this.backBuffer.height = this.map.height * this.map.tileHeight
        this.backBufferCtx = this.backBuffer.getContext( '2d' )

        this.camera.addLayer( this.backBuffer, 1, 0 )
    }

    /** @method setupScreenBuffer
     * Creates and prepares main screen buffer
     */
    setupScreenBuffer() {
        this.screenBuffer = document.createElement( 'canvas' )
        this.screenBuffer.width = this.width
        this.screenBuffer.height = this.height
        this.screenBufferCtx = this.screenBuffer.getContext( '2d' )

        document.body.append( this.screenBuffer )
    }

    /** @method setupBuffer
     * Creates new buffer
     */
    setupBuffer() {
        var buffer = document.createElement( 'canvas' )

        buffer.width = this.width
        buffer.height = this.height

        return buffer
    }

    /** @method addEntity
     * Adds an entity to the game world. Entities should have an update() and render() method
     * @param {Object} entity - the entity to be added
     */
    addEntity(entity) {
        this.entities.push( entity )
    }

    /** @method update
     * Updates the game state
     * @param {integer} elapsedTime - the number of milliseconds per frame
     */
    update(elapsedTime) {
        this.entities.forEach( entity => entity.update( elapsedTime, this.input, this.map ) )
        this.input.update()
    }

    /** @method render
     * Renders the game state
     * @param {integer} elapsedTime - the number of milliseconds per frame
     */
    render(elapsedTime) {
        this.backBufferCtx.clearRect( 0, 0, this.map.width * this.map.tileWidth, this.map.height * this.map.tileHeight )
        this.cloudBufferCtx.clearRect( 0, 0, this.clouds.width * this.clouds.tileWidth, this.clouds.height * this.clouds.tileHeight )

        this.map.render( this.backBufferCtx, 0, 0 )
        this.clouds.render( this.cloudBufferCtx, 0, 0 )

        this.entities.forEach( entity => entity.render( elapsedTime, this.backBufferCtx ) )

        this.camera.render( this.screenBufferCtx )
    }

    /** @method loop
     * Updates and renders the game and calls itself on the next draw cycle.
     * @param {DOMHighResTimestamp} timestamp - the current system time
     */
    loop(timestamp) {
        var elapsedTime = this.frameStart ? timestamp - this.frameStart : 0

        this.update( elapsedTime )
        this.render( elapsedTime )

        this.frameStart = timestamp

        window.requestAnimationFrame( timestamp => {
            this.loop( timestamp )
        })
    }
}
