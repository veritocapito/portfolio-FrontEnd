import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ExperienceService } from 'src/app/services/experience.service';

@Component({
  selector: 'app-modal-experience-add',
  templateUrl: './modal-experience-add.component.html',
  styleUrls: ['./modal-experience-add.component.css']
})

export class ModalExperienceAddComponent implements OnInit {

  form: FormGroup;

  image: string = '';
  company: string = '';
  url: string = '';
  position: string = '';
  startDate: string = '';
  endDate: string = '';
  description: string = '';

  constructor(private formBuilder:FormBuilder, private serviceExperience: ExperienceService){
    //creamos el grupo de controles para el formulario
    this.form= this.formBuilder.group({

      image: [''],
      company: ['', [Validators.required]],
      url: [''],
      position: ['', [Validators.required]],
      startDate: [''],
      endDate: [''],
      description: ['', [Validators.required]]
    })

  }

  ngOnInit(): void {
      
  }

}
