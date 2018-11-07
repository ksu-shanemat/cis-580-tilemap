
/** Boundary on screen to start follow player when moving beyond */
const FOLLOW_BOUNDARY = 0.2

/** Color used for background rendering */
const BACKGROUND_COLOR = "blue"

/** @module Camera
 * A class representing game camera
 */
export default class Camera {

    constructor(width, height, offset) {
        this.width = width
        this.height = height

        this.offset = offset
        this.target = null

        this.layers = []
    }

    /** @method bindTo
     * Binds camera to follow specified target
     * @param {Object} target - target object to follow
     */
    bindTo(target) {
        this.target = target
    }

    /** @method addLayer
     * Adds next layer to be rendered on top of all the others
     * @param {Canvas} canvas - reference to canvas which content will get rendered
     * @param {float} speed - speed at which this layer will move (1 equals to speed of tracked object)
     * @param {int} offset - basic offset of displayed layer
     */
    addLayer(canvas, speed, offset) {
        this.layers.push( { canvas: canvas, speed: speed, offset: offset } )
    }

    /** @method render
     * Renders all layers using given context
     * @param {2DContext} context - context to render layers onto
     */
    render(context) {
        context.fillStyle = BACKGROUND_COLOR
        context.fillRect( 0, 0, this.width, this.height )

        this.layers.forEach( layer => {
            context.drawImage( layer.canvas, layer.offset, 0 )
        })
    }

    /** @method update
     * Allows camera to react to changes in game
     * @param {float} deltaT - time elapsed in between last two frames
     */
    update(deltaT) {
        var deltaX = this.computeDeltaX( deltaT )

        this.offset += deltaX
        this.layers.forEach( layer => {
            layer.offset -= layer.speed * deltaX
        })
    }

    /** @method computeDeltaX
     * Computes number of pixels the main camera should move
     * @param {float} deltaT - time elapsed in between last two frames
     */
    computeDeltaX(deltaT) {
        if( !this.target ) {
            return 0.0
        }

        var cameraX = this.target.x - this.offset
        var leftBoundary = this.width * FOLLOW_BOUNDARY
        var rightBoundary = this.width * (1 - FOLLOW_BOUNDARY)

        if( cameraX < leftBoundary ) {
            return cameraX - leftBoundary
        }

        if( cameraX > rightBoundary ) {
            return cameraX - rightBoundary
        }

        return 0.0
    }
}