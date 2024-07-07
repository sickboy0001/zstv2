-- CreateTable
CREATE TABLE "start_type" (
    "id" SERIAL NOT NULL,
    "disp_name" TEXT NOT NULL,
    "title_name" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "display_order" INTEGER NOT NULL,

    CONSTRAINT "start_type_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "start_post" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "public_flg" BOOLEAN NOT NULL DEFAULT true,
    "delete_flg" BOOLEAN NOT NULL DEFAULT false,
    "type_id" INTEGER NOT NULL,
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "start_post_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "start_post" ADD CONSTRAINT "start_post_type_id_fkey" FOREIGN KEY ("type_id") REFERENCES "start_type"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
