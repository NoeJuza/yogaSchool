class User {
    constructor(name, password,cours) {
        this.name = name
        this.password = password
        this.cours = cours
    }

    addCour(cour){
        this.cours.push(cour)
    }

    removeCour(cour){
        this.cours.filter( (lecour) =>{
            return lecour != cour
        })
    }

    editCour(courId,value){
        this.cours[courId] = value
    }

    getUserInfo(){
        return {"name": this.name, "password": this.password, "cours": this.cours}
    }
}

module.exports = User;