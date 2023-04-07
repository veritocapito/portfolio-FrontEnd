export class Education {
    id?: number;
    name: string;
    image: string;
    url: string;
    description: string;
    degree: string;

    constructor(image: string, name: string, url: string, degree: string, description: string){

        this.image=image;
        this.name=name;
        this.url=url;
        this.degree=degree;
        this.description=description;   
    }
}
