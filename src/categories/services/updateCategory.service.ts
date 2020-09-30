import { BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { categoryDto } from '../dtos/category.dto';
import { Category } from '../interfaces/category.interface';

export class UpdateCategoryService {
  constructor(
    @InjectModel('Category') private readonly categoryModel: Model<Category>,
  ) {}

  async execute(Id: string, updateCategoryDto: categoryDto): Promise<void> {
    const lcategory = await this.categoryModel.findById(Id);
    const { category, description, events } = updateCategoryDto;

    if (!lcategory) {
      throw new BadRequestException('Category not found!');
    }

    console.log(events);

    await this.categoryModel
      .findOneAndUpdate({ Id }, { category, description, ...events })
      .exec();
  }
}
