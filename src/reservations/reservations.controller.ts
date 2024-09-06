import {
  Controller,
  Post,
  Put,
  Delete,
  Get,
  Body,
  Query,
  Param,
} from '@nestjs/common';
import { ReservationsService } from './reservations.service';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';

@Controller('reservations')
export class ReservationsController {
  constructor(private readonly reservationsService: ReservationsService) {}

  @Post()
  create(@Body() createReservationDto: CreateReservationDto) {
    const { date, clientId, serviceId } = createReservationDto;
    return this.reservationsService.createReservation({
      date: new Date(date), // Convertir string a Date
      clientId,
      serviceId,
    });
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() updateReservationDto: UpdateReservationDto,
  ) {
    const { date, clientId, serviceId } = updateReservationDto;
    return this.reservationsService.updateReservation(id, {
      ...(date && { date: new Date(date) }), // Convertir string a Date si existe
      ...(clientId && { clientId }),
      ...(serviceId && { serviceId }),
    });
  }

  @Delete(':id')
  cancel(@Param('id') id: number) {
    return this.reservationsService.cancelReservation(id); // Solo se usa el ID
  }

  @Get()
  getAll(
    @Query() filters: { date?: string; clientId?: number; serviceId?: number },
  ) {
    const { date, clientId, serviceId } = filters;
    return this.reservationsService.getReservations({
      ...(date && { date: new Date(date) }), // Convertir string a Date si existe
      ...(clientId && { clientId }),
      ...(serviceId && { serviceId }),
    });
  }
}
