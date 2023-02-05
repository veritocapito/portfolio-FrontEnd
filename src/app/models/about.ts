export class About {
    id?: number;
    name: string;
    lastName: string;
    age: number;
    image: string;
    about: string;

    constructor(image: string, name: string, age: number, lastName: string, about: string){

        this.image=image;
        this.name=name;
        this.age=age;
        this.lastName=lastName;
        this.about=about;   
    }
}
