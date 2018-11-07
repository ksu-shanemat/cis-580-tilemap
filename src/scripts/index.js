import Game from './game'
import Player from './player'

var game = new Game( 1024, 768 )
var player = new Player( 80, 80 )

game.addEntity( player )
game.setCameraTracking( player )

game.loop()
