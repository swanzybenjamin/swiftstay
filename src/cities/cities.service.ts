import { Injectable } from '@nestjs/common';
import City from './city.model';

@Injectable()
export class CityService {
  async getAllCities(): Promise<City[]> {
    try {
      const cities = await City.findAll();
      return cities;
    } catch (error) {
      throw new Error('Error fetching cities: ' + error.message);
    }
  }
}
