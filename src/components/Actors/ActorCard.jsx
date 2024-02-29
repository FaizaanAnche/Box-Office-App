const ActorCard = ({ name, gender, country, image }) => {
  return (
    <div>
      <div>
        <img src={image} alt={name} />
      </div>
      <h1>
        {name} {!!gender && `(${gender})`}
      </h1>
      <p>{country ? `Comes from ${country}` : `No country known.`}</p>
    </div>
  );
};

export default ActorCard;
