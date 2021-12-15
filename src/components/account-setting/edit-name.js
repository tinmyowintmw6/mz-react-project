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
import { Person, Create, Cancel } from '@material-ui/icons'
import * as Yup from 'yup'
import { Formik, Form } from 'formik'
import Components from "src/components"
import { CustomDialog, ErrorMsg } from 'src/styles/components'
import { account } from "store/actions"

const EditName = (props) => {
  const dispatch = useDispatch()
  // handle edit address form 
  const [openEditName, setOpenEditName] = useState(false)
  const handleEditName = () => {
    setOpenEditName(true)
  }
  const closeEditName = () => {
    setOpenEditName(false);
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
    firstname: props?.name || '',
  }

  // handle form submit 
  const [disabled, setDisabled] = useState(false)
  const [error, setError] = useState(null)
  const onSubmitName = (values, actions) => {
    let postData = {
      customer: {
        email: props?.email,
        firstname: values.firstname,
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
        setOpenEditName(false);
        setToast({ open: true });
      } else {
        setError('Something went wrong, please try again!')
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
            <Person />
          </div>
          <div className="text">
            <p>Name</p>
          </div>
        </div>
        <div className="status">
          <p className="name">{props?.name}</p>
          <div className="edit">
            <IconButton className="create-icon" aria-label="create" onClick={() => handleEditName()}>
              <Create />
            </IconButton>
          </div>
        </div>
      </div>    
      <CustomDialog
        open={openEditName}
        onClose={closeEditName}
        // scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <IconButton className="close-icon" aria-label="cancel" onClick={closeEditName}>
          <Cancel />
        </IconButton>
        <DialogTitle className="dialog-title" style={{marginBottom: '32px'}}>
          Edit Name
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
                    firstname: Yup.string()
                      .max(20, 'Must be 15 characters or less')
                      .required('Name is required'),
                  })
                }
                onSubmit={(values, actions) => onSubmitName(values, actions)}>

                {
                  formikProps => (
                    <Form>
                      <Row>
                        <Col md="12">
                          <Components.TextInput label="Full Name" name="firstname" type="text" require="require" /> 
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
        message="Your name has been changed successfully!"
        key={vertical + horizontal}
        onClose={handleClose}
      />            
    </AccountSetting>
  );
}
 
export default EditName;