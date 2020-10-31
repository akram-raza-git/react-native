import axios from 'axios'
const instance = axios.create({
    baseURL="https://api.yelp.com/v3/businesses ",
    headers:{
        Authorization:"Bearer l2cmhf2ezRl6ZkcHWNYKoD "
    }
})
export default instance;