import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Player } from 'src/players/interfaces/palyer.interface';
import { Category } from '../interfaces/category.interface';

@Injectable()
export class LinkPlayerToCategoryService {
  constructor(
    @InjectModel('Category') private readonly categoryModel: Model<Category>,
    @InjectModel('Player') private readonly playerModel: Model<Player>,
  ) {}

  async execute(categoryId: string, playerId: string): Promise<void> {
    const category = await this.categoryModel.findById(categoryId).exec();

    if (!category) {
      throw new NotFoundException('Category not found');
    }

    const player = await this.playerModel.findById(playerId).exec();

    if (!player) {
      throw new NotFoundException('Player not found');
    }

    const playerExistsAtCategory = await this.categoryModel
      .find({ categoryId })
      .where('players')
      .in(player._id)
      .exec();

    if (playerExistsAtCategory) {
      throw new BadRequestException(
        'This user already exists at this category',
      );
    }

    category.players.push(player);

    await this.categoryModel.findByIdAndUpdate(categoryId, category);
  }
}
