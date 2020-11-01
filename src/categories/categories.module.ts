import { Module } from '@nestjs/common';
import { CategoriesController } from './controllers/categories.controller';
import { CreateCategoryService } from './services/createCategory.service';
import { ListAllCategoriesService } from './services/listAllCategories.service';
import { FindCategoryService } from './services/FindCategory.service';
import { UpdateCategoryService } from './services/updateCategory.service';
import { DeleteCategoryService } from './services/deleteCategory.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CategorySchema } from './repositories/category.schema';
import { LinkPlayerToCategoryService } from './services/linkPlayerToCategory.service';
import { PlayersModule } from 'src/players/players.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Category', schema: CategorySchema }]),
    PlayersModule,
  ],
  controllers: [CategoriesController],
  providers: [
    CreateCategoryService,
    ListAllCategoriesService,
    FindCategoryService,
    UpdateCategoryService,
    DeleteCategoryService,
    LinkPlayerToCategoryService,
  ],
  exports: []
})
export class CategoriesModule {}
