import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  maxDate:any;
  constructor(){

  }

  ngOnInit():void {
    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear()-18);
    console.log('maxdate:,',this.maxDate);
  }
  onSubmit(form:NgForm){
    console.log(form);
  }
}
