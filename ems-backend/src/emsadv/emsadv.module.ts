import { Module } from '@nestjs/common';
import { LoginModule } from './api/login/login.module';
import { EmsModule } from './api/ems/ems.module';

@Module({
  imports: [
    LoginModule,
    EmsModule],
  controllers: [],
  providers: [],
})
export class EmsAdvModule {}
