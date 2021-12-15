import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Col, Container, Row } from "reactstrap";
import { Section } from "src/styles/components";
import Components from "src/components"
import { authStore } from 'service'
import { account, auth, ecommerce } from "store/actions"
import { useRouter } from 'next/router';
import { Skeleton } from "@material-ui/core";

export default function Account () {
  const router = useRouter();
  const dispatch = useDispatch()
  const { account_data, isLoading } = useSelector(state => state.account)
  let customerId = authStore.getAuth() && authStore.getAuth()?.customer?.customerId
  
  // get account data 
  // useEffect(() => {
  //   const authData = authStore.getAuth();
  //   authData && dispatch(account.getAccount())
  // }, [dispatch])

  const handleSignOut = () => {
    dispatch(auth.signOut())
    dispatch(ecommerce.setEcommerceStore('REMOVE_STORE_DATA', null))
    if (typeof window !== 'undefined') {
      window.location.href = '/'
    }
  }

  return ( 
    <>
      <Section>
        <Container>
          <Row>
            <Col lg="3">
              <Components.AccountSidebar />
            </Col>
            <Col lg="9">
              <Components.Title props={{title: 'Account Settings'}} />
              <div style={{marginTop: '25px'}}>
                {
                  // isLoading ?
                  // <>
                  //   <Skeleton variant="rectangular" height={76} style={{marginBottom: '16px'}} />
                  //   <Skeleton variant="rectangular" height={76} />
                  // </>
                  // :
                  <>
                    <Components.EditName name={account_data?.firstname} email={account_data?.email} dob={account_data?.dob}/>
                    {/* {
                      account_data?.custom_attributes?.filter(x => x?.attribute_code === "mobile_number")?.length > 0 &&
                      <Components.EditMobile data={account_data?.custom_attributes} customerId={customerId}/>
                    } */}
                    <Components.EditMobile data={account_data?.custom_attributes} customerId={customerId}/>
                    <Components.EditEmail name={account_data?.firstname} email={account_data?.email} dob={account_data?.dob} />
                    <Components.EditDOB name={account_data?.firstname} email={account_data?.email} dob={account_data?.dob} />
                    <div style={{display: 'flex', justifyContent: 'flex-end', marginTop: '30px'}}>
                      <Components.CustomButton 
                        data={{size: 'sm', color: 'transparent', text: 'Sign out'}} 
                        onClick={() => handleSignOut()}
                      />
                    </div>
                  </>
                }
              </div>
            </Col>
          </Row>
        </Container>
      </Section>
      
      {/* <Components.Result>
        <img src="/welcome.svg" alt="welcome icon" />
        <h1 className="title">Welcome to Mercurius Zay</h1>
        <p className="sub-title">We offers online shopping for various kinds of products with excellent customer services in Myanmar.</p>
        <div className="btn-wrap">
          <Components.CustomButton 
            data={
              {
                size: 'md',
                text: 'Log In',
                color: 'transparent',
                link: '/login'
              }
            } 
          />
          <Components.CustomButton 
            data={
              {
                size: 'md',
                text: 'Register',
                color: 'primary',
                link: '/signup'
              }
            } 
          />
        </div>
      </Components.Result> */}
    </>
  );
}

Account.requireAuth = true