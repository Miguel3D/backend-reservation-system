import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';

@Injectable()
export class ReservationsService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.reservation.findMany({
      include: {
        client: true,
        service: true,
      },
    });
  }

  async findOne(id: number) {
    const reservation = await this.prisma.reservation.findUnique({
      where: { id },
      include: {
        client: true,
        service: true,
      },
    });
    if (!reservation) {
      throw new NotFoundException(`Reservation with ID ${id} not found`);
    }
    return reservation;
  }

  async create(createReservationDto: CreateReservationDto) {
    return this.prisma.reservation.create({
      data: createReservationDto,
      include: {
        client: true,
        service: true,
      },
    });
  }

  async update(id: number, updateReservationDto: UpdateReservationDto) {
    const reservation = await this.findOne(id);
    return this.prisma.reservation.update({
      where: { id },
      data: updateReservationDto,
      include: {
        client: true,
        service: true,
      },
    });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.reservation.delete({
      where: { id },
    });
  }
}
