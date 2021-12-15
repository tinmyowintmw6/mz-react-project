import React from "react";
import { Col, Container, Row, Jumbotron } from "reactstrap";
import { Section } from "src/styles/components";
import { NextSeo } from 'next-seo'
import styled from "styled-components"
import { colors } from "src/styles/constants"


const TxtTitle = styled.div`
  position: relative;
  width: 100%; 
  overflow: hidden;
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
export default function DeliveryInformation() {
  const SEO = {
    title: 'Delivery Information',
    openGraph: {
      title: 'Delivery Information'
    }
  }

  return (
    <Section>
      <Container>
        <Row>
          <NextSeo {...SEO} />
          <TxtTitle>
            <Jumbotron>
              <h1>Delivery Information</h1>
              <h5>Coverage Area:</h5>
              <p>At the moment, our delivery will reach to the townships inside Yangon city except: Coco islands, Dala, Kaw Hmu, Khayan, Kyaunggon, Kyauktan, Seikkyi Kanaungto, Thongwa, Twante , Townships.</p>

              <h5>Delivery Charges:</h5>
              <p>Free Delivery for minimum purchase 15,000MMK . Sending out of Yangon, customers have to pay extra charges base on location for more detail contact to our customer service.</p>

              <h5>Delivery Days:</h5>
              <p>Delivery Operation will be operated 7 days a week. Orders before 3pm will be delivered on the next day. Please note that the orders that are going to a different address, may take longer to process. We advise customers to put the correct shipping address when placing the orders. Terms & conditions are only applied.</p>

              <h5>Delivery Time:</h5>
              <p>An expected delivery time will be supplied by the deliveryman on the day of delivery. If the delivery date is unsuitable, it is possible to rearrange it with the deliveryman, e.g. you can move it to the next day.</p>

              <h5>Attempts:</h5>
              <p>3 attempts of delivery will be provided during 7 days for the available townships inside Yangon city.</p>
            </Jumbotron>
          </TxtTitle>
        </Row>
      </Container>
    </Section>
  )
}