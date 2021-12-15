import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { auth } from "store/actions"
import { GoogleLogin } from 'react-google-login'
import FacebookLogin from 'react-facebook-login';
import styled from 'styled-components'
import { useRouter } from 'next/router';
import { ErrorMsg } from "src/styles/components";
import { useAuth } from "src/components/auth-provider/auth-provider"

const SocialContainer = styled.div`
  .social-login {
    display: flex;
    align-items: center;
    justify-content: center;
    .google, .facebook {
      position: relative;
      img {
        z-index: 1;
      }
      button, span {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0 !important;
        z-index: 2;
      }
    }
  }
`

const SocialLogin = () => {
  const { getRedirect } = useAuth();
  const dispatch = useDispatch()
  const { langData } = useSelector(state => state.translate)
  const router = useRouter();

  // handle google login 
  const [errorMsg, setErrorMsg] = useState(null)
  const responseGoogle = (response) => {
    let postData = {
      google: {
        sociallogin_id: response?.googleId,
        firstname: response?.profileObj?.name,
        lastname: "",
        email: response?.profileObj?.email
      },
      emailmobile: "",
      mobpassword: "",
      device_token: ""
    }
    setTimeout(async () => {
      let res = await dispatch(auth.socialLogin(postData))
      if (res?.data?.success === true) {
        // router.push(`/account`)
        getRedirect() !== null ? router.push(getRedirect()) : router.push('/account')
        setErrorMsg(null)
      } else {
        setErrorMsg(res?.data?.errormsg)
      }
    }, 1000)
  }

  // handle facebook login
  // let fb_response = {
  //   accessToken: "EAAFlleXqqh4BAJvS7Hpeb4vqLD3xtpDZAQlgFI8oeNHIcSqM5MdhsHtI1k86TcvAb89Ek2USnbZCCpAPiA5kcAWSqzaxPIGeoZBn0FEJGyBusuEHpZBoAltJn0KUB4bFiv8t1q0UOiUPEgvxBEJBMKNMf0f04g50zJEfFZCv7tUZBpTLE3kOsogRy2PEKxfi0ZD",
  //   data_access_expiration_time: 1642908109,
  //   email: "saisainglinn.me@gmail.com",
  //   expiresIn: 5184000,
  //   graphDomain: "facebook",
  //   id: "1249055062275046",
  //   name: "Sai Saing Linn",
  //   picture: {
  //     data: {
  //       height: 50,
  //       is_silhouette: false,
  //       url: "https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=1249055062275046&height=50&width=50&ext=1637724111&hash=AeTyDYnuzT-3rhmWkZA",
  //       width: 50
  //     }
  //   },
  //   signedRequest: "tQME0nZM3y9iuCfUTKwe7v-fTaLC61SSW3bmdLumYyg.eyJ1c2VyX2lkIjoiMTI0OTA1NTA2MjI3NTA0NiIsImNvZGUiOiJBUUJWU2tVRGwwZk9TQ3NVUUxWaDR1dk1hT29JVzIwamZweVc0MkJZX0VlbkhtZGNNakk3NzQ2UUM1MFk1QW44MUZkOWxXUG1FWDdSSXREVkNfX0h1R2ktb3NaRjNnV0JhdUktb2hlaUJkTl9oQUpvVUtPRlViZk1TQlFINlJEUzI2aHVPOVJ3TVpRc3UtRjVnTE10S0hYcVp2RmwzSVlVQU1VZnpZUWdHV2dkUk5obzg3QUdvTGlnSnJyb0xpUV9BMnJsazJhN3lzOUJYZHp2d2pzcklreHNubkR6WDZYbEV5UVRhSHNhdDM0aHByX0w0empzV3ljZHRSeFBjMXRWUU1EMHMtVXRydWxMZl9PNUxTOXhiTmswdFRxVmc3bnh4Vm1WdGhvWmp6NjN1WHFXRDlESDd0QVVpb1d3V2k0X0xHOUYxSjJJNTJFOVVEUjVxOEcyRVRHeSIsImFsZ29yaXRobSI6IkhNQUMtU0hBMjU2IiwiaXNzdWVkX2F0IjoxNjM1MTMyMTA5fQ",
  //   userID: "1249055062275046",
  // }
  const responseFacebook = (response) => {
    let postData = {
      facebook: {
        sociallogin_id: response?.id,
        firstname: response?.name,
        lastname: "",
        email: response?.email || ""
      },
      emailmobile: "",
      mobpassword: "",
      device_token: ""
    }
    setTimeout(async () => {
      let res = await dispatch(auth.socialLogin(postData))
      if (res?.data?.success === true) {
        // router.push(`/account`)
        getRedirect() !== null ? router.push(getRedirect()) : router.push('/account')
        setErrorMsg(null)
      } else {
        setErrorMsg(res?.data?.errormsg)
      }
    }, 1000)
  }
  return (  
    <SocialContainer>
      <div className="social-login">
        <div className="facebook">
          <img src="/login-facebook.svg" alt="facebook" />
          <FacebookLogin
            appId="393169458604574"
            autoLoad={false}
            fields="name,email,picture"
            onClick={responseFacebook}
            callback={responseFacebook} 
            onFailure={() => setErrorMsg("Sorry, something went wrong! Facebook login failed!")}
          />
        </div>
        <div className="google">
          <img src="/login-google.svg" alt="google" />
          <GoogleLogin
            clientId="332226422655-6dh8ur7rrrno3c890lqe2p9q4nac0nk6.apps.googleusercontent.com"
            buttonText=""
            autoLoad={false}
            onSuccess={responseGoogle}
            onFailure={() => setErrorMsg("Sorry, something went wrong! Google login failed!")}
            cookiePolicy={'single_host_origin'}
          />
        </div>
      </div>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        {errorMsg !== null && <ErrorMsg>{errorMsg}</ErrorMsg> }
      </div>
    </SocialContainer>
  );
}
 
export default SocialLogin;