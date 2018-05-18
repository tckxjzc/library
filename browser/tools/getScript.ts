export default (url:string)=>{
    return new Promise((resolve,reject)=>{
        let el=document.createElement('script');
        el.src=url;
        document.body.appendChild(el);
        el.onload=()=>{
            resolve()
        };
        el.onerror=()=>{
            reject()
        };

    })
}