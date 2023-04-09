import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/person';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  index: any;
  persons: Person[]=[]
  httpClient: any;

  userLoginOn:boolean = false;
  constructor (private personService:PersonService) {}

  ngOnInit(): void {
    this.lista();

    if (sessionStorage.getItem('currentUser') == "null") {
      this.userLoginOn = false;
    } else if (sessionStorage.getItem('currentUser') == null) {
      this.userLoginOn = false;
    } else {
      this.userLoginOn = true;
    }

    if (window.location.href == "https://portfolio-frontend-nicolas.web.app/dashboard"){
      this.index = false;
    } else if(window.location.href == "https://portfolio-frontend-nicolas.web.app/login"){
      this.index = false;
    } else{
        this.index = true;
    }
    
  }

  lista():void{
    this.personService.readPersons().subscribe(data => {this.persons=data});
  }

  redirect(pagina:string){
    window.location.href=pagina
  }
  
  
}
