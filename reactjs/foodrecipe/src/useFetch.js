const { default: axios } = require("axios")
module.exports={
    fetchData:async function(url){
        let res = await axios.get(url)
        let data = await res.data
        return res.data
    }
}