/*
  Warnings:

  - A unique constraint covering the columns `[Email]` on the table `UserRegister` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `UserRegister_Email_key` ON `UserRegister`(`Email`);
