import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { PlayerDto } from '../dtos/player.dto';
import { Player } from '../interfaces/palyer.interface';
import { CreatePlayerService } from '../services/createPlayer.service';
import { FindPlayerService } from '../services/findPlayer.service';
import { ListAllPlayersService } from '../services/listAllPlayers.service';
import { DeletePlayerService } from '../services/deletePlayer.service';
import { UpdatePlayerService } from '../services/updatePlayer.service';
import { ValidationParamsPipe } from 'src/common/validations/ValidationParams.pipe';

@Controller('players')
export class PlayersController {
  constructor(
    private readonly createPlayerService: CreatePlayerService,
    private readonly listAllPlayersService: ListAllPlayersService,
    private readonly findPlayerService: FindPlayerService,
    private readonly deletePlayerService: DeletePlayerService,
    private readonly updatePlayerService: UpdatePlayerService,
  ) {}

  @Get()
  async listPlayers(): Promise<Player[]> {
    const players = await this.listAllPlayersService.execute();

    return players;
  }

  @Get(':id')
  async findPlayer(@Param('id', ValidationParamsPipe) id: string): Promise<Player> {
    const player = await this.findPlayerService.execute(id);

    return player;
  }

  @Post()
  @UsePipes(ValidationPipe)
  async savePlayer(@Body() createPlayerDto: PlayerDto): Promise<void> {
    const { name, email, phoneNumber } = createPlayerDto;

    await this.createPlayerService.execute({
      name,
      email,
      phoneNumber,
    });
  }

  @Put(':id')
  async updatePlayer(
    @Param('id', ValidationParamsPipe) id: string,
    @Body() updatePlayerDto: PlayerDto,
  ): Promise<void> {
    await this.updatePlayerService.execute(id, updatePlayerDto);
  }

  @Delete(':id')
  async deletePlayer(@Param('id', ValidationParamsPipe) id: string): Promise<void> {
    await this.deletePlayerService.execute(id);
  }
}
