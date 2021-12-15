import styled from 'styled-components'

const Spinner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 10px;
  div {
    border-radius: 50%;
    animation: spinner 1s linear infinite;
    margin: 0 auto;
  }

  span {
    margin-left: 5px;
    color: rgba(255, 255, 255, .97);
  }

  @keyframes spinner { // spinner
    from {
      transform: rotate(0deg);
    } to {
      transform: rotate(360deg);
    }
  }
`

const BtnLoading = props => {
  return (
    <>
      <Spinner>
        <div style={props?.style} />
        <span>{props?.children}</span>
      </Spinner>
    </>
  )
}

export default BtnLoading