import Link from "next/link";

const FilmsPage = () => {
  return (
    <>
      <h2>FilmsPage page</h2>
      <Link href="/films/film-1">film 01</Link>
      <Link href="/films/film-2">film 02</Link>
    </>
  );
};

export default FilmsPage;
