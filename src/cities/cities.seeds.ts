import sequelize from '../db/sequelize.config';
import City from './city.model';

const cities = [
  { name: 'Accra', region: 'Greater Accra Region' },
  { name: 'Kumasi', region: 'Ashanti Region' },
  { name: 'Tamale', region: 'Northern Region' },
  { name: 'Sekondi-Takoradi', region: 'Western Region' },
  { name: 'Sunyani', region: 'Bono Region' },
  { name: 'Cape Coast', region: 'Central Region' },
  { name: 'Obuasi', region: 'Ashanti Region' },
  { name: 'Tema', region: 'Greater Accra Region' },
  { name: 'East Legon', region: 'Greater Accra Region' },
  { name: 'Koforidua', region: 'Eastern Region' },
];

const seedCities = async () => {
  try {
    await sequelize.sync(); // Sync the model with the database
    for (const city of cities) {
      await City.create(city);
    }

    console.log('Cities seeded successfully.');
  } catch (error) {
    console.error('Error seeding cities:', error);
  } finally {
    await sequelize.close(); // Close the database connection
  }
};

export default seedCities();
