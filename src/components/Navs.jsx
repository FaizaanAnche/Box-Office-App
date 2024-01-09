import { Link } from 'react-router-dom';

const LINKS = [
  {
    text: 'Home',
    path: '/',
  },
  {
    text: 'Starred',
    path: '/starred',
  },
];

const Navs = () => {
  return (
    <div>
      <ul>
        {LINKS.map(item => (
          <li key={item.path}>
            <Link to={item.path}>{item.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navs;
