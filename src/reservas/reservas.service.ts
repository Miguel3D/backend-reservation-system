import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ReservasService {
  constructor(private prisma: PrismaService) {}

  async crearReserva(data) {
    const { fecha, cliente, servicioId } = data;

    const clienteCreated = await this.prisma.cliente.upsert({
      where: { correo: cliente.correo },
      update: {
        nombre: cliente.nombre,
        apellido: cliente.apellido,
        telefono: cliente.telefono,
      },
      create: cliente,
    });

    return await this.prisma.reserva.create({
      data: {
        fecha: new Date(fecha).toISOString(),
        clienteId: clienteCreated.id,
        servicioId,
      },
    });
  }

  async modificarReserva(
    id: number,
    data: { fecha?: Date; clienteId?: number; servicioId?: number },
  ) {
    return this.prisma.reserva.update({
      where: { id },
      data,
    });
  }

  async cancelarReserva(id: number) {
    return this.prisma.reserva.delete({
      where: { id },
    });
  }

  async obtenerReservas(filtros: {
    fecha?: Date;
    servicioId?: number;
    clienteId?: number;
  }) {
    return this.prisma.reserva.findMany({
      where: filtros,
    });
  }
}
