import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Player } from '../interfaces/palyer.interface';

@Injectable()
export class ListAllPlayersService {
  constructor(
    @InjectModel('Player') private readonly playerModel: Model<Player>,
  ) {}

  async execute(): Promise<Player[]> {
    return this.playerModel.find().exec();
  }
}
