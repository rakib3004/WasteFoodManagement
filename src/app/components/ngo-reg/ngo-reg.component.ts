import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ngo-reg',
  templateUrl: './ngo-reg.component.html',
  styleUrls: ['./ngo-reg.component.css']
})
export class NgoRegComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
