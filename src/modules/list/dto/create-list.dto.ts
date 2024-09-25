import { ApiProperty } from '@nestjs/swagger';

export class CreateListDto {
  @ApiProperty({})
  readonly icon?: string;

  @ApiProperty({
    description: 'The list title',
  })
  readonly title: string;
}
