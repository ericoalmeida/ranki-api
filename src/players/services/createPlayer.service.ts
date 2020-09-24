import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PlayerDto } from '../dtos/player.dto';
import { Player } from '../interfaces/palyer.interface';

@Injectable()
export class CreatePlayerService {
  constructor(
    @InjectModel('Player') private readonly playerModel: Model<Player>,
  ) {}

  async execute(createPlayerDto: PlayerDto): Promise<void> {
    const { email, name, phoneNumber } = createPlayerDto;

    const playerEmailExists = await this.playerModel.findOne({ email }).exec();

    if (playerEmailExists) {
      throw new BadRequestException(
        `Player already exists with email ${email}`,
      );
    }

    const playerPhoneExists = await this.playerModel
      .findOne({ phoneNumber })
      .exec();

    if (playerPhoneExists) {
      throw new BadRequestException(
        `Player already exists with phone number ${phoneNumber}`,
      );
    }

    const player = new this.playerModel({ email, name, phoneNumber });

    player.save();
  }
}
