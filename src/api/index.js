import axios from "axios"
const BASE_URL = "https://strapi-production-faee.up.railway.app"

const getTagsByCategory = async (category) => {
    const data = await axios.get(`${BASE_URL}/api/tags?populate=%2A&filters[category][name][$eq]=${category}`)
    return data
}

const getTagContent = async (tag) => {
    const data = await axios.get(`${BASE_URL}/api/tags?populate=%2A&filters[name][$eq]=${tag}`)
    return data
}

export { getTagsByCategory, getTagContent }