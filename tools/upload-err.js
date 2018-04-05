import Url from './url';
export default (err)=>{
    new Image().src=Url('https://www.tckxjzc.xyz/collect/upload').setParams({err:err,url:location.href}).url;
}