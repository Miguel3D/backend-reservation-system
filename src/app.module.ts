import { Module } from '@nestjs/common';
import { ReservasModule } from './reservas/reservas.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [ReservasModule],
  providers: [PrismaService],
})
export class AppModule {}
