
/** Number of frames in animation */
const ANIMATION_FRAMES = 8

/** Number of cycles before animation frame changes */
const ANIMATION_TICK = 12

/** Size of player sprite */
const SPRITE_SIZE = 32

/** Size of sprite collider */
const SPRITE_COLLIDER = 24

/** Relative path to folder containing sprite images */
const SPRITE_FOLDER = "./mage/"

/** Base name of sprite files */
const SPRITE_NAME = "mage"

/** Default sprite frame file extension */
const SPRITE_EXTENSION = ".png"

/** Base player facing direction */
const DIRECTIONS = ["left", "right", "up", "down"]

/** @module Player
 * A class representing the player.
 */
export default class Player {

    /** @constructor
     * Constructs a new player instance
     * @param {float} x - the player's x position
     * @param {float} y - the player's y position
     */
    constructor(x, y) {
        this.x = x
        this.y = y

        this.images = {}
        this.loadImages()

        this.state = "down"
        this.frame = 0

        this.cycleCount = 0
    }

    /** @method update
     * Updates the player
     * @param {double} deltaT - the elapsed time
     * @param {Input} input - the input object
     * @param {GameMap} map - the game map
     */
    update(deltaT, input, map) {

        var changed = false
        if( input.keyPressed( "ArrowLeft" )
         && map.canMove( this.x - 1, this.y, SPRITE_COLLIDER, SPRITE_COLLIDER ) ) {
            this.x--
            this.state = "left"

            changed = true
        }

        if( input.keyPressed( "ArrowRight")
         && map.canMove( this.x + 1, this.y, SPRITE_COLLIDER, SPRITE_COLLIDER ) ) {
            this.x++
            this.state = "right"

            changed = true
        }

        if( input.keyPressed( "ArrowUp" )
         && map.canMove( this.x, this.y - 1, SPRITE_COLLIDER, SPRITE_COLLIDER ) ) {
            this.y--
            this.state = "up"

            changed = true
        }

        if( input.keyPressed( "ArrowDown" ) 
         && map.canMove( this.x, this.y + 1, SPRITE_COLLIDER, SPRITE_COLLIDER ) ) {
            this.y++
            this.state = "down"

            changed = true
        }

        if( changed && this.cycleCount >= ANIMATION_TICK && ( this.frame != 0 || this.frame != 4 ) ) {
            this.frame += 1
            this.frame = this.frame % ANIMATION_FRAMES

            this.cycleCount = 0
        }

        this.cycleCount++
    }

    /** @method render
     * Renders the player
     * @param {double} deltaT - elapsed time
     * @param {Context2D} context - the rendering context
     */
    render(deltaT, context) {
        var image = this.images[this.state][this.frame]
        context.drawImage( image, this.x - SPRITE_SIZE / 2, this.y - SPRITE_SIZE / 2 )
    }

    /** @method loadImages
     * Loads animation images
     */
    loadImages() {
        DIRECTIONS.forEach( direction => {
            this.images[direction] = []
        })

        for( var i = 0; i < ANIMATION_FRAMES; i++ ) {
            DIRECTIONS.forEach( direction => {
                this.images[direction].push( this.obtainFrame( direction, i ) )
            })
        }
    }

    /** @method obtainFrame
     * Obtains specified frame of given direction animation
     * @param {string} direction - name of animation direction
     * @param {int} number - number of frame
     */
    obtainFrame(direction, number) {
        var frame = new Image( SPRITE_SIZE, SPRITE_SIZE )
        frame.src = SPRITE_FOLDER + SPRITE_NAME + "-" + direction + "-" + number + SPRITE_EXTENSION

        return frame
    }
}
