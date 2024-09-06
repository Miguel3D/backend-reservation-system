import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';

@Injectable()
export class ReservationsService {
  constructor(private prisma: PrismaService) {}

  async createReservation(data: CreateReservationDto) {
    return this.prisma.reservation.create({
      data: {
        date: new Date(data.date), // Convertir el string a Date
        client: { connect: { id: data.clientId } },
        service: { connect: { id: data.serviceId } },
      },
    });
  }

  async updateReservation(id: number, data: UpdateReservationDto) {
    return this.prisma.reservation.update({
      where: { id },
      data: {
        date: new Date(data.date), // Convertir el string a Date
        client: { connect: { id: data.clientId } },
        service: { connect: { id: data.serviceId } },
      },
    });
  }

  async getReservations() {
    return this.prisma.reservation.findMany({
      include: {
        client: true,
        service: true,
      },
    });
  }

  async deleteReservation(id: number) {
    return this.prisma.reservation.delete({ where: { id } });
  }
}
