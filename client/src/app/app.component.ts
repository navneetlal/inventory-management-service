import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { LoginService } from './service/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'client';
  token: string = '';
  userForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(
    public loginService: LoginService
  ){ }

  onSubmit() {
    console.warn(this.userForm.value);
    this.loginService.login(this.userForm.value).subscribe(res => {
      this.token = res.token;
      localStorage.setItem('token', this.token);
    });
  }
}
