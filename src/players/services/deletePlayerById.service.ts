import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Player } from '../interfaces/palyer.interface';

@Injectable()
export class DeletePlayerByIdService {
  constructor(
    @InjectModel('Player') private readonly playerModel: Model<Player>,
  ) {}

  async execute(Id: string): Promise<void> {
    try {
      this.playerModel.findByIdAndDelete(Id).exec();
    } catch (error) {
      throw new Error(error);
    }
  }
}
