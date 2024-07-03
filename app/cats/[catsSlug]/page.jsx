const FilmDetailPage = ({ params }) => {
  return (
    <>
      <h2>film item</h2>
      <h3>{params.filmsSlug}</h3>
    </>
  );
};

export default FilmDetailPage;
