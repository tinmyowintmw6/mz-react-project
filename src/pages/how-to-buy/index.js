import React from "react";
import { useSelector } from "react-redux"
import { Col, Container, Row, Jumbotron } from "reactstrap";
import { Section } from "src/styles/components";
import { NextSeo } from 'next-seo'
import styled from "styled-components"
import { colors } from "src/styles/constants"


const howToBuyWrapper = styled.div`
  position: relative;
  width: 100%; 
    h5 {
        color: ${colors.titleText};
        font-size: 18px;
        font-family: 'fontStyle-bold';
    }
    p {
        text-align: justify;
    }

`
export default function HowToBuy() {
  const { langData } = useSelector(state => state.translate)
  const SEO = {
    title: 'How to Buy ?',
    openGraph: {
      title: 'How to Buy ?'
    }
  }

  return (
    <Section>
      <Container>
        <Row>
          <NextSeo {...SEO} />
          <howToBuyWrapper>
            <Jumbotron>
              <h5>{langData?.howToBuy}</h5>
              <p>{langData?.howToBuyDesc}</p>
            </Jumbotron>
          </howToBuyWrapper>
        </Row>
      </Container>
    </Section>
  )
}