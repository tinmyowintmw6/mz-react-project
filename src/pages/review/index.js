import React, { useState } from 'react'
import { Col, Container, Row } from "reactstrap";
import { Section } from "src/styles/components";
import Components from "src/components"
import styled from 'styled-components'
import { colors } from "src/styles/constants";
import { CustomRating } from "src/styles/components"
import { CalendarToday } from '@material-ui/icons'

const ReviewContainer = styled.div`
  margin-top: 25px;
  .review-card {
    border: 1px solid #D7D7DC;
    border-radius: 4px;
    margin-bottom: 16px;
    .title-wrap {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      padding: 15px 24px;
      background: #F5F5F6;
      border-radius: 4px 4px 0 0;
      @media (max-width: 991px) {
        flex-direction: column;
      }
      .title {
        font-size: 16px;
        font-family: 'fontStyle-bold';
        margin-bottom: 0;
        @media (max-width: 991px) {
          margin-bottom: 5px;
        }
        span {
          font-family: 'fontStyle-light';
          margin-left: 10px;
        }
      }
      .date {
        margin-bottom: 0;
        font-size: 14px;
        color: #686878;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        svg {
          width: 16px;
          height: 16px;
          margin-right: 5px;
        }
      }
    }
    .info-wrap {
      padding: 20px 24px;
      .info {
        margin: 5px 0 0;
      }
    }
  }
`

export default function Review () {
  // rating default value 
  const [ratingValue, setratingValue] = useState(3);
  return (  
    <Section>
      <Container>
        <Row>
          <Col lg="3">
            <Components.AccountSidebar />
          </Col>
          <Col lg="9">
            <Components.Title props={{title: 'My Reviews'}} />
            <ReviewContainer>
              <div className="review-card">
                <div className="title-wrap">
                  <h3 className="title">
                    Review to: <span>iPhone 12 Pro Max</span>
                  </h3>
                  <p className="date"><CalendarToday /><span>24 June 2021</span></p>
                </div>
                <div className="info-wrap">
                  <CustomRating name="half-rating-read" defaultValue={ratingValue} precision={0.5} readOnly size="small" className="rating" />
                  <p className="info">
                    This is a good quality feeling phone overall. It feels so expensive just like it's price lol.
                  </p>
                </div>
              </div>
              <div className="review-card">
                <div className="title-wrap">
                  <h3 className="title">
                    Review to: <span>Philips Blender</span>
                  </h3>
                  <p className="date"><CalendarToday /><span>24 June 2021</span></p>
                </div>
                <div className="info-wrap">
                  <CustomRating name="half-rating-read" defaultValue={ratingValue} precision={0.5} readOnly size="small" className="rating" />
                  <p className="info">
                    I bought this mixer to quickly blend protein shakes with the main attachment. Wow, what a bad choice. Butrflynet sounded crazy when she was going on about chopping meat with it. How could a major company possibly let that happen. She had to be using it incorrectly. I mean, she was "blending meat", come on. And for the price, how could I go wrong. Well, even my protein drinks get sucked.
                  </p>
                </div>
              </div>
            </ReviewContainer>
          </Col>
        </Row>
      </Container>
    </Section>
  );
}

Review.requireAuth = true