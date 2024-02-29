import ActorCard from './ActorCard';

const ActorsGrid = ({ actors }) => {
  return (
    <div>
      {actors.map(data => (
        <ActorCard
          key={data.person.id}
          name={data.person.name}
          gender={data.person.gender}
          country={data.person.country ? data.person.country.name : null}
          image={
            data.person.image
              ? data.person.image.medium
              : '/not_found_image.png'
          }
        />
      ))}
    </div>
  );
};

export default ActorsGrid;
