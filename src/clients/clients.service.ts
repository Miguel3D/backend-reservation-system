import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';

@Injectable()
export class ClientsService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(filters: { name?: string; documentId?: string }) {
    return this.prisma.client.findMany({
      where: {
        AND: [
          filters.name
            ? {
                OR: [
                  { firstName: { contains: filters.name } },
                  { lastName: { contains: filters.name } },
                ],
              }
            : {},
          filters.documentId ? { documentId: filters.documentId } : {},
        ],
      },
    });
  }

  async findOne(id: number) {
    const client = await this.prisma.client.findUnique({
      where: { id },
    });
    if (!client) {
      throw new NotFoundException(`Client with ID ${id} not found`);
    }
    return client;
  }

  async create(createClientDto: CreateClientDto) {
    return this.prisma.client.create({
      data: createClientDto,
    });
  }

  async update(id: number, updateClientDto: UpdateClientDto) {
    const client = await this.findOne(id);
    return this.prisma.client.update({
      where: { id },
      data: updateClientDto,
    });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.client.delete({
      where: { id },
    });
  }
}
