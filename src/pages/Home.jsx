import { Container, CountryList, Heading, Loader, Section } from 'components';
import { useState } from 'react';
import { useEffect } from 'react';
import { getCountries } from 'service/country-service';

export const Home = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const getEuropeCountries = async () => {
      const data = await getCountries();

      setCountries(data.filter(country => country.country !== "Russia"));
    };

    getEuropeCountries();
  }, []);
  return (
    <Section>
      <Container>
        <CountryList items={countries} />
      </Container>
    </Section>
  );
};
