import { Test, TestingModule } from '@nestjs/testing';
import { CreatePlayersService } from './createPlayers.service';

describe('CreatePlayersService', () => {
  let service: CreatePlayersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreatePlayersService],
    }).compile();

    service = module.get<CreatePlayersService>(CreatePlayersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
