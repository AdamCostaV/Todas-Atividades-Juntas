import type { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateUsers1793824019657 implements MigrationInterface {
    name = 'CreateUsers1793824019657';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "usuarios" (
                "id" SERIAL NOT NULL,
                "email" character varying NOT NULL,
                "senha" character varying NOT NULL,
                CONSTRAINT "UQ_usuarios_email" UNIQUE ("email"),
                CONSTRAINT "PK_usuarios" PRIMARY KEY ("id")
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "usuarios"`);
    }
}