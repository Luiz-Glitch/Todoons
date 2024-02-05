import React from 'react';

import { Container, Content, Header, Title } from './styles';

interface AttributeProps {
  title: string;
  Icon: React.ReactElement | (() => React.ReactElement);
  ValueComponent: React.ReactElement | (() => React.ReactElement);
}

export function Attribute({ title, Icon, ValueComponent }: AttributeProps) {
  const iconElement = typeof Icon === 'function' ? Icon() : Icon;
  const valueComponentElement =
    typeof ValueComponent === 'function' ? ValueComponent() : ValueComponent;

  return (
    <Container>
      <Header>
        {iconElement}
        <Title>{title}</Title>
      </Header>
      <Content>{valueComponentElement}</Content>
    </Container>
  );
}
