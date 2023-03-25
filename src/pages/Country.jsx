import {
  Section,
  Container,
  CountryInfo,
  Loader,
  GoBackBtn,
} from 'components';
import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import { fetchCountry } from '../service/country-service';
export const Country = () => {
  const { countryId } = useParams();
  const [country, setCountry] = useState({});

  const location = useLocation();
  useEffect(() => {
    const oneCountry = async () => {
      const data = await fetchCountry(countryId);
      setCountry(data);
    };
    oneCountry();
  }, [countryId]);
  const goBackLink = location.state?.from ?? '/';
  console.log(goBackLink)
  return (
    <Section>
      <Container>
        <GoBackBtn path={goBackLink}>Back to countries</GoBackBtn>
        <CountryInfo country={country} />
      </Container>
    </Section>
  );
};
