import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { dbConfig } from './db/dbconfig';
import { CityService } from './cities/cities.service';
import { CityController } from './cities/cities.controller';

@Module({
  imports: [],
  controllers: [AppController, CityController],
  providers: [AppService, ...dbConfig, CityService],
  exports: [...dbConfig],
})
export class AppModule {}
