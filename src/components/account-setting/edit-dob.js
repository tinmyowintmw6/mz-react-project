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
import { Create, Cancel, Today, Add } from '@material-ui/icons'
import * as Yup from 'yup'
import { Formik, Form } from 'formik'
import Components from "src/components"
import { CustomDialog, ErrorMsg } from 'src/styles/components'
import { account } from "store/actions"

const EditDOB = (props) => {
  const dispatch = useDispatch()

  // handle edit address form 
  const [openEditDOB, setOpenEditDOB] = useState(false)
  const handleEditDOB = () => {
    setOpenEditDOB(true)
  }
  const closeEditDOB = () => {
    setOpenEditDOB(false);
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
    dob: props?.dob || '',
  }

  // handle form submit 
  const [disabled, setDisabled] = useState(false)
  const [error, setError] = useState(null)
  const onSubmitName = (values, actions) => {
    let postData = {
      customer: {
        email: props?.email,
        firstname: props?.name,
        lastname: '.',
        dob: values.dob,
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
        setOpenEditDOB(false);
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
            <Today />
          </div>
          <div className="text">
            <p>Date of birth</p>
          </div>
        </div>
        <div className="status">
          <p className="name">{props?.dob}</p>
          <div className="edit">
            <IconButton className="create-icon" aria-label="create" onClick={() => handleEditDOB()}>
              {
                props?.dob ? <Create /> : <Add />
              }
            </IconButton>
          </div>
        </div>
      </div>    
      <CustomDialog
        open={openEditDOB}
        onClose={closeEditDOB}
        // scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <IconButton className="close-icon" aria-label="cancel" onClick={closeEditDOB}>
          <Cancel />
        </IconButton>
        <DialogTitle className="dialog-title" style={{marginBottom: '32px'}}>
          Edit Date Of Birth
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
                    dob: Yup.string()
                      .required('Date is required'),
                  })
                }
                onSubmit={(values, actions) => onSubmitName(values, actions)}>

                {
                  formikProps => (
                    <Form>
                      <Row>
                        <Col md="12">
                          <Components.TextInput label="Date of birth" name="dob" type="date" require="require" />
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
        message="Your date of birth has been changed successfully!"
        key={vertical + horizontal}
        onClose={handleClose}
      />            
    </AccountSetting>
  );
}
 
export default EditDOB;