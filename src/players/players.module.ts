import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PlayersController } from './controllers/players.controller';
import { PlayerSchema } from './repositories/player.schema';
import { CreatePlayerService } from './services/createPlayer.service';
import { DeletePlayerService } from './services/deletePlayer.service';
import { FindPlayerService } from './services/findPlayer.service';
import { ListAllPlayersService } from './services/listAllPlayers.service';
import { UpdatePlayerService } from './services/updatePlayer.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Player', schema: PlayerSchema }]),
  ],
  controllers: [PlayersController],
  providers: [
    CreatePlayerService,
    UpdatePlayerService,
    ListAllPlayersService,
    FindPlayerService,
    DeletePlayerService,
  ],
})
export class PlayersModule {}
