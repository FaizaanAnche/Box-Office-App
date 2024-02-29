import ShowCard from './ShowCard';

const ShowsGrid = ({ shows }) => {
  return (
    <div>
      {shows.map(data => (
        <ShowCard
          key={data.show.id}
          name={data.show.name}
          image={
            //check if image is not null
            data.show.image ? data.show.image.medium : '/not_found_image.png'
          }
          summary={data.show.summary}
        />
      ))}
    </div>
  );
};

export default ShowsGrid;
