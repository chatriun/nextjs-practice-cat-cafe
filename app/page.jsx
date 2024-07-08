import Slideshow from "@/components/slideshow/slideshow";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <div style={{ display: "flex", gap: 20 }}>
        <div style={{ minWidth: "400px", minHeight: "400px" }}>
          <Slideshow />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            maxWidth: 700,
            wordBreak: "break-word",
          }}
        >
          <h1 style={{ maxWidth: 600, marginBottom: 20 }}>
            Welcome to Purrfect Match!
          </h1>
          <span>
            where we specialize in bringing together feline friends in search of
            love and companionship. Our cat-tinder platform is designed to help
            cats find their purrfect match, whether it's for friendship,
            playdates, or even lifelong partnerships.
          </span>
          <Link href="/cats" style={{ color: "blue", marginTop: 8 }}>
            meet our cats
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
