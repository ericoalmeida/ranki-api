import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePlayerDto } from '../dtos/create-player.dto';
import { Player } from '../interfaces/palyer.interface';

@Injectable()
export class CreatePlayerService {
  constructor(
    @InjectModel('Player') private readonly playerModel: Model<Player>,
  ) {}

  async execute(createPlayerDto: CreatePlayerDto): Promise<Player> {
    const { email, name, phoneNumber } = createPlayerDto;

    const playerEmailExists = await this.playerModel.findOne({ email }).exec();

    if (playerEmailExists) {
    }

    const playerPhoneExists = await this.playerModel
      .findOne({ phoneNumber })
      .exec();

    if (playerPhoneExists) {
    }

    const player = new this.playerModel({ email, name, phoneNumber });

    return player.save();
  }
}
