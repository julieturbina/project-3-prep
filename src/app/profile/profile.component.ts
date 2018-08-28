
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent  {
  
  title = 'angular-frontend projest by Juliet';
  //==========CREATE A PROFILE========== 
  showPlaces = true;
  person = {
    name: 'Juliet',
    travel: 'travel',
      places: {
        city1: 'Belize',
        city2: 'United Kingdom',
        city3: 'Mexico'
      },
    avatar: 'https://www.onlinewebfonts.com/icon/959',
    interests: [
      {name:'Travel'},
      {name:'Explore'},
      {name:'Learn'}
    ]
  }
    
  constructor(){
    this.title = 'Final Project by Juliet Urbina';
  }
}

