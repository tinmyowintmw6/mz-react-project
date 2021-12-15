import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'reactstrap'
import { AccountSetting } from "./style/account-style";
import { 
  IconButton, 
  DialogTitle, 
  DialogContent, 
  DialogContentText,
  Snackbar
  } from '@material-ui/core'
import { Phone, Create, Cancel, Add } from '@material-ui/icons'
import * as Yup from 'yup'
import { Formik, Form } from 'formik'
import Components from "src/components"
import { CustomDialog, ErrorMsg } from 'src/styles/components'
import { account, auth, ecommerce } from "store/actions"
import { useRouter } from 'next/router'

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const EditMobile = (props) => {
  // console.log(`props`, props)
  const router = useRouter();
  const dispatch = useDispatch()
  const [mobileVal, setMobileVal] = useState(null)
  const [openOtp, setOpenOtp] = useState(false)
  useEffect(() => {
    let getMobile = props?.data?.filter(x => x?.attribute_code === 'mobile_number')
    // console.log(`getMobile`, getMobile)
    // remove 959 and add 09 in mobile 
    if (getMobile?.length > 0) {
      let checkMobile = getMobile[0]?.value.substring(3)
      let mobileData = `09${checkMobile}`
      setMobileVal(mobileData)
    }
  }, [setMobileVal, props?.data])

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
  // end toast 

  // handle edit mobile form 
  const [openEditMobile, setOpenEditMobile] = useState(false)
  const [errorMsg, setErrorMsg] = useState(null)
  const handleEditMobile = () => {
    setOpenEditMobile(true)
  }
  const closeEditMobile = () => {
    setOpenEditMobile(false);
    setErrorMsg(null)
  }

  // formik 
  let initialValues = {
    mobilenumber: mobileVal || '',
    otptype: 'update',
    resendotp: "", 
    oldmobile: mobileVal || ''
  }

  // handle mobile submit
  const [disabled, setDisabled] = useState(false)
  const [mobileState, setMobileState] = useState(null)
  const onSubmitMobile = async (values, actions) => {
    // slice mobile number if included 09 and add 09 if not
    let sliceMobile = values.mobilenumber.slice(0, 2)
    let postMobile = sliceMobile === '09' ? values.mobilenumber : `09${values.mobilenumber}`
    let { mobilenumber, ...postVal } = values
    let postData = { ...postVal, mobilenumber: postMobile}
    setMobileState(postMobile)
    actions.setSubmitting(true)
    setDisabled(true)
    setTimeout(async () => {
      let res = await dispatch(account.updateMobile(postData))
      if (res?.success === true) {
        setOpenOtp(true)
        setErrorMsg(null)
        setOpenEditMobile(false)
      } else {
        setErrorMsg(res?.errormsg)
      }
      actions.setSubmitting(false)
      setDisabled(false)
    }, 1000)
  }

  // handle otp 
  const closeOtp = () => {
    setOpenOtp(false);
  }

  // formik 
  let initialOtp = {
    mobilenumber: mobileState,
    otptype: 'update',
    oldmobile: mobileVal || '',
    otpcode: '',
    customerId: props.customerId,
    device_token: ''
  }

  // handle otp submit 
  const [disabledOtp, setDisabledOtp] = useState(false)
  const onSubmitOtp = (values, actions) => {
    actions.setSubmitting(true)
    setDisabledOtp(true)
    setTimeout(async () => {
      let res = await dispatch(account.updateMobileVerify(values))
      if (res?.success === true) {
        // dispatch(account.getAccount())
        actions.resetForm(initialOtp)
        setErrorMsg(null)
        setOpenOtp(false)
        setToast({ open: true });
        setTimeout(() => {
          dispatch(auth.signOut())
          dispatch(ecommerce.setEcommerceStore('REMOVE_STORE_DATA', null))
          router.push('/login')
        }, 3000)
      } else {
        setErrorMsg(res?.errormsg)
      }
      actions.setSubmitting(false)
      setDisabledOtp(false)
    }, 1000)
  }

  return (  
    <AccountSetting>                 
      <div className="account-card">
        <div className="title">
          <div className="icon">
            <Phone />
          </div>
          <div className="text">
            <p>Phone number</p>
          </div>
        </div>
        <div className="status">
          <p className="name">{mobileVal}</p>
          <div className="edit">
            <IconButton className="create-icon" aria-label="create" onClick={() => handleEditMobile()}>
              {
                mobileVal !== null ?
                <Create /> :
                <Add />
              }              
            </IconButton>
          </div>
        </div>
      </div>    
      <CustomDialog
        open={openEditMobile}
        onClose={closeEditMobile}
        // scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <IconButton className="close-icon" aria-label="cancel" onClick={closeEditMobile}>
          <Cancel />
        </IconButton>
        <DialogTitle className="dialog-title" style={{marginBottom: '32px'}}>
          Edit Phone
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            tabIndex={-1}
            as="div"
          >
            <div className="edit-form-wrap">
              <Formik
                enableReinitialize
                initialValues={initialValues}
                validationSchema={
                  Yup.object({
                    mobilenumber: Yup.string()
                      .min(7, 'Phone number is invalid!')
                      .max(13, 'Phone number is invalid!')
                      .matches(phoneRegExp, 'Phone number is invalid!')
                      .required('Phone number is required'),
                  })
                }
                onSubmit={(values, actions) => onSubmitMobile(values, actions)}>

                {
                  formikProps => (
                    <Form>
                      <Row>
                        <Col md="12">
                          <Components.TextInput
                            label="Phone number" 
                            name="mobilenumber" 
                            type="text" 
                            require="require"
                            ismobile="mobile"
                            onKeyDown={e => e.key !== "Backspace" &&
                              e.key !== "Enter" &&
                              e.keyCode !== 37 &&
                              e.keyCode !== 39 &&
                              e.keyCode !== 46 &&
                              e.keyCode !== 9 &&
                              e.key.match(/[^0-9]/) &&
                              e.preventDefault() &&
                              setErrorMsg(null)
                            }
                            onKeyUp={() => setErrorMsg(null)}
                          />
                          {errorMsg !== null && <ErrorMsg>{errorMsg}</ErrorMsg> }
                        </Col>
                      </Row>                      
                      <div className="save-btn-wrap" style={{marginTop: '25px', display: 'flex', justifyContent: 'flex-end'}}>
                        <Row>
                          <Col md="12">
                            <Components.CustomButton data={
                                disabled ?
                                {
                                  size: 'sm',
                                  disabled: disabled,
                                  text: 'Updating',
                                  loading: true,
                                  color: 'gray'
                                }:
                                {
                                  size: 'sm', 
                                  color: 'primary', 
                                  text: 'Update',
                                  type: 'submit'
                                }
                              } 
                            />
                          </Col>                                        
                        </Row>
                      </div>
                    </Form>
                  )
                }
              </Formik>
            </div>
          </DialogContentText>
        </DialogContent>
      </CustomDialog>

      {/* otp dialog  */}
      <CustomDialog
        open={openOtp}
        onClose={closeOtp}
        // scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <IconButton className="close-icon" aria-label="cancel" onClick={closeOtp}>
          <Cancel />
        </IconButton>
        <DialogTitle className="dialog-title" style={{marginBottom: '32px'}}>
          Verification Code
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            tabIndex={-1}
            as="div"
          >
            <div className="edit-form-wrap">
              <Formik
                enableReinitialize
                initialValues={initialOtp}
                validationSchema={
                  Yup.object({
                    otpcode: Yup.string()
                      .required('OTP code is required'),
                  })
                }
                onSubmit={(values, actions) => onSubmitOtp(values, actions)}>

                {
                  formikProps => (
                    <Form>
                      <Row>
                        <Col md="12">
                          <Components.OtpField 
                            label={`Enter the 6-digit code sent to you at ${mobileState}`}
                            name="otpcode"
                            require="require"
                            numInputs={6}
                          />
                          {errorMsg !== null && <ErrorMsg>{errorMsg}</ErrorMsg> }
                        </Col>
                      </Row>                      
                      <div className="save-btn-wrap" style={{marginTop: '25px', display: 'flex', justifyContent: 'flex-end'}}>
                        <Row>
                          <Col md="12">
                            <Components.CustomButton data={
                                formikProps.isSubmitting ?
                                {
                                  size: 'sm',
                                  disabled: disabledOtp,
                                  text: 'Verify',
                                  loading: true,
                                  color: 'gray'
                                }:
                                {
                                  size: 'sm', 
                                  color: 'primary', 
                                  text: 'Verify',
                                  type: 'submit'
                                }
                              } 
                            />
                          </Col>                                        
                        </Row>
                      </div>
                    </Form>
                  )
                }
              </Formik>
            </div>
          </DialogContentText>
        </DialogContent>
      </CustomDialog>    
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        open={open}
        autoHideDuration={5000}
        message="Mobile number updated succeessfully, please login again!"
        key={vertical + horizontal}
        onClose={handleClose}
      />          
    </AccountSetting>
  );
}
 
export default EditMobile;