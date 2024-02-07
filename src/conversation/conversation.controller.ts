import { Controller, Get } from '@nestjs/common';
import { ConversationService } from './conversation.service';

@Controller('conversations')
export class ConversationController {
  constructor(private readonly conversationService: ConversationService) {}

  @Get()
  getByEmail(): string {
    return this.conversationService.getByEmail();
  }
}
