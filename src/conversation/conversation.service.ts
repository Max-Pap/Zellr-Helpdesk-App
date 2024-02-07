import { Injectable } from '@nestjs/common';
@Injectable()
export class ConversationService {
  constructor() {}

  getByEmail(): string {
    return 'Here are all your conversation by the email';
  }
}
