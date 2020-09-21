import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreatePlayerDto } from '../dtos/create-player.dto';
import { Player } from '../interfaces/palyer.interface';
import { CreatePlayersService } from '../services/createPlayers.service';

@Controller('players')
export class PlayersController {
  constructor(private readonly playersService: CreatePlayersService) {}

  @Post()
  async savePlayer(@Body() createPlayerDto: CreatePlayerDto): Promise<void> {
    const { name, email, phoneNumber } = createPlayerDto;

    await this.playersService.execute({
      name,
      email,
      phoneNumber,
    });
  }

  @Get()
  async listPlayers(): Promise<Player[]> {
    return [];
  }
}
