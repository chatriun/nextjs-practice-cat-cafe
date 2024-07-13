import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";
import fs from "node:fs";
import { S3 } from "@aws-sdk/client-s3";

const s3 = new S3({
  region: "ap-southeast-2",
  // auto mapping by aws-sdk
  // credentials: {
  //   accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  //   secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  // },
});
// make it connect to database
const db = sql("cats.db");

export const getCats = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2_000));
  // throw new Error("test");
  return db.prepare("SELECT * FROM cats").all();
};

export const getCat = (slug) => {
  return db.prepare("SELECT * FROM cats WHERE slug = ?").get(slug);
};

export const saveCat = async (cat) => {
  cat.slug = slugify(cat.name, { lower: true });
  cat.description = xss(cat.description);

  const extension = cat.image.name.split(".").pop();
  const fileName = `${cat.slug}.${extension}`;

  // const stream = fs.createWriteStream(`public/images/${fileName}`);
  const bufferedImage = await cat.image.arrayBuffer();

  // stream.write(Buffer.from(bufferedImage), (error) => {
  //   if (error) {
  //     throw new Error("saving image failed");
  //   }
  // });
  s3.putObject({
    Bucket: "anyaweesr-nextjs-practice-cat-tinder",
    Key: fileName,
    Body: Buffer.from(bufferedImage),
    ContentType: cat.image.type,
  });

  cat.image = fileName;

  db.prepare(
    `
    INSERT INTO cats
      (slug, name, age, gender, description, image, owner, owner_email)
    VALUES (
      @slug,
      @name,
      @age,
      @gender,
      @description,
      @image,
      @owner,
      @owner_email
    )
  `
  ).run(cat);
};
