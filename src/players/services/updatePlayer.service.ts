import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PlayerDto } from '../dtos/player.dto';
import { Player } from '../interfaces/palyer.interface';

@Injectable()
export class UpdatePlayerService {
  constructor(
    @InjectModel('Player') private readonly playerModel: Model<Player>,
  ) {}

  async execute(Id: string, updatePlayerDto: PlayerDto): Promise<void> {
    const { name, email, phoneNumber } = updatePlayerDto;

    const player = await this.playerModel.findById(Id);

    if (!player) {
      throw new NotFoundException('Player not found!');
    }

    await this.playerModel.findByIdAndUpdate(Id, { name, email, phoneNumber });
  }
}
