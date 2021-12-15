import { FreeDeliWrap } from "./style/card-style"
import { LocalShipping } from '@material-ui/icons'

const FreeDeli = () => {
  return (  
    <FreeDeliWrap>
      {/* <LocalShipping /> */}
      <img src="/local_shipping_green.svg" alt="shipping" />
      <p>FREE DELIVERY for orders above 10,000 Ks & above...!</p>
    </FreeDeliWrap>
  );
}
 
export default FreeDeli;