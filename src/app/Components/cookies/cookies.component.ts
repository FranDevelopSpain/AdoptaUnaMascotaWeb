import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cookies',
  templateUrl: './cookies.component.html',
  styleUrls: ['./cookies.component.css']
})
export class CookiesComponent implements OnInit{

  mostrar = false; 

  constructor(){
    
  }

  ngOnInit(): void {}

  accept() {
    const cookie = document.cookie = "Esto son las cookies de AUM; max-age="+60*60*24*30;
    const cookieWrapper = document.querySelector(".wrapper");
    
    localStorage.setItem("cookie", cookie);
    cookieWrapper?.classList.add("hide");
    
  }
}