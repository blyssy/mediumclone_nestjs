import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedDb03MAR2024_10_49_00 implements MigrationInterface {
  name = 'SeedDb03MAR2024_10_49_00';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO "tags" ("name") VALUES ('dragons'), ('coffee'), ('javascript'), ('typescript'), ('node'), ('deno'), ('oak'), ('react'), ('vue'), ('svelte'), ('nestjs'), ('express'), ('koa'), ('apollo'), ('graphql'), ('prisma'), ('typeorm'), ('postgres'), ('mysql'), ('mongodb'), ('redis'), ('sqlite'), ('jest'), ('mocha'), ('chai'), ('cypress'), ('puppeteer'), ('playwright'), ('jasmine'), ('karma'), ('protractor'), ('nightwatch'), ('selenium'), ('webdriverio'), ('appium'), ('detox'), ('testcafe'), ('pact'), ('jest'), ('mocha'), ('chai'), ('cypress'), ('puppeteer'), ('playwright'), ('jasmine'), ('karma'), ('protractor'), ('nightwatch'), ('selenium'), ('webdriverio'), ('appium'), ('detox'), ('testcafe'), ('pact')`,
    );

    await queryRunner.query(
      `INSERT INTO "users" (username, email, password) VALUES ('johndoe', 'test@test.com', '$2b$10$mNVBs6BREOa899zknj18KuNvCLJEXm2IbC.iCatd5DxYDbEU1jhfu'), ('test', 'test2@test.com', '$2b$10$Wkb7vP3lmbKW3nY7uF5pGuoH7H2MJDNjiPb9Q9nPAW7fxb43Hztra')`,
    );

    await queryRunner.query(
      `INSERT INTO articles (slug, title, description, body, "tagList", "authorId") VALUES ('first-artilec', 'First Article', 'First article description', 'First article body', 'first,artilce', 1), ('second-article', 'Second Article', 'Second article description', 'Second article body', 'second,article', 2)`,
    );
  }

  public async down(): Promise<void> {}
}
