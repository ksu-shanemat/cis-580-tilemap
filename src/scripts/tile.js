
/** @module Tile
 * A class representing one tile
 */
export default class Tile {

    /** @static @method parseTile
     * Parses tile from given JSON object
     * @param {JSON} tileJSON - JSON object containing info about tile
     */
    static parseTile(tileJSON) {
        var id = tileJSON.id
        var solid = false

        if( tileJSON.properties ) {
            solid = tileJSON.properties[0].value
        }

        var imageSrc = tileJSON.image
        var imageWidth = tileJSON.imagewidth
        var imageHeight = tileJSON.imageheight

        return new Tile( id, imageWidth, imageHeight, imageSrc, solid )
    }

    /** @constructor
     * Constructs a new instance of reference tile
     * @param {int} id - ID of this tile for referencing
     * @param {int} width - width of tile
     * @param {int} height - height of tile
     * @param {string} imageSrc - path for image source
     * @param {boolean} solid - indicator, whether this tile is solid or not
     */
    constructor(id, width, height, imageSrc, solid) {
        this.id = id
        this.solid = solid

        this.width = width
        this.height = height

        this.image = new Image( width, height )
        this.image.src = "./dist/" + imageSrc
    }

    /** @method render
    * Renders this tile on given coordinates
    * @param {Context2D} context - the rendering context
    * @param {int} x - X coordinate to render on
    * @param {int} y - Y coordinate to render on
    */
    render(context, x, y) {
        context.drawImage( this.image, x, y )
    }
}