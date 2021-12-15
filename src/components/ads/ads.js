import React, { useState } from "react";
import { Col, Container, Row } from "reactstrap";
import AdsBanner from "./style/ads-style";
import Image from "next/image";
import Link from "next/link";

const Ads = () => {
  const [loading, setloading] = useState(false)
  const ads_data = [
    {
      id: 1,
      name: 'Automotive',
      desc: 'Banner 1200x1200',
      image: false
    }
  ]
  return (  
    <>
      <Container>
        <Row>
          <Col md="12">
            {
              ads_data?.length > 0 &&
              ads_data?.map((x, i) =>
                <AdsBanner key={i}>
                  <Image src={`${x?.image || '/ads.svg'}`} width={1200} height={200} layout="responsive" alt="ads" />
                  <div className="ads-text">
                    <h2>{x?.name}</h2>
                    <p>{x?.desc}</p>
                  </div>
                  <div className="ads-btn">
                    <Link href="/" passHref>
                      <a className="btn-custom btn-lg btn-default">Discover</a>
                    </Link>
                  </div>
                </AdsBanner>
              )
            }
          </Col>
        </Row>
      </Container>
    </>
  );
}
 
export default Ads;