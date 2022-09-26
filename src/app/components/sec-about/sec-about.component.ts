import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';


@Component({
  selector: 'app-sec-about',
  templateUrl: './sec-about.component.html',
  styleUrls: ['./sec-about.component.css']
})
export class SecAboutComponent implements OnInit {  
  aboutMe:any;
  constructor( private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.ObtenerDatos().subscribe(data =>{
      console.log(data);
      this.aboutMe=data.about;
    });
  }


}
