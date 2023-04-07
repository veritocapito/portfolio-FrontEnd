import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-sec-education',
  templateUrl: './sec-education.component.html',
  styleUrls: ['./sec-education.component.css']
})
export class SecEducationComponent {

  //esto es para traer distintos datos (array)
  education: any;
  constructor(private data:DataService){}
  
  ngOnInit(): void {
    this.data.getData().subscribe(data => {
      this.education = data.education;
    })
  
  }

}
