import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { LoginService } from '../../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  ngOnInit(): void {
  }
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
