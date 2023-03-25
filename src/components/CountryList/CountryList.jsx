import { Grid, GridItem } from 'components';
import { Link, useLocation } from 'react-router-dom';

export const CountryList = ({ items }) => {
  const location = useLocation();

  return (
    <>
      <Grid>
        {items.map(({ id, country, flag }) => (
          <GridItem key={id}>
            <Link to={`/country/${id}`} state={{ from: location }}>
              <img src={flag} alt={country} />
            </Link>
          </GridItem>
        ))}
      </Grid>
    </>
  );
};
