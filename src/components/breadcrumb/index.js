import React from 'react';
import { BreadcrumbWrap } from './style/breadcrumb-style';
import { Breadcrumb, BreadcrumbItem, Container, Row, Col } from 'reactstrap';
import Link from 'next/link';

const BreadcrumbCom = ({props}) => {
  // console.log(`props`, props)
  return (
    <BreadcrumbWrap>
      <Container>
        <Row>
          <Col md="12">
            <Breadcrumb>
              {
                props?.map((x, i) => 
                  <BreadcrumbItem key={i} active={x?.link ? false : true}>
                    {
                      x?.link ?
                      <Link href={x?.link} passHref><a>{x?.title}</a></Link>
                      :
                      x?.title
                    }
                  </BreadcrumbItem>
                )
              }
            </Breadcrumb>
          </Col>
        </Row>
      </Container>
    </BreadcrumbWrap>
  );
};

export default BreadcrumbCom