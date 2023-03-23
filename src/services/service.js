import axios from 'axios'

const baseDomain = 'https://api.imgflip.com'
const baseURL = `${baseDomain}`

export default axios.create({
  baseURL
})