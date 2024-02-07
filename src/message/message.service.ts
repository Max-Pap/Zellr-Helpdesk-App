import { Injectable } from '@nestjs/common';
@Injectable()
export class MessageService {
  constructor() {}

  getByConversationId(): string {
    return 'Here are all your messages by the conversation id';
  }
}
