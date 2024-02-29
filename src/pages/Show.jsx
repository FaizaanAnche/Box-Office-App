import { useParams } from 'react-router-dom';
// The useParams hook returns an object of key/value pairs of the dynamic params
// from the current URL that were matched by the <Route path>.

const Show = () => {
  const { showId } = useParams();
  return <div>show page for {showId}</div>;
};

export default Show;
