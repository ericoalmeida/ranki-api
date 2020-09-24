import {
  ArgumentMetadata,
  BadRequestException,
  PipeTransform,
} from '@nestjs/common';

export class PlayersValidationsPipe implements PipeTransform {
  transform(
    value: string | number,
    metadata: ArgumentMetadata,
  ): string | number {
    const { data } = metadata;

    if (!value) {
      throw new BadRequestException(
        `Deve ser informado um valor válido para o parâmetro ${data}`,
      );
    }

    return value;
  }
}
