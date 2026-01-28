import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  protected signinforms: UntypedFormGroup;


  constructor(private fb: UntypedFormBuilder) {
    this.signinforms = this.fb.nonNullable.group({
      email: ['',[Validators.required, Validators.email]],
      password: ['',[Validators.required, Validators.minLength(3), Validators.maxLength(16)]],
    });
   }

onSubmit(){
 // this.signinforms.get('email')?.getError('required');


  console.log("Meu forms", this.signinforms.controls['email'].value)

  console.log("Meu forms", this.signinforms.value )

}

}

