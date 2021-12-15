import React, { useState } from "react";
import { useSelector } from 'react-redux'
import { CouponContainer } from "./style/coupon-card-style";
import { 
  Button,
  IconButton, 
  DialogContent, 
  DialogContentText,
  Snackbar,
  Skeleton
  } from '@material-ui/core'
import { Cancel } from '@material-ui/icons'
import { CustomDialog } from 'src/styles/components'
import moment from "moment";
import Components from "src/components"

const CouponCard = () => {
  const { coupon_list_data, isLoading } = useSelector(state => state.account)
  // handle edit address form 
  const [openCouponCode, setOpenCouponCode] = useState(false)
  const [coupVal, setCoupVal] = useState(null)
  const handleView = async (id) => {
    let getCoupVal = await coupon_list_data?.data?.filter(x => x?.id === id)
    setCoupVal(getCoupVal)
    setOpenCouponCode(true)
  }
  const closeCouponCode = () => {
    setOpenCouponCode(false);
  }

  // toast alert 
  const [toast, setToast] = useState({
    open: false,
    vertical: 'bottom',
    horizontal: 'center',
  })

  const handleClose = () => {
    setToast({ open: false });
  };

  const { vertical, horizontal, open } = toast

  // handle copy code 
  const [codeVal, setCodeVal] = useState(null)
  const handleCopy = (code) => {
    /* Copy code */
    navigator.clipboard.writeText(code)
    setCodeVal(code)
    setToast({ open: true});
    setOpenCouponCode(false)
  }

  return (  
    <CouponContainer>
      {
        coupon_list_data !== null &&
        coupon_list_data?.data?.length > 0 ?
        <>
          {
            coupon_list_data?.data?.map((x, i) =>
            <Button className="coupon-card" onClick={() => handleView(x?.id)} key={i}>
              <div className="icon-wrap">
                <div className="icon">
                  <img src="/coupon-icon.svg" alt="coupon icon" />
                </div>
              </div>
              <div className="title">
                <div className="text">
                  <p className="coupon-name">{x?.name}</p>
                  <span className="coupon-date">Valid until: {moment(x?.to_date).format("DD MMM YYYY")}</span>
                </div>
                <div className="status">
                  <div className={`view ${codeVal === x?.coupon_code ? 'copied' : ''}`}>
                    {
                      codeVal !== x?.coupon_code ?
                      <span>
                        View
                      </span>
                      :
                      <span>
                        Copied
                      </span>
                    }
                  </div>
                </div>
              </div>
            </Button>
            )
          }
        </>
        :
        <>
          {
            isLoading ?
            <>
              <Skeleton variant="rectangular" height={90} /><br/>
              <Skeleton variant="rectangular" height={90} /><br/>
              <Skeleton variant="rectangular" height={90} />
            </>
            :
            <Components.Result>
              <img src="/no_data.svg" alt='coupon empty' />
              <h2 className="title">No Coupons</h2>
              <p className="caption">You haven’t have any coupons yet.</p>
            </Components.Result>
          }
        </>
      }                
      <CustomDialog
        open={openCouponCode}
        onClose={closeCouponCode}
        // scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <IconButton className="close-icon" aria-label="cancel" onClick={closeCouponCode}>
          <Cancel />
        </IconButton>
        
        <DialogContent>
          <DialogContentText
            tabIndex={-1}
            as="div"
          >
            {
              coupVal !== null &&
              <div className="coupon-code-wrap">
                <div className="icon">
                  <img src="/coupon-icon.svg" alt="coupon icon" />
                </div>
                <div className="text">
                  <p className="coupon-name">{coupVal[0]?.name}</p>
                  <span className="coupon-date">Valid until: {moment(coupVal[0]?.to_date).format("DD MMM YYYY")}</span>
                </div>
                <div className="copy-code">
                  <p className="coupon-text">{coupVal[0]?.coupon_code}</p>
                  <Button onClick={() => handleCopy(coupVal[0]?.coupon_code)}>Copy code</Button>
                </div>
              </div>
            }
          </DialogContentText>
        </DialogContent>
      </CustomDialog>    
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        open={open}
        autoHideDuration={5000}
        message="Code copied successfully!  Paste your code in checkout page."
        key={vertical + horizontal}
        onClose={handleClose}
      />            
    </CouponContainer>
  );
}
 
export default CouponCard;