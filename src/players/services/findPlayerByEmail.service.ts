import { Injectable } from '@nestjs/common';

@Injectable()
export class FindPlayerByEmail {
  async execute(email: string): Promise<void> {
    const player = {};
    Object.assign(player, { email });
  }
}
