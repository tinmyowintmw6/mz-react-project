import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Col, Container, Row } from "reactstrap";
import Components from "src/components";
import { Section } from "src/styles/components";
import { product } from "store/actions"

export default function Wishlist () {
  const dispatch = useDispatch()
  const { langData, langStore } = useSelector(state => state.translate)
  const { product_data, isLoading } = useSelector(state => state.product)

  // get product list 
  useEffect(() => {
    let lang = {
      code: langStore?.code
    }
    const postData = {
      pageSize: 10,
      currentPage: 1
    }
    dispatch(product.getProduct(postData, lang))
  }, [dispatch, langStore?.code])

  const styleSetting = {
    marginBottom: "45px",
  }
  // const product_data= [
  //   {
  //       "id": "25452",
  //       "sku": "K921023T200",
  //       "name": "Samsung - Galaxy Z Fold 2",
  //       "attribute_set_id": "15",
  //       "price": "200000",
  //       "special_price": "170000",
  //       "discount": 15,
  //       "status": "1",
  //       "visibility": "4",
  //       "weight": "7.880000",
  //       "image": "/product1.png",
  //       "total_rating": "0",
  //       "total_rating_count": "0",
  //       "available_qty": 2,
  //       "type_id": "simple",
  //       "best": false,
  //       "delivery": true
  //   },
  //   {
  //       "id": "46185",
  //       "sku": "S0578-736137",
  //       "name": "Philips Hair Dryer - BHD 002/00",
  //       "attribute_set_id": "15",
  //       "price": "200000",
  //       "special_price": "170000",
  //       "discount": 15,
  //       "status": "1",
  //       "visibility": "4",
  //       "weight": "5.910000",
  //       "image": "/product2.png",
  //       "total_rating": "0",
  //       "total_rating_count": "0",
  //       "available_qty": 1,
  //       "type_id": "simple",
  //       "best": true,
  //       "delivery": false
  //   },
  //   {
  //       "id": "46188",
  //       "sku": "S7401032381LAM",
  //       "name": "Philips Kettle Hd4646",
  //       "attribute_set_id": "15",
  //       "price": "200000",
  //       "special_price": "170000",
  //       "discount": 15,
  //       "status": "1",
  //       "visibility": "4",
  //       "weight": "27.000000",
  //       "image": "/product3.png",
  //       "total_rating": "0",
  //       "total_rating_count": "0",
  //       "available_qty": 1,
  //       "type_id": "simple",
  //       "best": false,
  //       "delivery": true
  //   },
  //   {
  //       "id": "36117",
  //       "sku": "K473004J010",
  //       "name": "Philips Facial Trimmer - MG 3710/15",
  //       "attribute_set_id": "15",
  //       "price": "200000",
  //       "special_price": "170000",
  //       "discount": 15,
  //       "status": "1",
  //       "visibility": "4",
  //       "weight": "29.000000",
  //       "image": "/product4.png",
  //       "total_rating": "0",
  //       "total_rating_count": "0",
  //       "available_qty": 1,
  //       "type_id": "simple",
  //       "best": true,
  //       "delivery": false
  //   },
  //   {
  //       "id": "46191",
  //       "sku": "S0578-511070",
  //       "name": "Philips Toaster - HD2637/00",
  //       "attribute_set_id": "15",
  //       "price": "2164000.000000",
  //       "special_price": "2164000.000000",
  //       "discount": 0,
  //       "status": "1",
  //       "visibility": "4",
  //       "weight": "14.665000",
  //       "image": "/product5.png",
  //       "total_rating": "0",
  //       "total_rating_count": "0",
  //       "available_qty": 5,
  //       "type_id": "simple",
  //       "best": false,
  //       "delivery": true
  //   },
  //   {
  //       "id": "14006",
  //       "sku": "K530003B515",
  //       "name": "CARRIER ASSY-DIFFERENTIAL",
  //       "attribute_set_id": "15",
  //       "price": "2043000.000000",
  //       "special_price": "2043000.000000",
  //       "discount": 0,
  //       "status": "1",
  //       "visibility": "4",
  //       "weight": "30.000000",
  //       "image": "https://staging.mzonlinemarket.com/media/catalog/product/k/5/k530003b515_4_.jpg",
  //       "total_rating": "0",
  //       "total_rating_count": "0",
  //       "available_qty": 1,
  //       "type_id": "simple",
  //       "best": true,
  //       "delivery": false
  //   },
  //   {
  //       "id": "14009",
  //       "sku": "K530003B600",
  //       "name": "CARRIER ASSY-DIFFERENTIAL",
  //       "attribute_set_id": "15",
  //       "price": "200000",
  //       "special_price": "170000",
  //       "discount": 15,
  //       "status": "1",
  //       "visibility": "4",
  //       "weight": "12.920000",
  //       "image": "https://staging.mzonlinemarket.com/media/catalog/product/k/5/k530003b600_1_.jpg",
  //       "total_rating": "0",
  //       "total_rating_count": "0",
  //       "available_qty": 2,
  //       "type_id": "simple",
  //       "best": true,
  //       "delivery": false
  //   },
  //   {
  //       "id": "14005",
  //       "sku": "K530003B510",
  //       "name": "CARRIER ASSY-DIFFERENTIAL",
  //       "attribute_set_id": "15",
  //       "price": "2043000.000000",
  //       "special_price": "2043000.000000",
  //       "discount": 0,
  //       "status": "1",
  //       "visibility": "4",
  //       "weight": "13.940000",
  //       "image": "https://staging.mzonlinemarket.com/media/catalog/product/k/5/k530003b510_1.jpg",
  //       "total_rating": "0",
  //       "total_rating_count": "0",
  //       "available_qty": 2,
  //       "type_id": "simple",
  //       "best": true,
  //       "delivery": false
  //   },
  //   {
  //       "id": "14008",
  //       "sku": "K530003B541",
  //       "name": "CARRIER ASSY-DIFFERENTIAL",
  //       "attribute_set_id": "15",
  //       "price": "2043000.000000",
  //       "special_price": "2043000.000000",
  //       "discount": 0,
  //       "status": "1",
  //       "visibility": "4",
  //       "weight": "30.000000",
  //       "image": "https://staging.mzonlinemarket.com/media/catalog/product/k/5/k530003b541_1_1.jpg",
  //       "total_rating": "0",
  //       "total_rating_count": "0",
  //       "available_qty": 1,
  //       "type_id": "simple",
  //       "best": true,
  //       "delivery": false
  //   },
  //   {
  //       "id": "17289",
  //       "sku": "K558803T000",
  //       "name": "COMPONENT & SOLENOID",
  //       "attribute_set_id": "15",
  //       "price": "200000",
  //       "special_price": "170000",
  //       "discount": 15,
  //       "status": "1",
  //       "visibility": "4",
  //       "weight": "8.480000",
  //       "image": "https://staging.mzonlinemarket.com/media/catalog/product/k/5/k558803t000_1.jpg",
  //       "total_rating": "0",
  //       "total_rating_count": "0",
  //       "available_qty": 2,
  //       "type_id": "simple",
  //       "best": true,
  //       "delivery": false
  //   }
  // ]


  return (  
    <>
      <Components.Breadcrumb props={
        [
          {
            title: 'Home',
            link: '/'
          },          
          {
            title: 'Wishlist'
          }
        ]
      } 
      />
      <Section>
        <div style={{marginBottom: '24px'}}>
          <Container>
            <Row>
              <Col md="12">
                <Components.Title props={{title: 'My Wishlist'}} />
              </Col>
            </Row>
          </Container>
        </div>
        <Container>
          <Row>
            {
              product_data?.data?.map((x, i) => 
                <Components.ProductCard loading={isLoading} data={x} key={i} {...styleSetting} class={'no-slider-col-4'} type="wishlist" /> 
              )
            }
            </Row>
        </Container>
      </Section>
    </>
  );
}

Wishlist.requireAuth = true