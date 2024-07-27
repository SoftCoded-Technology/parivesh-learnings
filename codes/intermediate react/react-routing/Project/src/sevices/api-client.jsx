import axios from "axios";

export default axios.create({
    baseURL:"https://api.rawg.io/api",
    params:{
        key:'b50ca18d98ed45868ea330092d57f3fc',
    }
}) 