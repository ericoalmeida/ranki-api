import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { categoryDto } from '../dtos/category.dto';
import { Category } from '../interfaces/category.interface';

@Injectable()
export class CreateCategoryService {
  constructor(
    @InjectModel('Category') private readonly categoryModel: Model<Category>,
  ) {}

  async execute(createCategoryDto: categoryDto): Promise<void> {
    const { category, description, events } = createCategoryDto;

    const categoryExists = await this.categoryModel
      .findOne({ category })
      .exec();

    if (categoryExists) {
      throw new BadRequestException('Category already exists!');
    }

    const lCategory = new this.categoryModel({
      category,
      description,
      events,
    });

    lCategory.save();
  }
}
