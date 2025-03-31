import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  currentPage: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.currentPage = window.location.href.split('/')[3]
    console.log(this.currentPage)
  }
}