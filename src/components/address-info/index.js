import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'reactstrap'
import { 
  Button, 
  Radio, 
  IconButton, 
  DialogTitle, 
  DialogContent, 
  DialogContentText,
  MenuItem,
  FormControlLabel,
  Checkbox, 
  Skeleton,
  CircularProgress,
} from '@material-ui/core'
import { CheckCircle, Create, Cancel, Add, Delete } from '@material-ui/icons'
import { CustomDialog } from 'src/styles/components'
import * as Yup from 'yup'
import { Formik, Form } from 'formik'
import Components from "src/components"
import styled from 'styled-components'
import { colors } from 'src/styles/constants'
import { AddressInfoContainer } from './style/address-style'
import { ecommerce, account } from "store/actions"
import { authStore } from 'service'

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const AddDeliveryBtn = styled(Button)`
  font-family: 'fontStyle-bold' !important;
  width: 100%;
  color: ${colors.primary} !important;
  padding: 13px !important;
  border: 1px solid ${colors.titleText} !important;
  letter-spacing: normal !important;
  text-transform: none !important;
  &:hover {
    border: 1px solid ${colors.titleText} !important;
    background: rgba(232, 29, 37, 0.04) !important;
  }
`

const AddressInfo = (props) => {
  const dispatch = useDispatch()
  const { account_data, isLoading } = useSelector(state => state.account)
  const { township_data } = useSelector(state => state.ecommerce)

  // get township list 
  useEffect(() => {
    dispatch(ecommerce.getTownship())
  }, [dispatch])
  
  // address select 
  const [selectedValue, setSelectedValue] = useState(null);
  const handleChange = (event) => {
    let id = event.target.value
    setSelectedValue(id);
    dispatch(ecommerce.setCheckedAddress('CHECKED_ADDRESS', id))
  }

  // default select 
  useEffect(() => {
    let defaultShipping = account_data?.default_shipping
    setSelectedValue(defaultShipping)
  }, [setSelectedValue, account_data])
  
  // handle edit address form 
  const [openEditAddress, setOpenEditAddress] = useState(false)
  const [addressInitVal, setAddressInitVal] = useState([])
  
  // handle default change check
  const [checkedItem, setCheckedItem] = useState(false);
  const handleChangeDefault = () => {
    setCheckedItem(!checkedItem);
  };

  const [isEditId, setIsEditId] = useState(null)
  const handleEditAddress = async (id) => {
    id ? setIsEditId(id) : setIsEditId(null)
    
    let getInitVal = await account_data?.addresses?.length > 0 && account_data?.addresses?.filter(x => x?.id === id)
    getInitVal?.length > 0 ? setAddressInitVal(getInitVal) : setAddressInitVal([])
    getInitVal?.length > 0 ? setCheckedItem(getInitVal[0]?.default_shipping) : setCheckedItem(false)

    setOpenEditAddress(true)
  }
  
  const closeEditAddress = () => {
    setOpenEditAddress(false);
  }

  // delete address 
  const [deleteSpinner, setDeleteSpinner] = useState(null)
  const handleDelete = async (id, i) => {
    i !== deleteSpinner && setDeleteSpinner(i)
    let res = await dispatch(ecommerce.deleteAddress(id))
    if(res?.success === true) {
      setDeleteSpinner(null)
      const authData = authStore.getAuth();
      authData && dispatch(account.getAccount())
    }
  }

  // formik 
  let initialValues = {
    firstname: addressInitVal?.[0]?.firstname || '',
    telephone: addressInitVal?.[0]?.telephone || '',    
    postcode: '',
    street: addressInitVal?.[0]?.street[0] || '',
    city: addressInitVal?.[0]?.city || '',
    region_id: addressInitVal?.[0]?.region_id || '',
  }
  // end write review 
  
  // handle form submit 
  const [disabled, setDisabled] = useState(false)
  const onSubmitAddress = (values, actions) => {
    actions.setSubmitting(true)
    setDisabled(true)
    let postData = {
      address: {
        id: isEditId,
        customer_id: account_data?.id,
        country_id: "MM",
        street: [
          values?.street
        ],
        telephone: values?.telephone,
        region: {
          region_id: values?.region_id
        },
        city: values?.city,
        firstname: values?.firstname,
        lastname: '.',
        postcode: '',
        default_shipping: checkedItem,
        default_billing: checkedItem
      },
      auth_token: authStore.getAuth()?.token || ''
    }
    if(isEditId === null) {
      delete postData.address.id
    }
    setTimeout(async () => {
      let res = await dispatch(ecommerce.createAddress(postData))
      if (res?.id) {
        const authData = authStore.getAuth()
        authData && dispatch(account.getAccount())
        actions.setSubmitting(false)
        setDisabled(false)
        setOpenEditAddress(false)
      }
    }, 1000)
  }
  return (  
    <AddressInfoContainer>
      {
        isLoading ?
        <Skeleton variant="rectangular" height={76} />
        :
        <div className="deliveryInfo-wrap">            
          {
            account_data?.addresses?.length > 0 ?
            <>
              {
                account_data?.addresses?.map((x, i) =>
                  <div key={i} className="delivery-item"> 
                    <div className="item">
                      {
                        props?.checkOption &&
                        <Radio
                          checked={selectedValue === x?.id.toString()}
                          onChange={handleChange}
                          value={x?.id}
                          name="radio-button"
                          inputProps={{ 'aria-label': x?.firstname }}
                          checkedIcon={<CheckCircle />}
                          className="address-check"
                          id={x?.id.toString()}
                        />
                      }
                      <label htmlFor={x?.id} style={!props?.checkOption ? {cursor: 'default'} : {cursor: 'pointer'}}>
                        <span>{x?.firstname}</span>
                        {
                          x?.street?.map((s, i) => 
                            <span key={i}>{s}</span>
                          )
                        }
                        <span>{x?.city}</span>
                        <span>{x?.region?.region}</span>
                      </label>
                    </div>
                    <div className="action-icon">
                      <div className="edit">
                        <IconButton className="create-icon" aria-label="create" onClick={() => handleEditAddress(x?.id)}>
                          <Create className="action-icon" />
                        </IconButton>
                      </div>
                      <div className="edit delete">
                        <IconButton 
                          disabled={i !== deleteSpinner ? false : true}
                          className="create-icon" 
                          aria-label="delete" 
                          onClick={() => handleDelete(x?.id, i)}
                        >
                          {
                            i !== deleteSpinner ?
                            <Delete className="action-icon" /> :
                            <CircularProgress color="inherit" style={{width: '24px', height: '24px'}} />
                          }
                        </IconButton>
                      </div>
                    </div>
                  </div>                    
                )
              }
              <Button className="btn-link" onClick={() => handleEditAddress()} style={{fontSize: "14px"}}>
                Add New Address
              </Button>
            </>
            :
            <>
              {
                isLoading ?
                <Skeleton variant="rectangular" height={76} />
                :
                <AddDeliveryBtn
                  variant="outlined"
                  startIcon={<Add />}
                  onClick={() => handleEditAddress()}
                >
                  Add Delivery Address
                </AddDeliveryBtn>
              }
            </>
          }          
        </div>
      }
      <CustomDialog
        open={openEditAddress}
        onClose={closeEditAddress}
        // scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <IconButton className="close-icon" aria-label="cancel" onClick={closeEditAddress}>
          <Cancel />
        </IconButton>
        <DialogTitle className="dialog-title" style={{marginBottom: '32px'}}>
          Add Delivery Address
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
                    telephone: Yup.string()
                      .min(7, 'Phone number is invalid!')
                      .max(13, 'Phone number is invalid!')
                      .matches(phoneRegExp, 'Phone number is invalid!')
                      .required('Phone number is required'),
                    // postcode: Yup.string()
                    //   .required('Home No. is required'),
                    street: Yup.string()
                      .required('Street is required'),
                    region_id: Yup.string()
                      .required('City is required'),
                    city: Yup.string()
                      .required('Township is required'),
                  })
                }
                onSubmit={(values, actions) => onSubmitAddress(values, actions)}>

                {
                  formikProps => (
                    <Form>
                      <Row>
                        <Col md="12">
                          <Components.TextInput label="Full Name" name="firstname" type="text" require="require" /> 
                          <Components.TextInput
                            label="Phone" name="telephone" type="text" require="require"
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
                        </Col>
                        {/* <Col md="5">
                          <Components.TextInput label="Home No." name="postcode" type="text" require="require" />
                        </Col> */}
                        <Col md="12">
                          <Components.TextInput label="Street" name="street" type="text" require="require" />
                        </Col>
                        <Col md="6">
                          <Components.SelectInput label="City" name="region_id" require="require">
                            <MenuItem className="option" value="" disabled>Select City</MenuItem>
                            <MenuItem className="option" value="654">Yangon</MenuItem>
                          </Components.SelectInput>
                        </Col>
                        <Col md="6">
                          <Components.SelectInput label="Township" name="city" require="require">
                            <MenuItem className="option" value="" disabled>Select Township</MenuItem>
                            {
                              township_data?.data?.map((x, i) => 
                                <MenuItem className="option" value={x?.city} key={i}>{x?.city}</MenuItem>
                              )
                            }
                          </Components.SelectInput>
                        </Col>
                        <Col md="12">
                          <FormControlLabel
                            control={<Checkbox className="default-check" checked={checkedItem} onChange={() => handleChangeDefault()} name="default_shipping" />}
                            label="Set Default"
                            className="default-check-label"
                          />
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
    </AddressInfoContainer>
  );
}
 
export default AddressInfo;