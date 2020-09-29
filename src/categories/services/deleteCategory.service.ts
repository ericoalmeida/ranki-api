import { BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Category } from '../interfaces/category.interface';

export class DeleteCategoryService {
  constructor(
    @InjectModel('Category') private readonly categoryModel: Model<Category>,
  ) {}

  async execute(Id: string): Promise<void> {
    const category = await this.categoryModel.findById(Id);

    if (!category) {
      throw new BadRequestException('Category not found!');
    }

    await this.categoryModel.findByIdAndDelete(Id);
  }
}
