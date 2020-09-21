import { Module } from '@nestjs/common';
import { PlayersController } from './controllers/players.controller';
import { CreatePlayerService } from './services/createPlayer.service';
import { ListAllPlayersService } from './services/listAllPlayers.service';

@Module({
  controllers: [PlayersController],
  providers: [CreatePlayerService, ListAllPlayersService],
})
export class PlayersModule {}
