import styled from "styled-components";

const AdsBanner = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  position: relative;
  .ads-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    h2 {
      font-size: 30px;
      font-weight: 600;
      color: #FFF;
      margin-bottom: 5px;
    }
    p {
      font-size: 50px;
      font-weight: 600;
      color: #FFF;
      margin: 0;
    }
  }
  .ads-btn {
    position: absolute;
    bottom: 12px;
    right: 12px;
    .btn-custom {
      min-width: 115px;
    }
  }
`
export default AdsBanner