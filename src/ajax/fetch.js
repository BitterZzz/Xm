//封装请求
import 'whatwg-fetch'
function formatParam(param){
    if(!param){
        return '';
    }
    let paramStr = '';
    Object.entries(param).forEach(([key, value], index)=>{
        paramStr += `${key}=${value}`;
        if(index < Object.keys(param).length-1){
            paramStr += '&';
        }
    })
    return paramStr;
}

function get(url, param){
    return new Promise((resolve, reject)=>{
        let paramStr = formatParam(param);
        fetch(url+'?'+paramStr, {
            method: 'GET'
        })
        .then(response=>{
            if(response.status === 200){
                return response.json();
            }else{
                reject(response);
            }
        })
        .then(data=>{
            resolve(data);
        })
        .catch(error=>{
            reject(error);
        })
    })
}

function post(url, param, body){
    return new Promise((resolve, reject)=>{

        let paramStr = formatParam(param);
        let bodyStr = formatParam(body);

        fetch(url+'?'+paramStr, {
            method: 'POST',
            body: bodyStr,
            headers: new Headers({
                "Content-Type": "application/x-www-form-urlencoded"
            })
        })
        .then(response=>{
            if(response.status === 200){
                return response.json();
            }else{
                reject(response);
            }
        })
        .then(data=>{
            resolve(data);
        })
        .catch(error=>{
            reject(error);
        })
    })
}

export default {
    get,
    post
}