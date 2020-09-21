import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreatePlayerDto } from '../dtos/create-player.dto';
import { Player } from '../interfaces/palyer.interface';
import { CreatePlayerService } from '../services/createPlayer.service';
import { ListAllPlayersService } from '../services/listAllPlayers.service';

@Controller('players')
export class PlayersController {
  constructor(
    private readonly createPlayerService: CreatePlayerService,
    private readonly listAllPlayersService: ListAllPlayersService,
  ) {}

  @Post()
  async savePlayer(@Body() createPlayerDto: CreatePlayerDto): Promise<void> {
    const { name, email, phoneNumber } = createPlayerDto;

    await this.createPlayerService.execute({
      name,
      email,
      phoneNumber,
    });
  }

  @Get()
  async listPlayers(): Promise<Player[]> {
    const players = await this.listAllPlayersService.execute();

    return players;
  }
}
