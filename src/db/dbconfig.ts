import { Sequelize } from 'sequelize-typescript';
import { Cities } from '../cities/cities.model';
import { citiesSeed } from 'src/cities/cities.seeds';
import * as dotenv from 'dotenv';
dotenv.configDotenv();

export const dbConfig = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT),
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        //logging: false,
      });

      sequelize.addModels([Cities]);

      await sequelize.authenticate();
      await sequelize.sync();

      await seeding(sequelize);

      return sequelize;
    },
  },
];

async function seeding(sequelize: Sequelize) {
  const existingCities = await Cities.findAll();

  if (existingCities.length === 0) {
    await Cities.bulkCreate(citiesSeed, { validate: true });
    console.log('Cities seeded successfully.');
  } else {
    console.log('Cities already exist in the database. Skipping seeding.');
  }
}
