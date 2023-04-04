import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cookies',
  templateUrl: './cookies.component.html',
  styleUrls: ['./cookies.component.css']
})
export class CookiesComponent implements OnInit{

  constructor(){}

  ngOnInit(): void {
    setTimeout(() => {
      const cookieWrapper = document.querySelector(".wrapper");
      cookieWrapper?.classList.add("appear");
    }, 100);
  }

  accept() {
    const cookie = document.cookie = "Esto son las cookies de AUM; max-age="+60*60*24*30;
    const backgroundCookie = document.querySelector(".background-cookies");

    localStorage.setItem("cookie", cookie);
    backgroundCookie?.classList.add("hide");
  }
}