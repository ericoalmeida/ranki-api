import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { categoryDto } from '../dtos/category.dto';
import { Category } from '../interfaces/category.interface';
import { CreateCategoryService } from '../services/createCategory.service';
import { DeleteCategoryService } from '../services/deleteCategory.service';
import { FindCategoryService } from '../services/FindCategory.service';
import { ListAllCategoriesService } from '../services/listAllCategories.service';
import { UpdateCategoryService } from '../services/updateCategory.service';

@Controller('categories')
export class CategoriesController {
  constructor(
    private readonly createCategoriesService: CreateCategoryService,
    private readonly listAllCategoriesService: ListAllCategoriesService,
    private readonly findCategoryService: FindCategoryService,
    private readonly updateCategoryService: UpdateCategoryService,
    private readonly deleteCategoryService: DeleteCategoryService,
  ) {}

  @Get()
  async listAll(): Promise<Category[]> {
    const categories = await this.listAllCategoriesService.execute();

    return categories;
  }

  @Get(':id')
  async findCategory(@Param('id') id: string): Promise<Category> {
    const category = await this.findCategoryService.execute(id);

    return category;
  }

  @Post()
  @UsePipes(ValidationPipe)
  async saveCategory(@Body() createCategoryDto: categoryDto): Promise<void> {
    const { category, description, events } = createCategoryDto;

    await this.createCategoriesService.execute({
      category,
      description,
      events,
    });
  }

  @Put(':id')
  async updateCategory(
    @Param('id') id: string,
    @Body() updateCategoryDto: categoryDto,
  ): Promise<void> {
    await this.updateCategoryService.execute(id, updateCategoryDto);
  }

  @Delete(':id')
  async deleteCategory(@Param('id') id: string): Promise<void> {
    await this.deleteCategoryService.execute(id);
  }
}
