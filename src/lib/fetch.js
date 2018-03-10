import apiList from '../config/apiList';


export default ({api})=> {
    let apiValue = apiList[api];
    console.log(apiValue);
}