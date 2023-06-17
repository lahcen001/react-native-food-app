import axios from 'axios'
 export default axios.create({
    baseURL:'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization:'Bearer wMGgZkby7mXqCvTJ4FhlzEi8afGZh_muoVejCVw9FdJwgEf9cVnN-Z93mi9WjH5ozW_xYzQP-lH_SBztCg_QWsX5O7EsqEXebBtsUEnXD6IQRqKXymqKvv0Z-lOLZHYx'
    }
 })

