import React, { useEffect } from "react";
import { useDispatch } from 'react-redux'
import { Col, Container, Row } from "reactstrap";
import { Section } from "src/styles/components";
import Components from "src/components"
import { authStore } from 'service'
import { account } from "store/actions"

export default function Address () {
  const dispatch = useDispatch()

  // get account data 
  useEffect(() => {
    const authData = authStore.getAuth();
    authData && dispatch(account.getAccount())
  }, [dispatch])
  

  return (  
    <Section>
      <Container>
        <Row>
          <Col lg="3">
            <Components.AccountSidebar />
          </Col>
          <Col lg="9">
            <Components.Title props={{title: 'Addresses'}} />
            <div style={{marginTop: '25px'}}>
              <Components.AddressInfo />
            </div>
          </Col>
        </Row>
      </Container>
    </Section>
  );
}

Address.requireAuth = true