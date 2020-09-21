import { Injectable } from '@nestjs/common';

@Injectable()
export class FindPlayerById {
  async execute(Id: string): Promise<void> {
    const player = {};
    Object.assign(player, { Id });
  }
}
