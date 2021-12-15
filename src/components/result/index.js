import { Container, Col, Row } from "reactstrap";
import { colors } from "src/styles/constants";
import styled from 'styled-components'

const SuccessContainer = styled.div`
  .success-wrap {
    max-width: 560px;
    width: 100%;
    text-align: center;
    padding-top: 65px;
    padding-bottom: 65px;
    img {
      width: 100%;
      max-width: 300px;
      margin-bottom: 40px;
    }
    .title {
      font-size: 24px;
      font-family: 'fontStyle-bold';
      margin-bottom: 8px;
      @media (max-width: 767px) {
        font-size: 20px;
      }
    }
    .sub-title {
      margin-bottom: 4px;
      color: ${colors.titleText};
    }
    .btn-wrap {
      margin-top: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      @media (max-width: 767px) {
        flex-direction: column;
      }
      a {
        &:first-child {
          margin-right: 15px;
          @media (max-width: 767px) {
            margin-right: 0;
            margin-bottom: 15px;
          }
        }
      } 
    }
  }
`

const Result = (props) => {
  return (  
    <SuccessContainer>
      <Container>
        <Row>
          <Col md="12" style={{display: 'flex', justifyContent: 'center'}}>
            <div className="success-wrap">
              {props?.children}
            </div>
          </Col>
        </Row>
      </Container>
    </SuccessContainer>
  );
}
 
export default Result;