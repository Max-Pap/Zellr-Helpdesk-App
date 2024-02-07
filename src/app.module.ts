import { Module } from '@nestjs/common';
import { AppController } from '@app/app.controller';
import { AppService } from '@app/app.service';
import { UserModule } from './user/user.module';
import { ConversationModule } from './conversation/conversation.module';
import { MessageModule } from './message/message.module';
import { TaskModule } from './task/task.module';

@Module({
  imports: [UserModule, ConversationModule, MessageModule, TaskModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
