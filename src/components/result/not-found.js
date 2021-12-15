import { Container, Row, Col } from 'reactstrap'
import { colors } from 'src/styles/constants'
import styled from 'styled-components'

const NotFoundWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  /* margin-top: 50px; */
  margin-bottom: 50px;
  .desc {
    text-align: center;
    .title {
      font-size: 8rem;
      color: ${colors.paraText};
      font-family: 'fontStyle-bold';
      margin-bottom: 0;
    }
    p {
      font-size: 2rem;
      color: ${colors.paraText};
      small {
        font-size: 1.2rem;
      }
    }
    .not-found {
      width: 500px;
      height: 500px;
      @media (max-width: 767px) {
        width: 300px;
        height: 300px;
      }
    }
  }
`

const ResultNotFound = (props) => {
  return ( 
    <Container>
      <Row>
        <Col md="12">
          <NotFoundWrap>
            { props?.children }
          </NotFoundWrap>
        </Col>
      </Row>
    </Container>
  );
}
 
export default ResultNotFound;