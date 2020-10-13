import { NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { categoryDto } from '../dtos/category.dto';
import { Category } from '../interfaces/category.interface';

export class UpdateCategoryService {
  constructor(
    @InjectModel('Category') private readonly categoryModel: Model<Category>,
  ) {}

  async execute(Id: string, updateCategoryDto: categoryDto): Promise<void> {
    const { category, description, events } = updateCategoryDto;

    const lCategory = await this.categoryModel.findById(Id);

    if (!lCategory) {
      throw new NotFoundException('Category not found!');
    }

    await this.categoryModel
      .findByIdAndUpdate(
        Id,
        {
          $set: { category, description, events },
        },
        { new: true },
      )
      .exec();
  }
}
