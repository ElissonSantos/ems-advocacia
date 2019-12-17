import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmsAdvModule } from './emsadv/emsadv.module';

@Module({
  imports: [EmsAdvModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
