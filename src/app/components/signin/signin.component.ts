import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  form:FormGroup;

  //Inyectar en el constructor el formBuilder
  constructor(private formBuilder:FormBuilder) { 
    //Creamos el grupo de controles para el formulario de login
    this.form=this.formBuilder.group({
      password:['', [Validators.required, Validators.minLength(8)]],
      email: ['', [Validators.required, Validators.email]]
    })
    
  }

  ngOnInit(): void { }

  //metodos para el formulario

  get Password(){
    return this.form.get("password");
  }

  get Mail(){
    return this.form.get("email");
  }

  get PasswordValid(){
    return this.Password?.touched && !this.Password?.valid;
  }
  
  get MailValid(){
    return this.Mail?.touched && !this.Mail?.valid;
  }
  

  onSubmit(event: Event){
    //detenemos la ejecucion del comportamiento del submit del form
    event.preventDefault;

    if (this.form.valid){
      //Llamamos a nuestro servicio para enviar los datos al servidor. 
      //Tambien podriamos ejecutar alguna logica extra.
      console.log("Todo ok! Formulario Enviado!");
    } else {
      //Corremos todas las validaciones para que se ejecuten los mensajes de error en el template.
      this.form.markAllAsTouched();
    }

  }
}
