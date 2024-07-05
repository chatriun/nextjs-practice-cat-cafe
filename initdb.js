const sql = require("better-sqlite3");
const db = sql("cats.db");

const dummyCats = [
  {
    id: "c1",
    slug: "white-cat-meme",
    name: "nong-9",
    age: 3.5,
    gender: "male",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
    image: "/images/cat01.jpg",
    owner: "ake",
    owner_email: "abcd@gmail.com",
  },
  {
    id: "c3",
    slug: "call-center-cat",
    name: "nong-3",
    age: 1,
    gender: "female",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
    image: "/images/cat03.jpg",
    owner: "jam",
    owner_email: "jamjam@gmail.com",
  },
  {
    id: "c9",
    slug: "pak-mai-aroi",
    name: "nong-1",
    age: 4,
    gender: "male",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
    image: "/images/cat09.jpg",
    owner: "ake",
    owner_email: "abcd@gmail.com",
  },
];
db.prepare(
  `
  CREATE TABLE IF NOT EXISTS cats (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    slug TEXT NOT NULL UNIQUE,
    name TEXT NOT NULL UNIQUE,
    age NUMBER NOT NULL,
    gender TEXT NOT NULL,
    description TEXT NOT NULL,
    image TEXT NOT NULL,
    owner TEXT NOT NULL,
    owner_email TEXT NOT NULL
  )
`
).run();

const initData = async () => {
  const stmt = db.prepare(`
    INSERT INTO cats VALUES (
      null,
      @slug,
      @name,
      @age,
      @gender,
      @description,
      @image,
      @owner,
      @owner_email
    )
    `);

  for (const cat of dummyCats) {
    stmt.run(cat);
  }
};

initData();
