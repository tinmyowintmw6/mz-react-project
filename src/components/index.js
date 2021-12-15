import dynamic from 'next/dynamic'

// Free deli
const FreeDeli = dynamic(() => import('./card/free-deli'))

// home banner 
const HomeBanner = dynamic(() => import('./banner-slider'))

// Title
const Title = dynamic(() => import('./title/title'))

// category card
const CategoryCard = dynamic(() => import('./card/category-card'))

// category card
const CategoryCardSlider = dynamic(() => import('./card/category-card-slider'))

// branch card
const BranchCard = dynamic(() => import('./card/branch-card'))

// home coupon
const HomeCoupon = dynamic(() => import('./card/home-coupon'))

// popular card
const PopularCard = dynamic(() => import('./card/popular-card'))

// category card
const SubCategoryCard = dynamic(() => import('./card/subcategory-card'))

// count down timer
const CountDownTimer = dynamic(() => import('./count-down'))

// ads
const AdsBanner = dynamic(() => import('./ads/ads'))

// product card slider
const ProductCardSlider = dynamic(() => import('./card/product-card-slider'))

// product card
const ProductCard = dynamic(() => import('./card/product-card'))

// category sidebar
const CategorySidebar = dynamic(() => import('./sidebar/category-sidebar'))

// brand sidebar
const BrandSidebar = dynamic(() => import('./sidebar/brand-sidebar'))

// brand filter
const BrandFilter = dynamic(() => import('./sidebar/brand-filter'))

// range sidebar
const RangeSidebar = dynamic(() => import('./sidebar/range-sidebar'))

// pagination
const Pagination = dynamic(() => import('./pagination'))

// breadcrumb
const Breadcrumb = dynamic(() => import('./breadcrumb'))

// detail slider
const DetailSlider = dynamic(() => import('./detail-slider'))

// custom button
const CustomButton = dynamic(() => import('./button/custom-btn'))

// link button
const LinkButton = dynamic(() => import('./button/link-btn'))

// review card 
const ReviewCard = dynamic(() => import('./card/review-card'))

// checkout delivery information 
const DeliveryInfo = dynamic(() => import('./sidebar/checkout-deli-info'))

// payment method
const PaymentMethod = dynamic(() => import('./sidebar/payment-method'))

// special Instruction
const SpecialInstruction = dynamic(() => import('./sidebar/special-instruction'))

// input text 
const TextInput = dynamic(() => import('./form/text-input'))

// select option 
const SelectInput = dynamic(() => import('./form/select-input'))

// otp input 
const OtpField = dynamic(() => import('./form/otp-input'))

// account sidebar 
const AccountSidebar = dynamic(() => import('./sidebar/account-sidebar'))

// account sidebar 
const StepperSidebar = dynamic(() => import('./sidebar/stepper-sidebar'))

// edit name
const EditName = dynamic(() => import('./account-setting/edit-name'))

// edit mobile
const EditMobile = dynamic(() => import('./account-setting/edit-mobile'))

// edit dob
const EditDOB = dynamic(() => import('./account-setting/edit-dob'))

// edit email
const EditEmail = dynamic(() => import('./account-setting/edit-email'))

// coupon card
const CouponCard = dynamic(() => import('./coupon-card'))

// Address Info
const AddressInfo = dynamic(() => import('./address-info'))

//result
const Result = dynamic(() => import('./result'))

//result not found
const ResultNotFound = dynamic(() => import('./result/not-found'))

// mobile nav
const MobileNav = dynamic(() => import('./mobile-nav'))

// image fallback
const ImgWithFallback = dynamic(() => import('./img-fallback'))

// social login 
const SocialLogin = dynamic(() => import('./social-login'))

//loading
const Loading = dynamic(() => import('./loading'))

const Components = {
  HomeBanner,
  Title,
  CategoryCard,
  CategoryCardSlider,
  SubCategoryCard,
  CountDownTimer,
  AdsBanner,
  ProductCard,
  ProductCardSlider,
  BranchCard,
  PopularCard,
  FreeDeli,
  BrandSidebar,
  BrandFilter,
  CategorySidebar,
  RangeSidebar,
  Pagination,
  Breadcrumb,
  DetailSlider,
  CustomButton,
  ReviewCard,
  DeliveryInfo,
  TextInput,
  SelectInput,
  OtpField,
  PaymentMethod,
  SpecialInstruction,
  AccountSidebar,
  StepperSidebar,
  LinkButton,
  EditName,
  EditMobile,
  EditDOB,
  EditEmail,
  CouponCard,
  AddressInfo,
  Result,
  ResultNotFound,
  MobileNav,
  ImgWithFallback,
  SocialLogin,
  Loading,
  HomeCoupon,
}

export default Components