import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { TestService } from '../test.service';
import { User } from '../user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private testservice:TestService) {} 
    User:User[]=[];
  ngOnInit(): void {
    alert(this.testservice.gettodaysdate());
}
printname(){
  alert(this.testservice.getMyName())
}
getalluser(){
  this.testservice.getalluser().subscribe(x=>{
       this.User=x
  })
}

}