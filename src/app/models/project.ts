export class Project {
    id?: number;
    image: string;
    name: string;
    url: string;
    description: string;

    constructor(image: string, name: string, url: string, description: string){

        this.image=image;
        this.name=name;
        this.url=url;
        this.description=description;   
    }
}
