import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Experience } from 'src/app/models/experience';
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

  //metodos para el formulario y validaciones

  get Image(){
    return this.form.get("image");
  }

  get Company(){
    return this.form.get("company");
  }

  get Url(){
    return this.form.get("url");
  }

  get Position(){
    return this.form.get("position");
  }

  get StartDate(){
    return this.form.get("startDate");
  }

  get EndDate(){
    return this.form.get("endDate");
  }

  get Description(){
    return this.form.get("description");
  }

  get CompanyValid(){
    return this.Company?.touched && !this.Company?.valid;
  }
  
  get PositionValid(){
    return this.Position?.touched && !this.Position?.valid;
  }
  
  get DescriptionValid(){
    return this.Description?.touched && !this.Description?.valid;
  }


  onCreate(): void{
    const expe = new Experience(this.image, this.company, this.url, this.position, this.startDate, this.endDate, this.description);
    this.serviceExperience.create(expe).subscribe(data => {
      alert("Experiencia añadida correctamente.");
      window.location.reload();
    }, err => {
      alert("Fallo en la carga, intente nuevamente.");
      this.form.reset();
    });
  }

  reset(): void{ this.form.reset();}

}
