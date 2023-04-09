import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/auth/login.service';
import { LoginRequest } from 'src/app/services/auth/loginRequest';
import { Person } from 'src/app/models/person';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})

export class SigninComponent implements OnInit {

  loginForm: FormGroup; 
  email = '';
  password = '';
  loginError ='';

  person: Person = new Person("", "", "", "", "", "", "", "", "");

  // Inyectar en el constructor el formBuilder
  constructor(private router: Router, private formBuilder: FormBuilder, private loginService: LoginService){  // el formBuilder es un alias
    // Creamos el grupo de controles para el formulario de login
    this.loginForm= this.formBuilder.group({
      email:['', [Validators.required, Validators.email]],
      password:['',[Validators.required, Validators.minLength(8)]],
    })
  }

  ngOnInit(): void {

  }

    //metodos para el formulario

    get Password(){
      return this.loginForm.get("password");
    }
  
    get Mail(){
      return this.loginForm.get("email");
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
  
      if (this.loginForm.valid){
        //Llamamos a nuestro servicio para enviar los datos al servidor. 
        //Tambien podriamos ejecutar alguna logica extra.
        console.log("Todo ok! Formulario Enviado!");
        this.loginService.login(this.loginForm.value as LoginRequest).subscribe({
          next: (userData) =>{
            console.log(userData);
            
          }, error: (errorData) =>{
            console.error(errorData);
            this.loginError=errorData;
          },
          complete: ()=> {
            console.log('Login OK!');
            this.router.navigateByUrl('/portfolio')
            this.loginForm.reset();
          }
        })

      } else {
        //Corremos todas las validaciones para que se ejecuten los mensajes de error en el template.
        this.loginForm.markAllAsTouched();
      }
  
    }
}


