import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-demo',
  templateUrl: './form-demo.component.html',
  styleUrls: ['./form-demo.component.css']
})
export class FormDemoComponent implements OnInit {

  constructor() { }
  sampleForm = new FormGroup({
    name:new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(10)]),
    age:new FormControl('',[Validators.required,Validators.min(18),Validators.max(30),Validators.pattern("^[0-9]*$")]),
    contact:new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern("^[0-9]*$")]),
    email:new FormControl('',[Validators.required,Validators.pattern("[A-Z0-9a-z._%+-]+@[a-z]+\.[a-z]{2,3}")])
  })

  ngOnInit(): void {
    
  }
  LogData(){
    console.log(this.sampleForm.value)
  }
}
