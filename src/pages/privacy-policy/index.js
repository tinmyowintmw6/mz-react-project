import React from "react";
import { Col, Container, Row, Jumbotron } from "reactstrap";
import { Section } from "src/styles/components";
import { NextSeo } from 'next-seo'
import styled from "styled-components"
import { colors } from "src/styles/constants"
import { useSelector } from "react-redux"


const TxtTitle = styled.div`
  position: relative;
  width: 100%; 
  h1 {
    color: ${colors.titleText};
    font-size: 29px;
    font-family: 'fontstyle-bold';
    margin-bottom: 3rem;
    } 
    h5 {
        color: ${colors.titleText};
        font-size: 18px;
        font-family: 'fontStyle-bold';
    }
    p {
        text-align: justify;
    }

`
export default function PrivacyPolicy() {
  const { langData } = useSelector(state => state.translate)
  const SEO = {
    title: 'Privacy Policy',
    openGraph: {
      title: 'Privacy Policy'
    }
  }

  return (
    <Section>
      <Container>
        <Row>
          <NextSeo {...SEO} />
          <TxtTitle>
            <h1>{langData?.PrivacyPolicy}</h1>
            {
              langData?.PrivacyPolicyDesc.map((x, i) =>
                <React.Fragment key={i}>
                  <h5>{x?.title}</h5>
                  <p>{x?.subtitle}</p>
                  <p>
                    <ul>
                      {
                        x?.desc.map((desc, index) =>
                          <li key={index}>{desc}</li>
                        )
                      }
                    </ul>
                  </p>
                  <p>{x?.subtitle2}</p>
                  
                </React.Fragment>
              )
            }
            
          </TxtTitle>
        </Row>
      </Container>
    </Section>
  )
}