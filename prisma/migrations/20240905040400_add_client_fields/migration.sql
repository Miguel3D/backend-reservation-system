/*
  Warnings:

  - Added the required column `apellido` to the `Cliente` table without a default value. This is not possible if the table is not empty.
  - Added the required column `correo` to the `Cliente` table without a default value. This is not possible if the table is not empty.
  - Added the required column `telefono` to the `Cliente` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Cliente" ADD COLUMN     "apellido" TEXT NOT NULL,
ADD COLUMN     "correo" TEXT NOT NULL,
ADD COLUMN     "telefono" TEXT NOT NULL;
