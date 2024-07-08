import sql from "better-sqlite3";

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
