-- CreateEnum
CREATE TYPE "Status" AS ENUM ('Found', 'Lost', 'Rejoined');

-- CreateTable
CREATE TABLE "Location" (
    "id" SERIAL NOT NULL,
    "city_name" TEXT NOT NULL,
    "lat" DOUBLE PRECISION NOT NULL,
    "long" DOUBLE PRECISION NOT NULL,
    "google_place_id" TEXT NOT NULL,

    CONSTRAINT "Location_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pet" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "date_found" TIMESTAMP(3) NOT NULL,
    "locationId" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "picture_url" TEXT NOT NULL,
    "status" "Status" NOT NULL,

    CONSTRAINT "Pet_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Location_google_place_id_key" ON "Location"("google_place_id");

-- AddForeignKey
ALTER TABLE "Pet" ADD CONSTRAINT "Pet_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "Location"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
