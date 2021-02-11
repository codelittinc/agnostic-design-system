import React from 'react';
import { Meta } from '@storybook/react';
import Container from './Container';
import Row from './Row';
import Col from './Col';
import mdx from './Grid.stories.mdx';

export default {
  title: 'Components/Grid System',
  component: Container,
  parameters: {
    docs: {
      page: mdx
    }
  }
} as Meta;

export const NormalGrid = () => (
  <Container>
    <Row>
      <Col xxs={4} xs={4} sm={4} md={3} lg={1} xl={1} xxl={1}>
        Col 1
      </Col>
      <Col xxs={4} xs={4} sm={4} md={3} lg={1} xl={1} xxl={1}>
        Col 2
      </Col>
      <Col xxs={4} xs={4} sm={4} md={3} lg={1} xl={1} xxl={1}>
        Col 3
      </Col>
      <Col xxs={4} xs={4} sm={4} md={3} lg={1} xl={1} xxl={1}>
        Col 4
      </Col>
      <Col xxs={4} xs={4} sm={4} md={3} lg={1} xl={1} xxl={1}>
        Col 5
      </Col>
      <Col xxs={4} xs={4} sm={4} md={3} lg={1} xl={1} xxl={1}>
        Col 6
      </Col>
      <Col xxs={4} xs={4} sm={4} md={3} lg={1} xl={1} xxl={1}>
        Col 7
      </Col>
      <Col xxs={4} xs={4} sm={4} md={3} lg={1} xl={1} xxl={1}>
        Col 8
      </Col>
      <Col xxs={4} xs={4} sm={4} md={3} lg={1} xl={1} xxl={1}>
        Col 9
      </Col>
      <Col xxs={4} xs={4} sm={4} md={3} lg={1} xl={1} xxl={1}>
        Col 10
      </Col>
      <Col xxs={4} xs={4} sm={4} md={3} lg={1} xl={1} xxl={1}>
        Col 11
      </Col>
      <Col xxs={4} xs={4} sm={4} md={3} lg={1} xl={1} xxl={1}>
        Col 12
      </Col>
    </Row>
  </Container>
);

export const FluidGrid = () => (
  <Container fluid>
    <Row>
      <Col xxs={4} xs={4} sm={4} md={3} lg={3} xl={1} xxl={1}>
        Col 1
      </Col>
      <Col xxs={4} xs={4} sm={4} md={3} lg={3} xl={1} xxl={1}>
        Col 2
      </Col>
      <Col xxs={4} xs={4} sm={4} md={3} lg={3} xl={1} xxl={1}>
        Col 3
      </Col>
      <Col xxs={4} xs={4} sm={4} md={3} lg={3} xl={1} xxl={1}>
        Col 4
      </Col>
      <Col xxs={4} xs={4} sm={4} md={3} lg={3} xl={1} xxl={1}>
        Col 5
      </Col>
      <Col xxs={4} xs={4} sm={4} md={3} lg={3} xl={1} xxl={1}>
        Col 6
      </Col>
      <Col xxs={4} xs={4} sm={4} md={3} lg={3} xl={1} xxl={1}>
        Col 7
      </Col>
      <Col xxs={4} xs={4} sm={4} md={3} lg={3} xl={1} xxl={1}>
        Col 8
      </Col>
      <Col xxs={4} xs={4} sm={4} md={3} lg={3} xl={1} xxl={1}>
        Col 9
      </Col>
      <Col xxs={4} xs={4} sm={4} md={3} lg={3} xl={1} xxl={1}>
        Col 10
      </Col>
      <Col xxs={4} xs={4} sm={4} md={3} lg={3} xl={1} xxl={1}>
        Col 11
      </Col>
      <Col xxs={4} xs={4} sm={4} md={3} lg={3} xl={1} xxl={1}>
        Col 12
      </Col>
      <Col xxs={4} xs={4} sm={4} md={3} lg={3} xl={1} xxl={1}>
        Col 13
      </Col>
      <Col xxs={4} xs={4} sm={4} md={3} lg={3} xl={1} xxl={1}>
        Col 14
      </Col>
      <Col xxs={4} xs={4} sm={4} md={3} lg={3} xl={1} xxl={1}>
        Col 15
      </Col>
      <Col xxs={4} xs={4} sm={4} md={3} lg={3} xl={1} xxl={1}>
        Col 16
      </Col>
    </Row>
  </Container>
);

export const CustomGuttersGrid = () => (
  <Container>
    <Row>
      <Col gutterType='no-gutters' xs={4} sm={4} md={3} lg={1}>
        No Gutters
      </Col>
      <Col gutterType='no-left-gutter' xs={4} sm={4} md={3} lg={1}>
        No Left Gutter
      </Col>
      <Col gutterType='no-right-gutter' xs={4} sm={4} md={3} lg={1}>
        No Right Gutter
      </Col>
      <Col gutterType='no-right-gutter' xs={4} sm={4} md={3} lg={1}>
        No Right Gutter
      </Col>
      <Col gutterType='no-left-gutter' xs={4} sm={4} md={3} lg={1}>
        No Left Gutter
      </Col>
      <Col xs={4} sm={4} md={3} lg={1}>
        All gutters
      </Col>
      <Col gutterType='no-right-gutter' xs={4} sm={4} md={3} lg={1}>
        No Right Gutter
      </Col>
      <Col gutterType='no-left-gutter' xs={4} sm={4} md={3} lg={1}>
        No Left Gutter
      </Col>
      <Col gutterType='no-gutters' xs={4} sm={4} md={3} lg={1}>
        No Gutters
      </Col>
      <Col gutterType='no-right-gutter' xs={4} sm={4} md={3} lg={1}>
        No Right Gutter
      </Col>
      <Col gutterType='no-left-gutter' xs={4} sm={4} md={3} lg={1}>
        No Left Gutter
      </Col>
      <Col gutterType='no-gutters' xs={4} sm={4} md={3} lg={1}>
        No Gutters
      </Col>
    </Row>
  </Container>
);
