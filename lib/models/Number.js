// module that allows us to post a new user and retrieve all users.

module.exports = class Number{
    id;
    phoneNum;

    constructor(row){
        this.id = row.id;
        this.phoneNum = row.phone_num
    }

    static async addNum({phoneNum}){
        // query db with post
    }

    static async getAllNums(){
        // query db with get
    }
}