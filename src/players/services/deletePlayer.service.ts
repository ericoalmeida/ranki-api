import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Player } from '../interfaces/palyer.interface';

@Injectable()
export class DeletePlayerService {
  constructor(
    @InjectModel('Player') private readonly playerModel: Model<Player>,
  ) {}

  async execute(Id: string): Promise<void> {
    const player = await this.playerModel.findById(Id);

    if (!player) {
      throw new NotFoundException('Player not found');
    }

    await this.playerModel.findByIdAndDelete(Id).exec();
  }
}
