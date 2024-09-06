import { IsOptional, IsEmail, IsString } from 'class-validator';

export class UpdateClientDto {
  @IsOptional()
  @IsString({ message: 'First name must be a string' })
  firstName?: string;

  @IsOptional()
  @IsString({ message: 'Last name must be a string' })
  lastName?: string;

  @IsOptional()
  @IsString({ message: 'Document ID must be a string' })
  documentId?: string;

  @IsOptional()
  @IsEmail({}, { message: 'Email must be valid' })
  email?: string;
}
