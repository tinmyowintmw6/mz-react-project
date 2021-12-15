const setAuth = data => {
  if (typeof window !== 'undefined') {
    let CryptoJS = require('crypto-js')
    let ciphertext = CryptoJS.AES.encrypt(JSON.stringify(data), 'user_info')
  
    localStorage.setItem('auth_store', ciphertext.toString())
  }
}

const getAuth = () => {
  if (typeof window !== 'undefined') {
    let CryptoJS = require('crypto-js')
    let sessi = localStorage.getItem('auth_store')
    if (!sessi) return false
    let bytes = CryptoJS.AES.decrypt(sessi, 'user_info')
    let decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8))
    return decryptedData
  }
}

const removeAuth = () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('auth_store')
    localStorage.removeItem('signUp_store')
    localStorage.removeItem('signIn_store')
  }
}

const setSignUp = data => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('signUp_store', JSON.stringify(data))
    let CryptoJS = require('crypto-js')

    let ciphertext = CryptoJS.AES.encrypt(JSON.stringify(data), 'signup_info')
    localStorage.setItem('signUp_store', ciphertext.toString())
  }
}

const getSignUp = () => {
  if (typeof window !== 'undefined') {
    let CryptoJS = require('crypto-js')
    let sessi = localStorage.getItem('signUp_store')
    if (!sessi) return false
    let bytes = CryptoJS.AES.decrypt(sessi, 'signup_info')
    let decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8))
    return decryptedData
  }
}

const setSignIn = data => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('signIn_store', JSON.stringify(data))
    let CryptoJS = require('crypto-js')

    let ciphertext = CryptoJS.AES.encrypt(JSON.stringify(data), 'signin_info')
    localStorage.setItem('signIn_store', ciphertext.toString())
  }
}

const getSignIn = () => {
  if (typeof window !== 'undefined') {
    let CryptoJS = require('crypto-js')
    let sessi = localStorage.getItem('signIn_store')
    if (!sessi) return false
    let bytes = CryptoJS.AES.decrypt(sessi, 'signin_info')
    let decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8))
    return decryptedData
  }
}

export default {
  setAuth,
  getAuth,
  removeAuth,
  setSignUp,
  getSignUp,
  setSignIn,
  getSignIn
}