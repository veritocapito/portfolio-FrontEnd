import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-sec-projects',
  templateUrl: './sec-projects.component.html',
  styleUrls: ['./sec-projects.component.css']
})
export class SecProjectsComponent implements OnInit {

  //esto es para traer distintos datos (array)
  projects: any;
  constructor(private data:DataService){}
  
  ngOnInit(): void {
    this.data.getData().subscribe(data => {
      this.projects = data.projects;
    })
  
  }

}
