import { Link } from 'react-router-dom';

const ShowCard = ({ name, image, id, summary }) => {
  // shorten the description
  const description = summary
    ? summary.split(' ').slice(0, 10).join(' ').replace(/<.+?>/g, '')
    : 'No description';

  return (
    <div>
      <img src={image} alt={name} />
      <h1>{name}</h1>
      <p>{description}</p>
      <div>
        <Link to={`/show/${id}`}>Read More</Link>
        <button type="button">Bookmark</button>
      </div>
    </div>
  );
};

export default ShowCard;
