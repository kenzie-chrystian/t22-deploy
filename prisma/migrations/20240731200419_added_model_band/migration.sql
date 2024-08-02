-- CreateTable
CREATE TABLE "Band" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "formationYear" INTEGER NOT NULL,

    CONSTRAINT "Band_pkey" PRIMARY KEY ("id")
);
