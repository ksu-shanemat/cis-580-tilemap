import Tile from "./tile"

/** @module GameMap
 * Class representing optimized array of tiles
 */
export default class GameMap {

    /** @static @method parseMap
     * Parses map from given Tiled JSON object
     * @param {JSON} mapJSON - JSON object to be parsed
     */
    static parseMap(mapJSON) {
        var width = mapJSON.width
        var height = mapJSON.height

        var tileWidth = mapJSON.tilewidth
        var tileHeight = mapJSON.tileheight

        var tiles = Int8Array.from( mapJSON.layers[0].data )

        var tileTemplates = {}
        mapJSON.tilesets[0].tiles.forEach( tileJSON => {
            var tile = Tile.parseTile( tileJSON )
            tileTemplates[tile.id] = tile
        });

        return new GameMap( width, height, tileWidth, tileHeight, tiles, tileTemplates )
    }

    /** @constructor
     * Constructs new instance of game map
     * @param {int} width - width of game map in tiles
     * @param {int} height - height of game map in tiles
     * @param {int} tileWidth - width of default tile
     * @param {int} tileHeight - height of default tile
     * @param {Int8Array} tiles - array of tile IDs
     * @param {Array} templates - array of reference tiles
     */
    constructor(width, height, tileWidth, tileHeight, tiles, templates) {
        this.width = width
        this.height = height

        this.tileWidth = tileWidth
        this.tileHeight = tileHeight

        this.tiles = tiles
        this.templates = templates
    }

    /** @method render
     * Renders game map on given coordinates
     * @param {2DContext} context - context used for rendering
     * @param {int} xOffset - number of pixels to set game map of on horizontal axis
     * @param {int} yOffset - number of pixels to set game map of on vertical axis
     */
    render(context, xOffset, yOffset) {
        for( var j = 0; j < this.height; j++ ) {
            for( var i = 0; i < this.width; i++ ) {
                var x = i * this.tileWidth + xOffset
                var y = j * this.tileHeight + yOffset

                var templateID = this.tiles[this.getTileIndex( i, j )]
                this.templates[templateID].render( context, x, y )
            }
        }
    }

    /** @method canMove
     * Checks, whether object on coordinates X and Y with width and height can be moved there
     * @param {int} x - X coordinate of object to check (center)
     * @param {int} y - Y coordinate of object to check (center)
     * @param {int} width - width of object in pixels
     * @param {int} height - height of object in pixels
     */
    canMove(x, y, width, height) {
        var minI = Math.floor( (x - width / 2) / this.tileWidth )
        var maxI = Math.floor( (x + width / 2) / this.tileWidth )

        var minJ = Math.floor( (y - height / 2) / this.tileHeight )
        var maxJ = Math.floor( (y + height / 2) / this.tileHeight )

        for( var j = minJ; j <= maxJ; j++ ) {
            for( var i = minI; i <= maxI; i++ ) {
                var templateID = this.tiles[this.getTileIndex( i, j )]
                if( this.templates[templateID].solid ) {
                    return false
                }
            }
        }

        return true
    }

    /** @method getTileIndex
     * Computes index of tile on coordinated [i, j]
     * @param {int} i - horizontal index
     * @param {int} j - vertical index
     */
    getTileIndex(i, j) {
        return j * this.width + i
    }
}