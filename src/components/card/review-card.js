import React from "react"
import { ReviewCardWrap } from "./style/card-style"
import { 
  Button, 
  DialogTitle, 
  DialogContent,
  DialogContentText,
  IconButton } from "@material-ui/core"
import {  
  Cancel } from "@material-ui/icons"
import Image from "next/image"
import { CustomDialog, CustomRating } from "src/styles/components"
import { Col } from "reactstrap"

const ReviewCard = (props) => {
  // console.log(`props?.data`, props?.data)
  // open dialog 
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false);
  }

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (  
    <Col lg="4" md="6">
      <ReviewCardWrap>
        <div className="review-card-item">
          <div className="review-card-header">
            <div className="img-wrap">
              <Image src={props?.data?.image} width={40} height={40} alt="profile" />
            </div>
            <div className="name-wrap">
              <h6 className="name">{props?.data?.name}</h6>
              <span className="date">{props?.data?.date}</span>
            </div>
          </div>
          <div className="rating-wrap">
            <CustomRating name="half-rating-read" defaultValue={props?.data?.rating} precision={0.5} readOnly size="small" className="rating" />
          </div>
          <div className="content">
            <p>
              {props?.data?.text}
            </p>
          </div>
          <Button onClick={handleClickOpen} className="more-btn">
            More
          </Button>
          <CustomDialog
            open={open}
            onClose={handleClose}
            // scroll={scroll}
            aria-labelledby="scroll-dialog-title"
            aria-describedby="scroll-dialog-description"
          >
            <IconButton className="close-icon" aria-label="cancel" onClick={handleClose}>
              <Cancel />
            </IconButton>
            <DialogTitle className="review-dialog-title" as="div">
              <div className="review-card-header">
                <div className="img-wrap">
                  <Image src={props?.data?.image} width={40} height={40} alt="profile" />
                </div>
                <div className="name-wrap">
                  <h6 className="name">{props?.data?.name}</h6>
                  <span className="date">{props?.data?.date}</span>
                </div>
              </div>
              <div className="rating-wrap">
                <CustomRating name="half-rating-read" defaultValue={props?.data?.rating} precision={0.5} readOnly size="small" className="rating" />
              </div>
            </DialogTitle>
            <DialogContent>
              <DialogContentText
                id="scroll-dialog-description"
                ref={descriptionElementRef}
                tabIndex={-1}
                as="div"
              >
                <div className="detail-info">
                  <p>This is insane. I bought it on a whim at best buy and I'm not kidding when I say it feels like its from the future. I've been a phone geek forever and it takes something special to truly blow me away and this has done just that. My only concern is that I'll break it. I know it's gotten stronger with this next generation but its 2000 bucks. It's honestly probably worth that too. I don't say that lightly. If you can pick up one and you don't mind a ding on your credit card I think it's worth at least trying. You can completely customize the outer screen and I need screen with different wallpapers, widgets and apps so it's essentially 2 phones in one. Seriously this is a magical device. Kudos samsung for daring to innovate and taking a chance. I feel like we'll be seeing more....</p>
                </div>
              </DialogContentText>
            </DialogContent>
          </CustomDialog>
        </div>
      </ReviewCardWrap>
    </Col>
  );
}
 
export default ReviewCard;