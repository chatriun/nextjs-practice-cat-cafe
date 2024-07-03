import Link from "next/link";

const Home = () => {
  return (
    <>
      <h2>Home page</h2>
      <Link href="/films">go to films</Link>
    </>
  );
};

export default Home;
