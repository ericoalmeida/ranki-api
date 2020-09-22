import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PlayersController } from './controllers/players.controller';
import { PlayerSchema } from './repositories/player.schema';
import { CreatePlayerService } from './services/createPlayer.service';
import { ListAllPlayersService } from './services/listAllPlayers.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Player', schema: PlayerSchema }]),
  ],
  controllers: [PlayersController],
  providers: [CreatePlayerService, ListAllPlayersService],
})
export class PlayersModule {}
