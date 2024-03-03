import ormconfig from './ormconfig';

const ormseedconfig = {
  ...ormconfig,
  //   seeds: ['src/seeds/**/*.seed.ts'],
  //   factories: ['src/factories/**/*.factory.ts'],
  migrations: ['src/seeds/**/*.ts'],
  cli: {
    migrationsDir: 'src/seeds',
  },
};

export default ormseedconfig;
