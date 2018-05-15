module.exports = {
    get query(){

    },
    get body(){

    },
    set body(data){
        return this.response.body = data;
    },
    get status(){
        return this.response.status;
    },
    set status(statusCode){
        this.response.status = statusCode;
    }
}
