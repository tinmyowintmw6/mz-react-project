import styled from "styled-components";

const TitleWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 767px) {
    align-items: flex-start;
  }
  .title-wrap {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    @media (max-width: 767px) {
      flex-direction: column;
      align-items: flex-start;
    }
    .icon-wrap {
      margin-right: 10px;
      img {
        transform: translateY(-2px);
      }
    }
    .title {
      font-size: 24px;
      font-family: 'fontStyle-bold';
      margin-bottom: 0;
      margin-right: 15px;
      text-transform: capitalize;
      @media (max-width: 991px) {
        font-size: 18px;
      }
    }
  }
`

export {
  TitleWrap
}