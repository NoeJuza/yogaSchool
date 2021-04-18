class Cour{
    constructor(date, prof){
        this.date = date
        this.prof = prof
        this.ucid = ( Date.now() *  Math.floor(Math.random() * 1000))
    }

    getInfo(){
        return {"ucid":this.ucid,"date":this.date,"prof":this.prof}
    }
}
module.exports = Cour;