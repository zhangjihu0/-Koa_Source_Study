module.exports = {
    get body(){
        return this._body;
    },
    set body(data){
        this._body = data;
    },
    get status(){

    },
    set status(statusCode){
        if(typeof statusCode != 'number'){
            throw new Error('statusCode must be number ！')
        }
        this.res.statusCode = statusCode;
    }
}