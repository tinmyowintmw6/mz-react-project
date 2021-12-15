import styled from "styled-components"
import { colors } from "src/styles/constants"

const BreadcrumbWrap = styled.div`
  background: ${colors.grayBg};
  border-bottom: 1px solid #D7D7D6;
  @media (max-width: 991px) {
    display: none;
  }
  nav {
    .breadcrumb {
      margin-bottom: 0;
      padding-top: 14px;
      padding-bottom: 14px;
      .breadcrumb-item {
        text-transform: capitalize;
        a {
          &:hover {
            color: ${colors.primary};
          }
        }
      }
    }
  }
`

export { BreadcrumbWrap }