import { Body, Controller, Post } from '@nestjs/common';
import { CreatePlayerDto } from '../dtos/create-player.dto';
import { Player } from '../interfaces/palyer.interface';
import { PlayersService } from '../services/players.service';

@Controller('players')
export class PlayersController {
  constructor(private readonly playersService: PlayersService) {}

  @Post()
  async savePlayer(@Body() createPlayerDto: CreatePlayerDto): Promise<Player> {
    const { name, email, phoneNumber } = createPlayerDto;

    const player = await this.playersService.savePlayer({
      name,
      email,
      phoneNumber,
    });

    return player;
  }
}
