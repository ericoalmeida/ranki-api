import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Category } from '../interfaces/category.interface';

@Injectable()
export class ListAllCategoriesService {
  constructor(
    @InjectModel('Category') private readonly categoryModel: Model<Category>,
  ) {}

  async execute(): Promise<Category[]> {
    const categories = await this.categoryModel.find().populate('players').exec();

    return categories;
  }
}
