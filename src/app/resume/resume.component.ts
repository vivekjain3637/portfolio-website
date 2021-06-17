import { Component, NgModule, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

interface skill{
  skill? : String,
  expertise? : number
}

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})

export class ResumeComponent implements OnInit {
  

  skills : skill [];
  constructor() { 
    this.skills = [
      {skill : "Java", expertise : 85},
      {skill : "SQL", expertise: 90},
      {skill : "Spring", expertise: 80},
      {skill : "Mongo DB", expertise: 75},
      {skill : "Elastic Search", expertise: 75},
      {skill : "Spark SQL", expertise: 85},
      {skill : "Angular", expertise: 75},
      {skill : "Python", expertise: 50},
      {skill : "Agile", expertise: 85},
      {skill : "Git", expertise: 90}
    ]
    // API Call -- Java Spring
  }

  ngOnInit(): void {
      //MongoDB 
  }

  downloadResume(){
    console.log("Downloading file")
  }

}

