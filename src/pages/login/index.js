import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Col, Container, Row } from "reactstrap";
import Components from "src/components";
import * as Yup from 'yup'
import { Formik, Form } from 'formik'
import Link from 'next/link'
import { LoginSection, LoginContainer, ErrorMsg } from "src/styles/components";
import { auth } from "store/actions"
import { authStore } from "service";
import { useRouter } from 'next/router';
import { useAuth } from "src/components/auth-provider/auth-provider"
import { CircularProgress } from "@material-ui/core";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const Login = () => {
  const { getRedirect } = useAuth();
  const router = useRouter();
  const dispatch = useDispatch()
  // handle mobile submit 
  const [disabled, setDisabled] = useState(false)
  const [openOtp, setOpenOtp] = useState(false)
  const [errorMsg, setErrorMsg] = useState(null)
  const [resendOTPData, setResendOTPData] = useState(null)
  let initialValues = {
    mobilenumber: "",
    otptype: 'login', 
    resendotp: "", 
    oldmobile: ""
  }

  const onSubmitMobile = (values, actions) => {
    // slice mobile number if included 09 or add 09 if not
    let checkMobile = values.mobilenumber.slice(0, 2)
    let getMobile = checkMobile === '09' ? values.mobilenumber : `09${values.mobilenumber}`
    let { mobilenumber, ...postVal } = values
    let postData = { ...postVal, mobilenumber: getMobile}
    actions.setSubmitting(true)
    setDisabled(true)

    setTimeout(async () => {
      let res = await dispatch(auth.signIn(postData))
      if (res?.data?.success === true) {
        actions.resetForm(initialValues)
        authStore.setSignIn(postData)
        setOpenOtp(true)
        setErrorMsg(null)
        setResendOTPData(postData)
      } else {
        setErrorMsg(res?.data?.errormsg)
      }
      actions.setSubmitting(false)
      setDisabled(false)
    }, 1000)
  }

  // resend otp
  const [resending, setResending] = useState(false)
  const handleResendOTP = async () => {
    setResending(true)
    let res = await dispatch(auth.signIn(resendOTPData))
    if (res?.data?.success === true) {
      setErrorMsg(null)
      setResending(false)
    } else {
      setErrorMsg(res?.data?.errormsg)
      setResending(false)
    }
  }

  // handle otp submit 
  let initialOTPValues = {
    mobilenumber: authStore?.getSignIn()?.mobilenumber || '', 
    otptype: 'login', 
    otpcode: '',
    oldmobile: '',
    device_token: ''
  }

  const [disabledOtp, setDisabledOtp] = useState(false)
  const onSubmitOtp = (values, actions) => {
    actions.setSubmitting(true)
    setDisabledOtp(true)
    setTimeout(async () => {
      let res = await dispatch(auth.signInOTP(values))
      if (res?.data?.success === true) {
        actions.resetForm(initialOTPValues)
        setErrorMsg(null)
        getRedirect() !== null ? router.push(getRedirect()) : router.push('/account')
        // router.push(`/account`)
      } else {
        setErrorMsg(res?.data?.errormsg)
      }
      actions.setSubmitting(false)
      setDisabledOtp(false)
    }, 1000)
  }

  return (  
    <LoginSection>
      <Container>
        <Row>
          <Col xl={{ size: 4, offset: 4 }} lg={{ size: 6, offset: 3 }} md={{ size: 8, offset: 2 }}>
            <LoginContainer>
              <div className="login-logo">
                <Link href="/">
                  <a>
                    <img src="/mz-logo-red.svg" alt="mz logo red" />
                  </a>
                </Link>
              </div>
              {
                !openOtp ?
                <div className="login-form">
                  <Components.Title props={{title: 'Log In with phone number'}} />
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
                                name="mobilenumber" 
                                type="text" 
                                ismobile="mobile"
                                onKeyDown={e => e.key !== "Backspace" &&
                                  e.key !== "Enter" &&
                                  e.keyCode !== 37 &&
                                  e.keyCode !== 39 &&
                                  e.keyCode !== 46 &&
                                  e.keyCode !== 9 &&
                                  e.key.match(/[^0-9]/)
                                  && e.preventDefault()
                                }
                              />
                              {errorMsg !== null && <ErrorMsg>{errorMsg}</ErrorMsg> }
                            </Col>
                          </Row>    
                          <div className="terms">
                            <p>By continuing, you agree to the <Link href="/terms-condition"><a>Terms of Service.</a></Link></p>
                          </div>                  
                          <div className="save-btn-wrap">
                            <Components.CustomButton data={
                                formikProps.isSubmitting ?
                                {
                                  size: 'sm',
                                  disabled: disabled,
                                  text: 'Continue',
                                  loading: true,
                                  color: 'gray'
                                }:
                                {
                                  size: 'sm', 
                                  color: 'primary', 
                                  text: 'Continue',
                                  type: 'submit'
                                }
                              } 
                            />
                          </div>
                          <div className="separator">
                            <p>Or</p>
                          </div> 
                          <Components.SocialLogin />
                          <div className="separator have-account">
                            <p>Don't have an account? <Link href="/signup" passHref><a>Register</a></Link></p>
                          </div>
                        </Form>
                      )
                    }
                  </Formik>
                </div>
                :
                <div className="otp-form">
                  <Components.Title props={{title: 'Verification Code'}} />
                  <Formik
                    enableReinitialize
                    initialValues={initialOTPValues}
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
                                label={`Enter the 6-digit code sent to you at ${authStore?.getSignIn()?.mobilenumber}`}
                                name="otpcode"
                                require="require"
                                numInputs={6}
                              />
                              {errorMsg !== null && <ErrorMsg>{errorMsg}</ErrorMsg> }
                            </Col>
                          </Row>    
                          <div className="terms">
                            <p>Did’nt get code? 
                              <button type="button" disabled={resending && true} className="resend-btn" onClick={() => handleResendOTP()}>Resend code</button>
                              {
                                resending &&
                                <CircularProgress style={{width: '15px', height: '15px'}} color="inherit"/>
                              }
                            </p>
                          </div>                  
                          <div className="save-btn-wrap">
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
                          </div>
                        </Form>
                      )
                    }
                  </Formik>
                </div>
              }
            </LoginContainer>
          </Col>
        </Row>
      </Container>
    </LoginSection>
  );
}
 
export default Login;