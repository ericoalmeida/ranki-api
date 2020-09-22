import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreatePlayerDto } from '../dtos/create-player.dto';
import { Player } from '../interfaces/palyer.interface';
import { CreatePlayerService } from '../services/createPlayer.service';
import { FindPlayerByIdService } from '../services/findPlayerById.service';
import { ListAllPlayersService } from '../services/listAllPlayers.service';
import { DeletePlayerByIdService } from '../services/deletePlayerById.service';

@Controller('players')
export class PlayersController {
  constructor(
    private readonly createPlayerService: CreatePlayerService,
    private readonly listAllPlayersService: ListAllPlayersService,
    private readonly findPlayerByIdService: FindPlayerByIdService,
    private readonly deletePlayerByIdService: DeletePlayerByIdService,
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

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Player> {
    const player = await this.findPlayerByIdService.execute(id);

    return player;
  }

  @Delete(':id')
  async deleteById(@Param('id') id: string): Promise<void> {
    await this.deletePlayerByIdService.execute(id);
  }
}
