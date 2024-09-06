import { Module } from '@nestjs/common';
import { ReservationsService } from './reservations.service';
import { ReservationsController } from './reservations.controller';
import { PrismaService } from '../prisma.service';

@Module({
  providers: [ReservationsService, PrismaService],
  controllers: [ReservationsController],
  exports: [ReservationsService],
})
export class ReservationsModule {}
