import { Module } from '@nestjs/common';
import { PlayersController } from './controllers/players.controller';
import { CreatePlayersService } from './services/createPlayers.service';

@Module({
  controllers: [PlayersController],
  providers: [CreatePlayersService],
})
export class PlayersModule {}
