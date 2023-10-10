import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DBService } from './db/db.module';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, DBService],
})
export class AppModule {}
