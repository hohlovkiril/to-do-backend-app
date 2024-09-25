import { ApiProperty } from '@nestjs/swagger';

export class UpdateListDto {
  @ApiProperty({})
  readonly icon?: string;

  @ApiProperty({
    description: 'The new list title',
  })
  readonly title?: string;
}
