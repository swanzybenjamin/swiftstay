import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { dbConfig } from './db/dbconfig';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, ...dbConfig],
  exports: [...dbConfig],
})
export class AppModule {}
