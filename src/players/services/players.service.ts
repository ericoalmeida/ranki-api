import { Injectable, Logger } from '@nestjs/common';
import { CreatePlayerDto } from '../dtos/create-player.dto';
import { Player } from '../interfaces/palyer.interface';
import { v4 } from 'uuid';

@Injectable()
export class PlayersService {
  private players: Player[] = [];

  private readonly logger = new Logger(PlayersService.name);

  async savePlayer(createPlayerDto: CreatePlayerDto): Promise<Player> {
    this.logger.log(`createPlayerDto: ${JSON.stringify(createPlayerDto)}`);

    const player = await this.save(createPlayerDto);

    return player;
  }

  private async save(createPlayerDto: CreatePlayerDto): Promise<Player> {
    const { email, name, phoneNumber } = createPlayerDto;

    const player: Player = {
      _id: v4(),
      name,
      email,
      phoneNumber,
      ranking: 'A',
      rankingPosition: 3,
      urlAvatarPlayer: 'https://api.adorable.io/avatars/60/abott@adorable.png',
    };

    this.players.push(player);

    return player;
  }
}
