import { IsDateString, IsInt, IsNotEmpty } from 'class-validator';

export class CreateReservationDto {
  @IsDateString({}, { message: 'Date must be in ISO 8601 format' })
  @IsNotEmpty({ message: 'Date is required' })
  date: string;

  @IsInt({ message: 'Client ID must be an integer' })
  @IsNotEmpty({ message: 'Client ID is required' })
  clientId: number;

  @IsInt({ message: 'Service ID must be an integer' })
  @IsNotEmpty({ message: 'Service ID is required' })
  serviceId: number;
}
