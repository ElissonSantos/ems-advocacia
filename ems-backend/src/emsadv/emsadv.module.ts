import { Module } from '@nestjs/common';
import { LoginModule } from './login/login.module';
import { MessagesModule } from './messages/messages.module';

@Module({
  imports: [LoginModule, MessagesModule],
  controllers: [],
  providers: [],
})
export class EmsAdvModule {}
