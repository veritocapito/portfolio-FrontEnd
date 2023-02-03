import { Component } from '@angular/core';
import { Experience } from 'src/app/models/experience';
import { ExperienceService } from 'src/app/services/experience.service';

//import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-sec-experience',
  templateUrl: './sec-experience.component.html',
  styleUrls: ['./sec-experience.component.css']
})
export class SecExperienceComponent {
  
  //esto es para traer distintos datos (array)
  //works: any; constructor(private data:DataService){}

  experiences: Experience[]=[];  //se llama al modelo que es un array

  constructor( private serveExpe:ExperienceService){}

  ngOnInit(): void {
    //this.data.getData().subscribe(data => { this.works = data.experiences;})
    this.loadExperience();
  }

  loadExperience():void{
    this.serveExpe.readExperience().subscribe(data => { this.experiences = data;})
  }

}
