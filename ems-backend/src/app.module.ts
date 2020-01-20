import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmsAdvModule } from './emsadv/emsadv.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      name: 'emsdb',
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'elisson',
      entities: [],
      synchronize: true,
    }),
    EmsAdvModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
