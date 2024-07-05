import CatItem from "@/components/cats/cat-item";
import Link from "next/link";
import cat09 from "@/asset/cats/cat09.jpg";

const INITIAL_CATS_DATA = [
  {
    id: "c1",
    slug: "pak-mai-aroi",
    name: "nong-pak",
    age: 4,
    gender: "male",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
    image: cat09,
    owner: "ake",
  },
];

const CatsPage = () => {
  return (
    <div>
      <header
        style={{
          display: "flex",
          flexDirection: "column",
          border: "2px solid red",
        }}
      >
        <h2 style={{ marginBottom: 18 }}>
          Is your feline friend looking for love?
        </h2>
        <span>
          Add your cat's profile to our Cat-Tinder app and help them find the
          purrfect match!
        </span>
        <Link href="/cats/share" style={{ color: "blue" }}>
          Help Your Cat Find Love!
        </Link>
      </header>
      <main>
        <ul>
          {INITIAL_CATS_DATA.map((cat) => (
            <li key={cat.id}>
              <CatItem cat={cat} />
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default CatsPage;
