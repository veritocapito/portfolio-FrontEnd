import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ExperienceService } from 'src/app/services/experience.service';

@Component({
  selector: 'app-modal-about',
  templateUrl: './modal-about.component.html',
  styleUrls: ['./modal-about.component.css']
})

export class ModalAboutComponent implements OnInit {

  form: FormGroup;

  name: string = '';
  lastName: string = '';
  age: number = 0; 
  image: string = '';
  about: string = '';

  constructor(private formBuilder:FormBuilder, private serviceExperience: ExperienceService){
    //creamos el grupo de controles para el formulario
    this.form= this.formBuilder.group({

      name: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      age: [''],
      position: [''],
      about: ['', [Validators.required]]
    })

  }

  ngOnInit(): void {
      
  }

}
