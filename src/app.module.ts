import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ReservationsModule } from './reservations/reservations.module';
import { ClientsModule } from './clients/clients.module';
import { ServicesModule } from './services/services.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ReservationsModule,
    ClientsModule,
    ServicesModule,
  ],
  providers: [PrismaService],
  exports: [PrismaService],
})
export class AppModule {}
