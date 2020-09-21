import { Module } from '@nestjs/common';
import { PlayersModule } from './players/players.module';
import { ListAllPlayersService } from './list-all-players/list-all-players.service';

@Module({
  imports: [PlayersModule],
  controllers: [],
  providers: [ListAllPlayersService],
})
export class AppModule {}
