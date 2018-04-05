/**
 * Created by tckxjzc on 7/20/2017.
 */
/**
 * 时间格式 格林威治标准时间
 * 1500533681656
 * 2017-01-03T04:32:11Z
 *
 * */
class DateFormat {
    constructor(args) {
        switch (typeof args) {
            case 'number':
                (()=>{
                    let date=new Date(args);
                    this.date=new Date(date.getTime()-date.getTimezoneOffset()*60*1000);
                })();
                break;
            case 'string':
                this.date=new Date(args);
                break;
            default:
                this.date=new Date();
                break
        }
    }
    format(args){
        if(typeof args!=='string'){
            throw new Error('args error');
        }
        return args.replace('YYYY',this.date.getFullYear())
            .replace('MM',this._formatNum(this.date.getMonth()+1))
            .replace('DD',this._formatNum(this.date.getDate()))
            .replace('hh',this._formatNum(this.date.getHours()))
            .replace('mm',this._formatNum(this.date.getMinutes()))
            .replace('ss',this._formatNum(this.date.getSeconds()))
    }
    _formatNum(x){
        return x>=10?x:'0'+x
    }
    getDay(){
        return this.format('YYYY-MM-DD');
    }
    getDetailsTime(){
        return this.format('YYYY-MM-DD hh:mm:ss');
    }
    getHours(){
        return this.format('hh:mm:ss');
    }
}
export default (args)=>{
    return new DateFormat(args);
}
