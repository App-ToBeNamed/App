class User{
    constructor(name, email, password, picture){
        this.email = email;
        this.picture = picture;
        this.name = name;
        this.password = password;
    }
    getName(){
        return this.name;
    }
    getPicture(){
        return this.picture;
    }
    getEmail(){
        return this.email;
    }
}
