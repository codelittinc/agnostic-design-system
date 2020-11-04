import React from 'react';
import { Meta } from '@storybook/react'
import Container from './Container';
import Row from './Row';
import Col from './Col';
import mdx from './Grid.stories.mdx'

export default {
  title: 'Grid System',
  component: Container,
  parameters: {
    docs: {
      page: mdx,
    }
  }
} as Meta;

export const Grid = () => (
  <Container>
    <Row>
      <Col xs={4} sm={4} md={3} lg={1}>
        Col 1
      </Col>
      <Col xs={4} sm={4} md={3} lg={1}>
        Col 2
      </Col>
      <Col xs={4} sm={4} md={3} lg={1}>
        Col 3
      </Col>
      <Col xs={4} sm={4} md={3} lg={1}>
        Col 4
      </Col>
      <Col xs={4} sm={4} md={3} lg={1}>
        Col 5
      </Col>
      <Col xs={4} sm={4} md={3} lg={1}>
        Col 6
        </Col>
      <Col xs={4} sm={4} md={3} lg={1}>
        Col 7
      </Col>
      <Col xs={4} sm={4} md={3} lg={1}>
        Col 8
      </Col>
      <Col xs={4} sm={4} md={3} lg={1}>
        Col 9
      </Col>
      <Col xs={4} sm={4} md={3} lg={1}>
        Col 10
      </Col>
      <Col xs={4} sm={4} md={3} lg={1}>
        Col 11
      </Col>
      <Col xs={4} sm={4} md={3} lg={1}>
        Col 12
      </Col>
    </Row>
  </Container>
);
