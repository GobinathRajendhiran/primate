import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  container: HTMLElement | null;
  registerBtn: HTMLElement | null;
  loginBtn: HTMLElement | null;
  currentPage: string = 'login';

  constructor() {
    this.container = null;
    this.registerBtn = null;
    this.loginBtn = null;
  }

  ngOnInit(): void {
    this.container = document.querySelector('.loginMainSection');
    this.registerBtn = document.querySelector('.register-btn');
    this.loginBtn = document.querySelector('.login-btn');

    this.registerBtn?.addEventListener('click', () => {
      this.container?.classList.add('active');
    });

    this.loginBtn?.addEventListener('click', () => {
      this.container?.classList.remove('active');
    });
  }
}
