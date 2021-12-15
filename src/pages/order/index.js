import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { Col, Container, Row } from "reactstrap";
import { Section } from "src/styles/components";
import Components from "src/components"
import { ShoppingCart } from "@material-ui/icons";
import { Button, Skeleton } from "@material-ui/core";
import Link from 'next/link'
import styled from 'styled-components'
import { colors } from "src/styles/constants";
import { moneyFormat } from "src/components/utils";
import moment from "moment";
import { order } from "store/actions"
import { authStore } from "service";

const OrderHistory = styled.div`
  margin-top: 25px;
  .order-card {
    padding: 28px 24px;
    border: 1px solid #D7D7DC;
    border-radius: 4px;
    width: 100%;
    justify-content: space-between;
    color: ${colors.primary};
    margin-bottom: 12px;
    &:hover {
      background: rgba(232, 29, 37, 0.04);
    }
    .title {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      .icon {
        background: ${colors.primary};
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 16px;
        flex: none;
        svg {
          color: #FFF;
          width: 18px;
          height: 18px;
        }
      }
      .text {
        display: flex;
        text-align: left;
        justify-content: flex-start;
        flex-direction: column;
        .date {
          font-size: 16px;
          font-family: 'fontStyle-bold';
          margin-bottom: 0;
        }
        .price {
          margin-bottom: 0;
          color: ${colors.paraText};
          font-size: 14px;
        }
      }
    }
    .status {
      span {
        font-size: 12px;
        font-family: 'fontStyle-bold';
        color: #FFF;
        padding: 6px 8px;
        border-radius: 100px;
      }
    }
  }
`

const scrollToRef = ref => window.scrollTo(0, ref.current?.offsetTop - 100)

export default function OrderList () {
  // const order_data = {
  //     "items": [
  //         {
  //             "order_id": 7255,
  //             "increment_id": "00006596-MZ-20210915",
  //             "created_at": "2021-09-15 09:06:03",
  //             "updated_at": "2021-09-15 09:06:04",
  //             "status": "pending",
  //             "order_status_label": "Pending",
  //             "grand_total": 186000,
  //             "ship_to": "Sai"
  //         },
  //         {
  //             "order_id": 7253,
  //             "increment_id": "00006596-MZ-20210915",
  //             "created_at": "2021-09-15 09:06:03",
  //             "updated_at": "2021-09-15 09:06:04",
  //             "status": "canceled",
  //             "order_status_label": "Canceled",
  //             "grand_total": 186000,
  //             "ship_to": "Sai"
  //         },
  //         {
  //             "order_id": 7251,
  //             "increment_id": "00006596-MZ-20210915",
  //             "created_at": "2021-09-15 09:06:03",
  //             "updated_at": "2021-09-15 09:06:04",
  //             "status": "closed",
  //             "order_status_label": "Closed",
  //             "grand_total": 186000,
  //             "ship_to": "Sai"
  //         },
  //         {
  //             "order_id": 7250,
  //             "increment_id": "00006595-MZ-20210914",
  //             "created_at": "2021-09-14 08:58:55",
  //             "updated_at": "2021-09-14 08:58:57",
  //             "status": "complete",
  //             "order_status_label": "Complete",
  //             "grand_total": 93000,
  //             "ship_to": "Haymann moe"
  //         }
  //     ],
  //     "total_count": 2
  // }
  const dispatch = useDispatch()
  const { order_data, isLoading } = useSelector(state => state.order)
  const { langData, langStore } = useSelector(state => state.translate)

  // get order data 
  const [current, setCurrent] = useState(1)
  const [page, setPage] = useState(10)
  useEffect(() => {
    let lang = {
      code: langStore?.code
    }
    let postData = {
      customer_id: authStore.getAuth()?.customer?.customerId,
      pageSize: page,
      currentPage: current
    }
    const authData = authStore.getAuth();
    authData && dispatch(order.getOrder(postData, lang))
  }, [dispatch, langStore?.code, current, page])

  // Pagination 
  const scrollRef = useRef(null)
  const onChangePaginate = data => {
    setCurrent(data)
    scrollToRef(scrollRef)
  }

  return (  
    <Section>
      <Container>
        <Row>
          <Col lg="3">
            <Components.AccountSidebar />
          </Col>
          <Col lg="9">
            {
              order_data !== null &&
              order_data?.items?.length > 0 ?
              <>
                <Components.Title props={{title: 'Order History'}} />
                <OrderHistory>
                  {
                    order_data?.items?.map((x, i) =>
                      <Link href={`/order/detail/${x?.order_id}`} key={i} passHref>
                        <a>
                          <Button className="order-card">
                            <div className="title">
                              <div className="icon">
                                <ShoppingCart />
                              </div>
                              <div className="text">
                                <h5 className="date">Order Placed: {moment(x?.created_at).format("DD MMM YYYY")}</h5>
                                <p className="price">{moneyFormat(x?.grand_total)} MMK</p>
                              </div>
                            </div>
                            <div className="status">
                              <span 
                                style={
                                  x?.status === 'pending' || x?.status === 'processing' ? 
                                  {background: '#F29423'}
                                  : 
                                  x?.status === 'complete' || x?.status === 'delivery' ?
                                  {background: '#059669'}
                                  :
                                  x?.status === 'canceled' || x?.status === 'canceling' ?
                                  {background: '#8C8C96'}
                                  :
                                  {background: '#000'}
                                  }
                                >{x?.order_status_label}</span>
                            </div>
                          </Button>
                        </a>
                      </Link>
                    )
                  }
                </OrderHistory>
              </>
              :
              isLoading ?
              <OrderHistory>
                {
                  Array(10).fill().map((x, i) =>
                  <div className="order-card" key={i}>
                    <Skeleton variant="rectangular" height={40} />
                  </div> 
                  )
                }
              </OrderHistory>
              :
              <Components.Result>
                <img src="/cart_empty.svg" alt='order empty' />
                <h2 className="title">No Orders</h2>
                <p className="caption">You don’t have any purchases.</p>
                <Components.CustomButton data={{text: 'Start shopping', color: 'primary', link: '/'}} />
              </Components.Result>
            }
            {
              order_data !== null &&
              order_data?.total_count > 10 &&
              <Row>
                <Components.Pagination 
                  onChange={onChangePaginate}
                  current={current}
                  total={order_data?.total_count}
                  defaultPageSize={page}
                />
              </Row>
            }
          </Col>
        </Row>
      </Container>
    </Section>
  );
}

OrderList.requireAuth = true