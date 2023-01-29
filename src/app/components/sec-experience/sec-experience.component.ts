import { Component } from '@angular/core';
import { Data } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-sec-experience',
  templateUrl: './sec-experience.component.html',
  styleUrls: ['./sec-experience.component.css']
})
export class SecExperienceComponent {
  
  //esto es para traer distintos datos (array)
  works: any;
  constructor(private data:DataService){}
  
  ngOnInit(): void {
    this.data.getData().subscribe(data => {
      this.works = data.experiences;
    })
  
  }

}
