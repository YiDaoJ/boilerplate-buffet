import axios from 'axios';
import { GetStaticProps } from 'next';

const Film: FC<{ films: any }> = ({ films }) => {
  return (
    <div>
      <h2>Star Wars film list</h2>
      <ul>
        {films.map((film, index) => (
          <li key={index}>{film.title}</li>
        ))}
      </ul>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await axios.get('https://swapi.py4e.com/api/films');
  const data = await res.data.results;

  return {
    props: {
      films: data,
    },
  };
};

export default Film;
