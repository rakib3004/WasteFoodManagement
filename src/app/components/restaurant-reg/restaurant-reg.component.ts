import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurant-reg',
  templateUrl: './restaurant-reg.component.html',
  styleUrls: ['./restaurant-reg.component.css']
})
export class RestaurantRegComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
