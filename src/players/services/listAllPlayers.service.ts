import { Injectable } from '@nestjs/common';
import { Player } from '../interfaces/palyer.interface';

@Injectable()
export class ListAllPlayersService {
  private players: Player[] = [];

  async execute(): Promise<Player[]> {
    return this.players;
  }
}
