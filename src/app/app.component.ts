import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio-website';

  show = false;
  toggleClick(){
    console.log("Changing toggle");
    
    this.show = !this.show;

    console.log("Current state" , this.show)
  }
}


