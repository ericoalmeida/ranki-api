import { Body, Controller, Post } from '@nestjs/common';
import { CreatePlayerDto } from './dto/create-player.dto';

@Controller('players')
export class PlayersController {
  @Post()
  async savePlayer(@Body() createPlayerDto: CreatePlayerDto): Promise<string> {
    const { name, email } = createPlayerDto;

    return JSON.stringify({ name, email });
  }
}
