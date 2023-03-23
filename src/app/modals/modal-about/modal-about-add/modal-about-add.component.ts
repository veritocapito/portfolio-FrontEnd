import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AboutService } from 'src/app/services/about.service';

@Component({
  selector: 'app-modal-about-add',
  templateUrl: './modal-about-add.component.html',
  styleUrls: ['./modal-about-add.component.css']
})
export class ModalAboutAddComponent implements OnInit {

  form: FormGroup;

  name: string = '';
  lastName: string = '';
  age: number = 0; 
  image: string = '';
  about: string = '';

  constructor(private formBuilder:FormBuilder, private serviceAbout: AboutService){
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

  //metodos para el formulario y validaciones

  get Name(){
    return this.form.get("name");
  }

  get LastName(){
    return this.form.get("lastName");
  }

  get Age(){
    return this.form.get("age");
  }

  get Position(){
    return this.form.get("position");
  }

  get About(){
    return this.form.get("about");
  }

  get NameValid(){
    return this.Name?.touched && !this.Name?.valid;
  }
  
  get LastNameValid(){
    return this.LastName?.touched && !this.LastName?.valid;
  }
  
  get AboutValid(){
    return this.About?.touched && !this.About?.valid;
  }
  




}
