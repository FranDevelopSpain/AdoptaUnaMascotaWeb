import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit{

  mostrarAviso = true;
  
  constructor() {
    if(localStorage.getItem("cookie")) {
      this.mostrarAviso = false;
    };
  }

  ngOnInit(): void {}
}
