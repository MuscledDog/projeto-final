import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';

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
      email: [''],
      password: [''],
    });

  


   }

}

