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

const getData = (resource, filterFlag, input) => {
    console.log(resource + " " + filterFlag + " " + input);
    
    //based on filterFlag, make api call to fetch list or filtered data
    return filterFlag ? getDataWithFilter(url, resource, input) : getDataList(url, resource);
}

//get filtered data using user input
const getDataWithFilter = (url, resource, input) => {
    return axios.get(`${url}/filter.php?${resource}=${input}`)
    .then((res) => {
        console.log(res.data)
        return res;
    })
    .catch((err) => console.log("Error fetching data from resource - " + resource + " " + err.data));
}

//get data as list
const getDataList = (url, resource) => {
    return axios.get(`${url}/list.php?${resource}=list`)
    .then((res) => {
        console.log(res.data)
        return res;
    })
    .catch((err) => console.log("Error fetching data from resource - " + resource + " " + err.data));
}

export default getData;