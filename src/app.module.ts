import { Module } from '@nestjs/common';
import { ReservasModule } from './reservas/reservas.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [ReservasModule, PrismaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
