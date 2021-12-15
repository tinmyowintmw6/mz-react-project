import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Col, Container, Row } from "reactstrap";
import { Section } from "src/styles/components";
import Components from "src/components"
import { NextSeo } from 'next-seo'
import styled from "styled-components"
import { colors } from "src/styles/constants"
import { CustomTable } from "src/styles/components";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core';
import { fontSize, textAlign } from "@material-ui/system";


const TxtTitle = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  .favorite {
    position: absolute;
    top: 0px;
    right: 0px;
    z-index: 9;
    svg {
      color: ${colors.paraText};
    }
  }
`


export default function ReturnExchange() {
  const SEO = {
    title: 'Return Exchange',
    openGraph: {
      title: 'Return Exchange'
    }
  }

  return (
    <Section>
      <Container>
        <Row>
          <NextSeo {...SEO} />
          <TxtTitle>
            <CustomTable className="order-detail-table">
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell style={{ textAlign: "center", fontSize: '13px' }}>PRODUCT TYPE	</TableCell>
                    <TableCell style={{ textAlign: "center", fontSize: '13px' }}>REASON</TableCell>
                    <TableCell colSpan="3" style={{ textAlign: "center", fontSize: '13px' }}>TYPES OF RETURN & REFUND	</TableCell>
                    <TableCell style={{ textAlign: "center", fontSize: '13px' }}>PRODUCT CONDITION</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell style={{ textAlign: "center", fontSize: '13px' }}>RETURN ON DELIVERY STAGE	</TableCell>
                    <TableCell style={{ textAlign: "center", fontSize: '13px' }}>RETURN WITHIN 3 DAYS</TableCell>
                    <TableCell style={{ textAlign: "center", fontSize: '13px' }}>RETURN WITHIN 7 DAYS</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell rowSpan="3" style={{ verticalAlign: 'baseline', textAlign: 'center', fontWeight: '600', color: '#6E6E78', borderRight: '1px solid rgba(224, 224, 224, 1)' }}>
                      FRESH
                    </TableCell>
                    <TableCell style={{ verticalAlign: 'baseline', textAlign: 'center' }}> Wrong Product </TableCell>
                    <TableCell style={{ verticalAlign: 'baseline', textAlign: 'center' }}> √ </TableCell>
                    <TableCell style={{ verticalAlign: 'baseline', textAlign: 'center' }}> x </TableCell>
                    <TableCell className="delivery" style={{ verticalAlign: 'baseline', textAlign: 'center' }}> x </TableCell>
                    <TableCell style={{ verticalAlign: 'baseline', textAlign: 'center' }}> </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell style={{ verticalAlign: 'baseline', textAlign: 'center' }}>
                      Poor Quality
                    </TableCell>
                    <TableCell style={{ verticalAlign: 'baseline', textAlign: 'center' }}> √ </TableCell>
                    <TableCell style={{ verticalAlign: 'baseline', textAlign: 'center' }}> x </TableCell>
                    <TableCell style={{ verticalAlign: 'baseline', textAlign: 'center' }}> x </TableCell>
                    <TableCell style={{ verticalAlign: 'baseline', textAlign: 'center' }}></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell style={{ verticalAlign: 'baseline', textAlign: 'center' }}>
                      No Reason /Change Of Mind
                    </TableCell>
                    <TableCell style={{ verticalAlign: 'baseline', textAlign: 'center' }}> x </TableCell>
                    <TableCell style={{ verticalAlign: 'baseline', textAlign: 'center' }}> x </TableCell>
                    <TableCell style={{ verticalAlign: 'baseline', textAlign: 'center' }}> x </TableCell>
                    <TableCell style={{ verticalAlign: 'baseline', textAlign: 'center' }}></TableCell>
                  </TableRow>
                </TableBody>
                <TableBody>
                  <TableRow>
                    <TableCell rowSpan="3" style={{ verticalAlign: 'baseline', textAlign: 'center', fontWeight: '600', color: '#6E6E78', borderRight: '1px solid rgba(224, 224, 224, 1)' }}>
                      FROZEN
                    </TableCell>
                    <TableCell style={{ verticalAlign: 'baseline', textAlign: 'center' }}> Wrong Product </TableCell>
                    <TableCell style={{ verticalAlign: 'baseline', textAlign: 'center' }}> √ </TableCell>
                    <TableCell style={{ verticalAlign: 'baseline', textAlign: 'center' }}> x </TableCell>
                    <TableCell className="delivery" style={{ verticalAlign: 'baseline', textAlign: 'center' }}> x </TableCell>
                    <TableCell style={{ verticalAlign: 'baseline', textAlign: 'center' }}></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell style={{ verticalAlign: 'baseline', textAlign: 'center' }}> Poor Quality </TableCell>
                    <TableCell style={{ verticalAlign: 'baseline', textAlign: 'center' }}> √ </TableCell>
                    <TableCell style={{ verticalAlign: 'baseline', textAlign: 'center' }}> x </TableCell>
                    <TableCell style={{ verticalAlign: 'baseline', textAlign: 'center' }}> x </TableCell>
                    <TableCell style={{ verticalAlign: 'baseline', textAlign: 'center' }}></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell style={{ verticalAlign: 'baseline', textAlign: 'center' }}>
                      No Reason /Change Of Mind
                    </TableCell>
                    <TableCell style={{ verticalAlign: 'baseline', textAlign: 'center' }}> x </TableCell>
                    <TableCell style={{ verticalAlign: 'baseline', textAlign: 'center' }}> x </TableCell>
                    <TableCell style={{ verticalAlign: 'baseline', textAlign: 'center' }}> x </TableCell>
                    <TableCell style={{ verticalAlign: 'baseline', textAlign: 'center' }}> </TableCell>
                  </TableRow>
                </TableBody>
                <TableBody>
                  <TableRow>
                    <TableCell rowSpan="3" style={{ verticalAlign: 'baseline', textAlign: 'center', fontWeight: '600', color: '#6E6E78', borderRight: '1px solid rgba(224, 224, 224, 1)' }}>
                      MEDICINE
                    </TableCell>
                    <TableCell style={{ verticalAlign: 'baseline', textAlign: 'center' }}>
                      Wrong Product
                    </TableCell>
                    <TableCell style={{ verticalAlign: 'baseline', textAlign: 'center' }}>
                      √
                    </TableCell>
                    <TableCell style={{ verticalAlign: 'baseline', textAlign: 'center' }}>
                      x
                    </TableCell>
                    <TableCell className="delivery" style={{ verticalAlign: 'baseline', textAlign: 'center' }}>
                      x
                    </TableCell>
                    <TableCell style={{ verticalAlign: 'baseline', textAlign: 'center' }}>

                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell style={{ verticalAlign: 'baseline', textAlign: 'center' }}>
                      Poor Quality
                    </TableCell>
                    <TableCell style={{ verticalAlign: 'baseline', textAlign: 'center' }}>
                      √
                    </TableCell>
                    <TableCell style={{ verticalAlign: 'baseline', textAlign: 'center' }}>
                      x
                    </TableCell>
                    <TableCell style={{ verticalAlign: 'baseline', textAlign: 'center' }}>

                    </TableCell>
                    <TableCell style={{ verticalAlign: 'baseline', textAlign: 'center' }}>

                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell style={{ verticalAlign: 'baseline', textAlign: 'center' }}>
                      No Reason /Change Of Mind
                    </TableCell>
                    <TableCell style={{ verticalAlign: 'baseline', textAlign: 'center' }}>
                      x
                    </TableCell>
                    <TableCell style={{ verticalAlign: 'baseline', textAlign: 'center' }}>
                      x
                    </TableCell>
                    <TableCell style={{ verticalAlign: 'baseline', textAlign: 'center' }}>
                      x
                    </TableCell>
                    <TableCell style={{ verticalAlign: 'baseline', textAlign: 'center' }}>

                    </TableCell>
                  </TableRow>
                </TableBody>
                <TableBody>
                  <TableRow>
                    <TableCell rowSpan="3" style={{ verticalAlign: 'baseline', textAlign: 'center', fontWeight: '600', color: '#6E6E78', borderRight: '1px solid rgba(224, 224, 224, 1)' }}>
                      BOOKS, CD & SOFTWARE
                    </TableCell>
                    <TableCell style={{ verticalAlign: 'baseline', textAlign: 'center' }}>
                      Wrong Product
                    </TableCell>
                    <TableCell style={{ verticalAlign: 'baseline', textAlign: 'center' }}>
                      √
                    </TableCell>
                    <TableCell style={{ verticalAlign: 'baseline', textAlign: 'center' }}>
                      x
                    </TableCell>
                    <TableCell className="delivery" style={{ verticalAlign: 'baseline', textAlign: 'center' }}>
                      x
                    </TableCell>
                    <TableCell style={{ verticalAlign: 'baseline', textAlign: 'center' }}>

                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell style={{ verticalAlign: 'baseline', textAlign: 'center' }}>
                      Poor Quality
                    </TableCell>
                    <TableCell style={{ verticalAlign: 'baseline', textAlign: 'center' }}>
                      √
                    </TableCell>
                    <TableCell style={{ verticalAlign: 'baseline', textAlign: 'center' }}>
                      x
                    </TableCell>
                    <TableCell style={{ verticalAlign: 'baseline', textAlign: 'center' }}>
                      x
                    </TableCell>
                    <TableCell style={{ verticalAlign: 'baseline', textAlign: 'center' }}>

                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell style={{ verticalAlign: 'baseline', textAlign: 'center' }}>
                      No Reason /Change Of Mind
                    </TableCell>
                    <TableCell style={{ verticalAlign: 'baseline', textAlign: 'center' }}>
                      x
                    </TableCell>
                    <TableCell style={{ verticalAlign: 'baseline', textAlign: 'center' }}>
                      x
                    </TableCell>
                    <TableCell style={{ verticalAlign: 'baseline', textAlign: 'center' }}>
                      x
                    </TableCell>
                    <TableCell style={{ verticalAlign: 'baseline', textAlign: 'center' }}>

                    </TableCell>
                  </TableRow>
                </TableBody>
                <TableBody>
                  <TableRow>
                    <TableCell rowSpan="3" style={{ verticalAlign: 'baseline', textAlign: 'center', fontWeight: '600', color: '#6E6E78', borderRight: '1px solid rgba(224, 224, 224, 1)' }}>
                      DRY GROCERY
                    </TableCell>
                    <TableCell style={{ verticalAlign: 'baseline', textAlign: 'center' }}>
                      Wrong Product
                    </TableCell>
                    <TableCell style={{ verticalAlign: 'baseline', textAlign: 'center' }}>
                      √
                    </TableCell>
                    <TableCell style={{ verticalAlign: 'baseline', textAlign: 'center' }}>
                      √
                    </TableCell>
                    <TableCell className="delivery" style={{ verticalAlign: 'baseline', textAlign: 'center' }}>
                      x
                    </TableCell>
                    <TableCell style={{ verticalAlign: 'baseline', textAlign: 'center' }}>
                      Will accept even opened package.
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell style={{ verticalAlign: 'baseline', textAlign: 'center' }}>
                      Poor Quality
                    </TableCell>
                    <TableCell style={{ verticalAlign: 'baseline', textAlign: 'center' }}>
                      √
                    </TableCell>
                    <TableCell style={{ verticalAlign: 'baseline', textAlign: 'center' }}>
                      √
                    </TableCell>
                    <TableCell style={{ verticalAlign: 'baseline', textAlign: 'center' }}>

                    </TableCell>
                    <TableCell style={{ verticalAlign: 'baseline', textAlign: 'center' }}>
                      Will accept even opened package.
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell style={{ verticalAlign: 'baseline', textAlign: 'center' }}>
                      No Reason /Change Of Mind
                    </TableCell>
                    <TableCell style={{ verticalAlign: 'baseline', textAlign: 'center' }}>
                      x
                    </TableCell>
                    <TableCell style={{ verticalAlign: 'baseline', textAlign: 'center' }}>
                      x
                    </TableCell>
                    <TableCell style={{ verticalAlign: 'baseline', textAlign: 'center' }}>
                      x
                    </TableCell>
                    <TableCell style={{ verticalAlign: 'baseline', textAlign: 'center' }}>

                    </TableCell>
                  </TableRow>
                </TableBody>
                <TableBody>
                  <TableRow>
                    <TableCell rowSpan="3" style={{ verticalAlign: 'baseline', textAlign: 'center', fontWeight: '600', color: '#6E6E78', borderRight: '1px solid rgba(224, 224, 224, 1)' }}>
                      ELECTRONIC, FASHION & OTHER
                    </TableCell>
                    <TableCell style={{ verticalAlign: 'baseline', textAlign: 'center' }}>
                      Wrong Product
                    </TableCell>
                    <TableCell style={{ verticalAlign: 'baseline', textAlign: 'center' }}>
                      √
                    </TableCell>
                    <TableCell style={{ verticalAlign: 'baseline', textAlign: 'center' }}>
                      √
                    </TableCell>
                    <TableCell className="delivery" style={{ verticalAlign: 'baseline', textAlign: 'center' }}>
                      √
                    </TableCell>
                    <TableCell rowSpan="3" style={{ verticalAlign: 'baseline', textAlign: 'center', borderLeft: '1px solid rgba(224, 224, 224, 1)' }}>
                      Same as the original feature without unchanged such as price tag, sealed and if there is any gifts or attached accessories, must be returned.
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell style={{ verticalAlign: 'baseline', textAlign: 'center' }}>
                      Poor Quality
                    </TableCell>
                    <TableCell style={{ verticalAlign: 'baseline', textAlign: 'center' }}>
                      √
                    </TableCell>
                    <TableCell style={{ verticalAlign: 'baseline', textAlign: 'center' }}>
                      √
                    </TableCell>
                    <TableCell style={{ verticalAlign: 'baseline', textAlign: 'center' }}>

                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell style={{ verticalAlign: 'baseline', textAlign: 'center' }}>
                      No Reason /Change Of Mind
                    </TableCell>
                    <TableCell style={{ verticalAlign: 'baseline', textAlign: 'center' }}>
                      x
                    </TableCell>
                    <TableCell style={{ verticalAlign: 'baseline', textAlign: 'center' }}>
                      x
                    </TableCell>
                    <TableCell style={{ verticalAlign: 'baseline', textAlign: 'center' }}>
                      x
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CustomTable>
          </TxtTitle>
        </Row>
      </Container>
    </Section>
  )
}