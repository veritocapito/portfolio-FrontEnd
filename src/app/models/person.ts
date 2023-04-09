export class Person {
    id?: number;
    name: string;
    lastName: string;
    age: string;
    imgUser: string;
    imgBanner: string;
    linkCV: string;
    email: string;
    password: string;
    about: string;

    constructor(name: string, lastName: string, age: string, imgUser: string, imgBanner: string, linkCV: string,
        email: string, password: string, about: string){
        this.name = name;
        this.lastName = lastName;
        this.age = age;
        this.imgUser = imgUser;
        this.imgBanner = imgBanner;
        this.linkCV = linkCV;
        this.email = email;
        this.password = password;
        this.about = about;
    }
}