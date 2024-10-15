import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ContactService } from './contact.service';
import { JwtGuard } from 'src/auth/guard';
import { GetUSer } from 'src/auth/decorator';
import { User } from '@prisma/client';

@UseGuards(JwtGuard)
@Controller('contacts')
export class ContactController {
  constructor(private contactService: ContactService) {}

  @Get()
  getAllContactById(@GetUSer() user: User) {
    return this.contactService.getAllContacts(user.id);
  }

  @Get(':username')
  getContactByUsername(@Param('username') username: string) {
    return this.contactService.getContactByUsername(username);
  }
}
