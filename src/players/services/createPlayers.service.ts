import { Injectable, Logger } from '@nestjs/common';
import { CreatePlayerDto } from '../dtos/create-player.dto';
import { Player } from '../interfaces/palyer.interface';
import { v4 } from 'uuid';

@Injectable()
export class CreatePlayersService {
  private players: Player[] = [];

  private readonly logger = new Logger(CreatePlayersService.name);

  async execute(createPlayerDto: CreatePlayerDto): Promise<void> {
    //displays log message with the data of the created player.
    this.logger.log(`createPlayerDto: ${JSON.stringify(createPlayerDto)}`);

    await this.save(createPlayerDto);
  }

  private async save(createPlayerDto: CreatePlayerDto): Promise<void> {
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
  }
}
