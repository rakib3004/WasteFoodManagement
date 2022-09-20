import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  resAuth(){
    this.router.navigateByUrl('resauth');
  }

  ngoAuth(){
    this.router.navigateByUrl('ngoauth');
  }

  login(){
    this.router.navigateByUrl('login');
  }
}
