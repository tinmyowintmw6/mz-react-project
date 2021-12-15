import React from "react";
import { useSelector } from "react-redux"
import { Col, Container, Row } from "reactstrap";
import { Section } from "src/styles/components";
import { NextSeo } from 'next-seo'
import styled from "styled-components"
import { colors } from "src/styles/constants"


const Faq = styled.div`
  position: relative;
  width: 100%; 
    h2 {
        color: ${colors.titleText};
        font-size: 18px;
        font-family: 'fontStyle-bold';
        border-bottom: 1px solid ${colors.titleText};
        padding-bottom: 5px;
    }
    h5 {
       font-family: 'fontstyle-bold';
       font-size: 14px;
    }
    p {
        text-align: justify;
    }
`
export default function FAQ() {
  const { langData } = useSelector(state => state.translate)
  const SEO = {
    title: 'FAQ',
    openGraph: {
      title: 'FAQ'
    }
  }

  return (
    <Section>
      <Container>
        <Row>
          <NextSeo {...SEO} />
          <Faq>
            <h2>{langData?.accountLogin}</h2>
            {
              langData?.accountLoginDesc.map((x, i) =>
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
                </React.Fragment>
              )
            }
            <h2>{langData?.popularQuestion}</h2>
            {
              langData?.popularQuestionDesc.map((x, i) =>
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
                </React.Fragment>
              )
            }
            <h2>{langData?.productsPrices}</h2>
            {
              langData?.productsPricesDesc.map((x, i) =>
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
                </React.Fragment>
              )
            }
             <h2>{langData?.order}</h2>
            {
              langData?.orderDesc.map((x, i) =>
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
                </React.Fragment>
              )
            }
             <h2>{langData?.payment}</h2>
            {
              langData?.paymentDesc.map((x, i) =>
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
                </React.Fragment>
              )
            }
             <h2>{langData?.returnsRefund}</h2>
            {
              langData?.returnsRefundDesc.map((x, i) =>
                <React.Fragment key={i}>
                  <h5>{x?.title}</h5>
                  <p>{x?.subtitle}</p>
                  <p>
                    {
                      x?.desc?.map((desc, index) => 
                      <React.Fragment key={index}>
                        <p>{desc?.desc_title}</p>
                        <ul>
                          {
                            desc?.desc_para?.map((para, key) =>
                              <li key={key}>{para}</li>
                            )
                          }
                        </ul>
                      </React.Fragment>
                      )
                    }
                  </p>
                </React.Fragment>
              )
            }
             <h2>{langData?.delivery}</h2>
            {
              langData?.deliveryDesc.map((x, i) =>
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
                </React.Fragment>
              )
            }
            <h2>{langData?.salesCampaign}</h2>
            {
              langData?.salesCampaignDesc.map((x, i) =>
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
                </React.Fragment>
              )
            }
            {/* <h2>{langData?.sellingonMzOnline}</h2>
            {
              langData?.sellingonMzOnlineDesc.map((x, i) =>
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
                </React.Fragment>
              )
            }
            <h2>{langData?.privacySecurity}</h2>
            {
              langData?.privacySecurityDesc.map((x, i) =>
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
                </React.Fragment>
              )
            } */}
          </Faq>
        </Row>
      </Container>
    </Section>
  )
}