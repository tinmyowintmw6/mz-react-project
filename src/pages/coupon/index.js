import React from "react";
import { Col, Container, Row } from "reactstrap";
import { Section } from "src/styles/components";
import Components from "src/components"

export default function Coupon () {
  return ( 
    <>
      <Section>
        <Container>
          <Row>
            <Col lg="3">
              <Components.AccountSidebar />
            </Col>
            <Col lg="9">
              <Components.Title props={{title: 'My Coupons'}} />
              <div style={{marginTop: '25px'}}>
                <Components.CouponCard />
              </div>
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  );
}
 
Coupon.requireAuth = true