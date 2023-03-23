import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AboutService } from 'src/app/services/about.service';

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
  


  onSubmit(event: Event){
    //detenemos la ejecucion del comportamiento del submit del form
    event.preventDefault;

    if (this.form.valid){
      //Llamamos a nuestro servicio para enviar los datos al servidor. 
      //Tambien podriamos ejecutar alguna logica extra.
      alert("Los datos han sido modificados correctamente.");
    } else {
      //Corremos todas las validaciones para que se ejecuten los mensajes de error en el template.
      this.form.markAllAsTouched();
    }

  }
}
