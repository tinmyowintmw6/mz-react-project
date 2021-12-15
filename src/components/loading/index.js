import styled from 'styled-components'

const PageLoading = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    width: 30px;
  }
`

const Loading = () => {
  return (
    <PageLoading>
      <img src='/loading.gif' alt="app loading" />
    </PageLoading>
  )
}

export default Loading