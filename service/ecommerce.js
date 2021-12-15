const setQuote = data => {
  if (typeof window !== 'undefined') {
    let CryptoJS = require('crypto-js')
    let ciphertext = CryptoJS.AES.encrypt(JSON.stringify(data), 'user_info')
  
    localStorage.setItem('quote', ciphertext.toString())
  }
}

const getQuote = () => {
  if (typeof window !== 'undefined') {
    let CryptoJS = require('crypto-js')
    let sessi = localStorage.getItem('quote')
    if (!sessi) return false
    let bytes = CryptoJS.AES.decrypt(sessi, 'user_info')
    let decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8))
    return decryptedData
  }
}

const removeQuote = () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('quote')
    localStorage.removeItem('placeOrder')
  }
}

const setPlaceOrder = data => {
  if (typeof window !== 'undefined') {
    let CryptoJS = require('crypto-js')
    let ciphertext = CryptoJS.AES.encrypt(JSON.stringify(data), 'user_info')
  
    localStorage.setItem('placeOrder', ciphertext.toString())
  }
}

const getPlaceOrder = () => {
  if (typeof window !== 'undefined') {
    let CryptoJS = require('crypto-js')
    let sessi = localStorage.getItem('placeOrder')
    if (!sessi) return false
    let bytes = CryptoJS.AES.decrypt(sessi, 'user_info')
    let decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8))
    return decryptedData
  }
}

const removePlaceOrder = () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('placeOrder')
  }
}

export default {
  setQuote,
  getQuote,
  removeQuote,
  setPlaceOrder,
  getPlaceOrder,
  removePlaceOrder
}