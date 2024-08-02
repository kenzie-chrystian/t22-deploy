-- CreateTable
CREATE TABLE "Music" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(50) NOT NULL,
    "length" INTEGER NOT NULL,
    "bandId" INTEGER NOT NULL,

    CONSTRAINT "Music_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Music" ADD CONSTRAINT "Music_bandId_fkey" FOREIGN KEY ("bandId") REFERENCES "Band"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
