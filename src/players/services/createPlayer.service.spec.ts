import { Test, TestingModule } from '@nestjs/testing';
import { CreatePlayerService } from './createPlayer.service';

describe('CreatePlayerService', () => {
  let service: CreatePlayerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreatePlayerService],
    }).compile();

    service = module.get<CreatePlayerService>(CreatePlayerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
