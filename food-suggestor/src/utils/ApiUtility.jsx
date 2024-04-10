import axios from 'axios'

//     /*
//      * Lists 
//      * https://www.themealdb.com/api/json/v1/1/list.php?c=list- list all categories
//      * https://www.themealdb.com/api/json/v1/1/list.php?a=list - list all areas
//      * https://www.themealdb.com/api/json/v1/1/list.php?i=list - list all ingredients
//      * 
//      * Filters
//      * https://www.themealdb.com/api/json/v1/1/filter.php?c=input - filter by category
//      * https://www.themealdb.com/api/json/v1/1/filter.php?a=input - filter by area
//      * https://www.themealdb.com/api/json/v1/1/filter.php?i=input - filter by main ingredient
//      */

const url = "https://www.themealdb.com/api/json/v1/1/";

export const getListedData = (resource) => {
    return axios.get(`${url}/list.php?${resource}=list`)
    .then((res) => {
        console.log(res.data)
        return res;
    })
    .catch((err) => console.log("Error fetching data from resource - " + resource + " " + err.data));
}

export const getFilteredData = (resource, input) => {
    return axios.get(`${url}/filter.php?${resource}=${input}`)
    .then((res) => {
        console.log(res.data);
        return res;
    })
    .catch((err) => console.log("Error fetching data from resource - " + resource + " " + err.data));
}

export const getRandomData = () => {
    return axios.get("www.themealdb.com/api/json/v1/1/random.php")
    .then((res) => {
        console.log(res.data)
        return res;
    })
    .catch((err) => console.log("Error fetching data from resource - " + resource + " " + err.data));
}