import Game from './game'
import Player from './player'

var game = new Game( 1024, 768 )
game.addEntity( new Player( 80, 80 ) )

game.loop()
