import { Component, OnInit } from '@angular/core';
import { FormBaseClass } from 'src/app/@core/classes/form-base.class';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent extends FormBaseClass implements OnInit {

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    // Implementation of initForm
  }

  onSubmit(): void {
    // Implementation of onSubmit
  }
}
