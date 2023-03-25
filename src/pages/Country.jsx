import { Section, Container, CountryInfo, Loader } from 'components';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { fetchCountry } from '../service/country-service';

export const Country = () => {
  const { countryId } = useParams();
  const [country, setCountry] = useState({});

  useEffect(() => {
    const oneCountry = async () => {
      const data = await fetchCountry(countryId);
      setCountry(data);
    };
    oneCountry();
  }, [countryId]);
  return (
    <Section>
      <Container>
        <CountryInfo country={country} />
      </Container>
    </Section>
  );
};
