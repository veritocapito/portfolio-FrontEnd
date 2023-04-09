import { Component, OnInit } from '@angular/core';
import { Experience } from 'src/app/models/experience';
import { ExperienceService } from 'src/app/services/experience.service';


//import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-sec-experience',
  templateUrl: './sec-experience.component.html',
  styleUrls: ['./sec-experience.component.css']
})
export class SecExperienceComponent implements OnInit {
  
  //esto es para traer distintos datos (array)
  //works: any; constructor(private data:DataService){}

  
  experiences: Experience[]=[];  //se llama al modelo que es un array
  idEdition: number = 0;
  isTrue: boolean= false;


  constructor( private serveExpe:ExperienceService){}

  ngOnInit(): void {
    //this.data.getData().subscribe(data => { this.works = data.experiences;})
    this.serveExpe.readExperience();
  }

  readExperience():void{
    this.serveExpe.readExperience().subscribe(data => { this.experiences = data;})
  }


   //(click)="idEdit(experience.id)" en html no funciona
  idEdit(id:number){
    this.isTrue= true;
    this.idEdition= id;

  }

  //(click)="delete(experience.id)" en html no funciona
  delete(id:number):void{
    if(id != undefined){
      this.serveExpe.delete(id).subscribe(data => {
        alert("Registro eliminado correctamente.");
        this.readExperience();
      }, err =>{
        alert("No se pudo eliminar, intente nuevamente.");
      })
    }
  }

}
