import React, { useState } from "react";
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
import { Create, Cancel, Email, Add } from '@material-ui/icons'
import * as Yup from 'yup'
import { Formik, Form } from 'formik'
import Components from "src/components"
import { CustomDialog, ErrorMsg } from 'src/styles/components'
import { account } from "store/actions"

const EditEmail = (props) => {
  const dispatch = useDispatch()

  // handle edit address form 
  const [openEditEmail, setOpenEditEmail] = useState(false)
  const handleEditDOB = () => {
    setOpenEditEmail(true)
  }
  const closeEditDOB = () => {
    setOpenEditEmail(false);
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
  // end toast 

  // formik 
  let initialValues = {
    email: props?.email || '',
  }

  // handle form submit 
  const [disabled, setDisabled] = useState(false)
  const [error, setError] = useState(null)
  const onSubmitName = (values, actions) => {
    let postData = {
      customer: {
        email: values.email,
        firstname: props?.name,
        lastname: '.',
        dob: props?.dob,
        website_id: 1,
        gender: null
      }
    }
    actions.setSubmitting(true)
    setDisabled(true)
    setTimeout(async () => {
      let res = await dispatch(account.updateName(postData))
      if (res !== null) {
        dispatch(account.getAccount())
        setOpenEditEmail(false);
        setToast({ open: true });
      } else {
        setError('Customer with the same email already exists!')
      }
      actions.setSubmitting(false)
      setDisabled(false)
    }, 1000)
  }

  return (  
    <AccountSetting>                 
      <div className="account-card">
        <div className="title">
          <div className="icon">
            <Email />
          </div>
          <div className="text">
            <p>Email</p>
          </div>
        </div>
        <div className="status">
          <p className="name">{props?.email}</p>
          <div className="edit">
            <IconButton className="create-icon" aria-label="create" onClick={() => handleEditDOB()}>
              {
                props?.email ?
                <Create /> :
                <Add />
              }
            </IconButton>
          </div>
        </div>
      </div>    
      <CustomDialog
        open={openEditEmail}
        onClose={closeEditDOB}
        // scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <IconButton className="close-icon" aria-label="cancel" onClick={closeEditDOB}>
          <Cancel />
        </IconButton>
        <DialogTitle className="dialog-title" style={{marginBottom: '32px'}}>
          Edit Email
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
                    email: Yup.string()
                      .email('Email is invalid!')
                      .required('Email is required'),
                  })
                }
                onSubmit={(values, actions) => onSubmitName(values, actions)}>

                {
                  formikProps => (
                    <Form>
                      <Row>
                        <Col md="12">
                          <Components.TextInput
                            name="email" 
                            type="text" 
                            label="Email"
                            require="require"
                            onKeyUp={() => setError(null)}
                          />
                          {error !== null && <ErrorMsg>{error}</ErrorMsg> }
                        </Col>
                      </Row>                      
                      <div className="save-btn-wrap" style={{marginTop: '25px', display: 'flex', justifyContent: 'flex-end'}}>
                        <Row>
                          <Col md="12">
                            <Components.CustomButton data={
                                formikProps.isSubmitting ?
                                {
                                  size: 'sm',
                                  disabled: disabled,
                                  text: 'Saving',
                                  loading: true,
                                  color: 'gray'
                                }:
                                {
                                  size: 'sm', 
                                  color: 'primary', 
                                  text: 'Save',
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
        message="Your email has been changed successfully!"
        key={vertical + horizontal}
        onClose={handleClose}
      />            
    </AccountSetting>
  );
}
 
export default EditEmail;