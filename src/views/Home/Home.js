import React from 'react';
import {
	Container,
	Options,
	Option,
	OptionsContainer,
	Title,
	Spacer,
} from './Home.css';

const Home = () => {
  return (
    <Container>
      <OptionsContainer>
        <Title>Welcome to Contentful Integration APP</Title>
				<Spacer />
        <Title>Today you will learn the following topics:</Title>
        <Options>
          <Option>
            Basics about Contentful
          </Option>
          <Option>
            Creating your own content
          </Option>
          <Option>
            Understanding different ways of integration
          </Option>
          <Option>
            React application + Contentful API
          </Option>
        </Options>
      </OptionsContainer>
    </Container>
  );
};

export default Home;
