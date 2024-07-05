const CatDetailPage = ({ params }) => {
  return (
    <>
      <h2>nong info</h2>
      <h3>{params.catsSlug}</h3>
    </>
  );
};

export default CatDetailPage;
