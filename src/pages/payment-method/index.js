import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Col, Container, Row } from "reactstrap";
import { Section } from "src/styles/components";
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

const TxtTitle = styled.div`
  position: relative;
  width: 100%;
   td {
     span{
      background: #E81D25;
      color: #fff;
      padding: 3px 11px;
      border-radius: 7px;
      cursor: pointer;
      :hover{
        background: #E81D25;
        color: #000;
      }
     }
   }
`


export default function PaymentMethod() {
  const SEO = {
    title: 'Payment Method',
    openGraph: {
      title: 'Payment Method'
    }
  }

  // handle copy code 
  const [codeVal, setCodeVal] = useState(null)
  const handleCopy = (id, number) => {
    /* Copy code */
    navigator.clipboard.writeText(number)
    setCodeVal(id)
  }

  return (
    <Section>
      <Container>
        <Row>
          <NextSeo {...SEO} />
          <TxtTitle>
            <p>Our payment gateway keeps all your sensitive information protected from unauthorized users and any fraudulent activities. We, our MZ Online Market accepts Cash on delivery, Bank transfer & Debit Card (Visa, Master& MPU).

            Moreover, at your ease, our MZ Online Market opens Bank to Bank transfer (quick service) for our valuable customer as you are shopping in MZ Online Market. All types of Bank that you can transfer to us for your smart shopping is mentioned in the below list.
            </p>
            <CustomTable className="order-detail-table">
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>BANK NUMBER</TableCell>
                    <TableCell>ACCOUNT NUMBER</TableCell>
                    <TableCell>CURRENCY</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  <TableRow>
                    <TableCell style={{ verticalAlign: 'baseline', fontFamily: 'fontStyle-bold', color: '#6E6E78' }}>
                      YOMA
                    </TableCell>
                    <TableCell style={{ verticalAlign: 'baseline' }}>
                      001410280500549
                    </TableCell>
                    <TableCell className="delivery" style={{ verticalAlign: 'baseline' }}>
                      MMK
                    </TableCell>
                    <TableCell style={{ verticalAlign: 'baseline' }}>
                      {
                        codeVal !== 1 ?
                          <span onClick={() => handleCopy(1, "001410280500549")}>
                            Copy
                          </span>
                          :
                          <span>
                            Copied
                          </span>
                      }
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell style={{ verticalAlign: 'baseline', fontFamily: 'fontStyle-bold', color: '#6E6E78' }}>
                      AYA
                    </TableCell>
                    <TableCell style={{ verticalAlign: 'baseline' }}>
                      10003991671
                    </TableCell>
                    <TableCell className="delivery" style={{ verticalAlign: 'baseline' }}>
                      MMK
                    </TableCell>
                    <TableCell style={{ verticalAlign: 'baseline' }}>
                      {
                        codeVal !== 2 ?
                          <span onClick={() => handleCopy(2, "10003991671")}>
                            Copy
                          </span>
                          :
                          <span>
                            Copied
                          </span>
                      }
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell style={{ verticalAlign: 'baseline', fontFamily: 'fontStyle-bold', color: '#6E6E78' }}>
                      KBZ
                    </TableCell>
                    <TableCell style={{ verticalAlign: 'baseline' }}>
                      26210326200903301
                    </TableCell>
                    <TableCell className="delivery" style={{ verticalAlign: 'baseline' }}>
                      MMK
                    </TableCell>
                    <TableCell style={{ verticalAlign: 'baseline' }}>
                      {
                        codeVal !== 3 ?
                          <span onClick={() => handleCopy(3, "26210326200903301")}>
                            Copy
                          </span>
                          :
                          <span>
                            Copied
                          </span>
                      }
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell style={{ verticalAlign: 'baseline', fontFamily: 'fontStyle-bold', color: '#6E6E78' }}>
                      UAB
                    </TableCell>
                    <TableCell style={{ verticalAlign: 'baseline' }}>
                      025010100014660
                    </TableCell>
                    <TableCell className="delivery" style={{ verticalAlign: 'baseline' }}>
                      MMK
                    </TableCell>
                    <TableCell style={{ verticalAlign: 'baseline' }}>
                      {
                        codeVal !== 4 ?
                          <span onClick={() => handleCopy(4, "025010100014660")}>
                            Copy
                          </span>
                          :
                          <span>
                            Copied
                          </span>
                      }
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell style={{ verticalAlign: 'baseline', fontFamily: 'fontStyle-bold', color: '#6E6E78' }}>
                      AGD
                    </TableCell>
                    <TableCell style={{ verticalAlign: 'baseline' }}>
                      3240011000469011
                    </TableCell>
                    <TableCell className="delivery" style={{ verticalAlign: 'baseline' }}>
                      MMK
                    </TableCell>
                    <TableCell style={{ verticalAlign: 'baseline' }}>
                      {
                        codeVal !== 5 ?
                          <span onClick={() => handleCopy(5, "3240011000469011")}>
                            Copy
                          </span>
                          :
                          <span>
                            Copied
                          </span>
                      }
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell style={{ verticalAlign: 'baseline', fontFamily: 'fontStyle-bold', color: '#6E6E78' }}>
                      CB
                    </TableCell>
                    <TableCell style={{ verticalAlign: 'baseline' }}>
                      0086100500032794
                    </TableCell>
                    <TableCell className="delivery" style={{ verticalAlign: 'baseline' }}>
                      MMK
                    </TableCell>
                    <TableCell style={{ verticalAlign: 'baseline' }}>
                      {
                        codeVal !== 6 ?
                          <span onClick={() => handleCopy(6, "0086100500032794")}>
                            Copy
                          </span>
                          :
                          <span>
                            Copied
                          </span>
                      }
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell style={{ verticalAlign: 'baseline', fontFamily: 'fontStyle-bold', color: '#6E6E78' }}>
                      KBZ-PAY
                    </TableCell>
                    <TableCell style={{ verticalAlign: 'baseline' }}>
                      09977009977
                    </TableCell>
                    <TableCell className="delivery" style={{ verticalAlign: 'baseline' }}>
                      MMK
                    </TableCell>
                    <TableCell style={{ verticalAlign: 'baseline' }}>
                      {
                        codeVal !== 7 ?
                          <span onClick={() => handleCopy(1, "09977009977")}>
                            Copy
                          </span>
                          :
                          <span>
                            Copied
                          </span>
                      }
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell style={{ verticalAlign: 'baseline', fontFamily: 'fontStyle-bold', color: '#6E6E78' }}>
                      WAVE-MONEY
                    </TableCell>
                    <TableCell style={{ verticalAlign: 'baseline' }}>
                      09977009977
                    </TableCell>
                    <TableCell className="delivery" style={{ verticalAlign: 'baseline' }}>
                      MMK
                    </TableCell>
                    <TableCell style={{ verticalAlign: 'baseline' }}>
                      {
                        codeVal !== 8 ?
                          <span onClick={() => handleCopy(8, "09977009977")}>
                            Copy
                          </span>
                          :
                          <span>
                            Copied
                          </span>
                      }
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