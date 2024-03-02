import { MigrationInterface, QueryRunner } from "typeorm";

export class AddUsernameToUser1709399011530 implements MigrationInterface {
    name = 'AddUsernameToUser1709399011530'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "username" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "username"`);
    }

}
