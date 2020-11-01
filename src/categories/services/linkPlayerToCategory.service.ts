import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { FindPlayerService } from 'src/players/services/findPlayer.service';
import { Category } from '../interfaces/category.interface';

@Injectable()
export class LinkPlayerToCategoryService {
  constructor(
    @InjectModel('Category') private readonly categoryModel: Model<Category>,
    private readonly  findPlayers: FindPlayerService,
  ) {}

  async execute(categoryId: string, playerId: string): Promise<void> {
    const category = await this.categoryModel.findById(categoryId).exec();

    if (!category) {
      throw new NotFoundException('Category not found');
    }

    const player = await this.findPlayers.execute(playerId);

    if (!player) {
      throw new NotFoundException('Player not found');
    }

    const playerExistsAtCategory = await this.categoryModel
      .find({ _id: categoryId })
      .where('players')
      .in(player._id)
      .exec();

    if (playerExistsAtCategory.length > 0) {
      throw new BadRequestException(
        'This user already exists at this category',
      );
    }

    category.players.push(player);

    await this.categoryModel.findByIdAndUpdate(categoryId, category).exec();
  }
}
