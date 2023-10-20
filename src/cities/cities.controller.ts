import { Controller, Get, Param } from '@nestjs/common';
import { CityService } from './cities.service';
import { Cities } from './cities.model';

@Controller('cities')
export class CityController {
  constructor(private readonly cityService: CityService) {}

  @Get()
  async getAllCities(): Promise<Cities[]> {
    try {
      const cities = await this.cityService.allCities();
      return cities;
    } catch (error) {
      throw new Error('Error fetching cities: ' + error.message);
    }
  }

  @Get(':id')
  async getCityById(@Param('id') id: number): Promise<Cities> {
    try {
      const city = await this.cityService.oneCity(id);
      if (!city) {
        throw new Error('City not found');
      }
      return city;
    } catch (error) {
      throw new Error('Error fetching city: ' + error.message);
    }
  }
}
