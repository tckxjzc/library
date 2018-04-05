/**
 * Created by tckxjzc on 2017/4/10.
 *
 * 将json中较大的数字(此处默认8位以上)转换为字符串类型
 */
export default (text)=> {
    const pattern = /:\s*[\d]{8,}\s*[,}]/g;
    const arr = text.match(pattern);
    if(arr){
        arr.forEach(function (item,index) {
            const num = item.match(/[\d]{8,}/)[0];
            const newItem = item.replace(num, "\"" + num + "\"");
            text=text.replace(item,newItem);
        });
    }
    return JSON.parse(text);
};
