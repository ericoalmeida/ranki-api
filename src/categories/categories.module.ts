import { Module } from '@nestjs/common';
import { CategoriesController } from './controllers/categories.controller';
import { CreateCategoryService } from './services/createCategory.service';
import { ListAllCategoriesService } from './services/listAllCategories.service';
import { FindCategoryService } from './services/FindCategory.service';
import { UpdateCategoryService } from './services/updateCategory.service';
import { DeleteCategoryService } from './services/deleteCategory.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CategorySchema } from './repositories/category.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Category', schema: CategorySchema }]),
  ],
  controllers: [CategoriesController],
  providers: [
    CreateCategoryService,
    ListAllCategoriesService,
    FindCategoryService,
    UpdateCategoryService,
    DeleteCategoryService,
  ],
})
export class CategoriesModule {}
