import sql from "better-sqlite3";

// make it connect to database
const db = sql("cats.db");

const getCats = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2_000));
  return db.prepare("SELECT * FROM cats").all();
};

export default getCats;
