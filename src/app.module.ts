import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ReservationsModule } from './reservations/reservations.module';
import { ClientsModule } from './clients/clients.module';
import { ServicesModule } from './services/services.module';
import { PrismaService } from './prisma.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ReservationsModule,
    ClientsModule,
    ServicesModule,
  ],
  providers: [PrismaService],
})
export class AppModule {}
