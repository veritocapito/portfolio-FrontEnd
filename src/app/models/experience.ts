export class Experience {
    id?: number;
    image: string;
    company: string;
    url: string;
    position: string;
    startDate: string;
    endDate: string;
    description: string;

    constructor(image: string, company: string, url: string, position: string, startDate: string, endDate: string, description: string){

        this.image=image;
        this.company=company;
        this.url=url;
        this.position=position;
        this.startDate=startDate;
        this.endDate=endDate;
        this.description=description;   
    }




}
