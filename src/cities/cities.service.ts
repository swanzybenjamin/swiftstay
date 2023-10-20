import { Injectable } from '@nestjs/common';
import { Cities } from './cities.model';

@Injectable()
export class CityService {
  async allCities(): Promise<Cities[]> {
    try {
      const cities = await Cities.findAll();
      return cities;
    } catch (error) {
      throw new Error('Error fetching cities: ' + error.message);
    }
  }

  async oneCity(id: number): Promise<Cities> {
    try {
      const city = await Cities.findByPk(id);
      return city;
    } catch (error) {
      throw new Error('Error fetching city: ' + error.message);
    }
  }
}
