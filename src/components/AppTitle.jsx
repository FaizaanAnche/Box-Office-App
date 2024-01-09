const AppTitle = props => {
  const { title = 'Box Office', subtitle = 'Catalogue of movies and actors' } =
    props;
  return (
    <div>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
};

export default AppTitle;
