import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Category } from '../interfaces/category.interface';

@Injectable()
export class FindCategoryService {
  constructor(
    @InjectModel('Category') private readonly categoryModel: Model<Category>,
  ) {}

  async execute(Id: string): Promise<Category> {
    const category = await this.categoryModel.findById(Id).exec();

    if (!category) {
      throw new BadRequestException('Category not found!');
    }

    return category;
  }
}
