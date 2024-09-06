import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Reservation } from '@prisma/client';

@Injectable()
export class ReservationsService {
  constructor(private readonly prisma: PrismaService) {}

  async createReservation(data: {
    date: Date;
    clientId: number;
    serviceId: number;
  }): Promise<Reservation> {
    return this.prisma.reservation.create({
      data,
    });
  }

  async updateReservation(
    id: number,
    data: Partial<{ date: Date; clientId: number; serviceId: number }>,
  ): Promise<Reservation> {
    return this.prisma.reservation.update({
      where: { id },
      data,
    });
  }

  async cancelReservation(id: number): Promise<Reservation> {
    return this.prisma.reservation.delete({
      where: { id },
    });
  }

  async getReservations(filters: {
    date?: Date;
    clientId?: number;
    serviceId?: number;
  }): Promise<Reservation[]> {
    return this.prisma.reservation.findMany({
      where: filters,
    });
  }
}
