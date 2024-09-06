import { IsDateString, IsInt, IsOptional } from 'class-validator';

export class UpdateReservationDto {
  @IsDateString({}, { message: 'Date must be in ISO 8601 format' })
  @IsOptional()
  date?: string;

  @IsInt({ message: 'Client ID must be an integer' })
  @IsOptional()
  clientId?: number;

  @IsInt({ message: 'Service ID must be an integer' })
  @IsOptional()
  serviceId?: number;
}
