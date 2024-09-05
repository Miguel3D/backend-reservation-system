import {
  Controller,
  Post,
  Put,
  Delete,
  Get,
  Body,
  Param,
  Query,
} from '@nestjs/common';
import { ReservasService } from './reservas.service';

@Controller('reservas')
export class ReservasController {
  constructor(private reservasService: ReservasService) {}

  @Post()
  async crearReserva(
    @Body() body: { fecha: Date; clienteId: number; servicioId: number },
  ) {
    return this.reservasService.crearReserva(body);
  }

  @Put(':id')
  async modificarReserva(
    @Param('id') id: number,
    @Body() body: { fecha?: Date; clienteId?: number; servicioId?: number },
  ) {
    return this.reservasService.modificarReserva(id, body);
  }

  @Delete(':id')
  async cancelarReserva(@Param('id') id: number) {
    return this.reservasService.cancelarReserva(id);
  }

  @Get()
  async obtenerReservas(
    @Query() query: { fecha?: Date; servicioId?: number; clienteId?: number },
  ) {
    return this.reservasService.obtenerReservas(query);
  }
}
