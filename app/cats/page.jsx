import CatItem from "@/components/cats/cat-item";
import { getCats } from "@/lib/cats";
import Link from "next/link";
import { Suspense } from "react";

const Cats = async () => {
  const cats = await getCats();

  return (
    <ul>
      {cats.map((cat) => (
        <li key={cat.id}>
          <CatItem cat={cat} />
        </li>
      ))}
    </ul>
  );
};

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
        <Suspense
          fallback={
            <p style={{ textAlign: "center", marginTop: 30, marginBottom: 30 }}>
              loading...
            </p>
          }
        >
          <Cats />
        </Suspense>
      </main>
    </div>
  );
};

export default CatsPage;
