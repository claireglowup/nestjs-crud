import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable({})
export class ContactService {
  constructor(private prisma: PrismaService) {}

  async getAllContacts(id: number) {
    const contacts = await this.prisma.contact.findMany({
      where: {
        id,
      },
    });
    return contacts;
  }

  async getContactByUsername(username: string) {
    const contacts = await this.prisma.contact.findMany({
      where: {
        username,
      },
    });

    if (contacts.length === 0) {
      throw new NotFoundException({ msg: 'Contact not found' });
    }

    return contacts;
  }
}
