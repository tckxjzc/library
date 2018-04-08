class Count{

    /**
     *
     * @param {number} initValue
     * @param {number} min
     * @param {number} max
     * @param {number} step
     */
    constructor(initValue=0,min=Number.MIN_SAFE_INTEGER,max=Number.MAX_SAFE_INTEGER,step=1){
        /**
         *
         * @type {number}
         * @private
         */
        this._value=initValue;
        /**
         *
         * @type {number}
         * @private
         */
        this._min=min;
        /**
         *
         * @type {number}
         * @private
         */
        this._max=max;
        /**
         *
         * @type {number}
         * @private
         */
        this._step=step;
    }


    /**
     *
     * @param {number} step
     * @return {Count}
     */
    setStep(step){
        this._step=step;
        return this;
    }

    /**
     *
     * @return {number}
     */
    getStep(){
        return this._step;
    }

    /**
     *
     * @param {number}  min
     */
    setMin(min){
        this._min=min;
        return this;
    }

    /**
     *
     * @returns {number}
     */
    getMin(){
        return this._min;
    }

    /**
     *
     * @param {number} max
     */
    setMax(max){
        this._max=max;
        return this;
    }

    /**
     *
     * @returns {number}
     */
    getMax(){
     return this._max;
    }

    /**
     *
     * @param {number} value
     * @return {number} result
     */
    setValue(value){
        if(value>this._max){
            this._value=this._max;
        } else if(value<this._min){
            this._value=this._min;
        }else{
            this._value=value;
        }
        return this._value;
    }

    /**
     *get the value
     * @returns {number}
     */
    getValue(){
        return this._value;
    }

    /**
     *
     * @return {number} result
     */
    next(){
        return this.setValue(this._value+this._step);
    }

    /**
     *
     * @return {number} result
     */
    previous(){
        return this.setValue(this._value-this._step);
    }

    /**
     *
     * @param {number} val
     * @return {number}
     */
    add(val){
        return this.setValue(this._value+val);
    }

    /**
     *
     * @param {number} val
     * @return {number}
     */
    subtract(val){
        return this.setValue(this._value-val);
    }

}
export default Count;