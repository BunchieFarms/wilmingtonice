import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor() { }

  carouselImages = [1, 2, 3].map(() => `https://picsum.photos/1600/700?random&t=${Math.random()}`);
  cardImages = [1, 2, 3].map(() => `https://picsum.photos/400/400?random&t=${Math.random()}`);

  carouselData = [
    { 'image': this.carouselImages[0], 'title': 'We\'re Hiring!', 'body': '<p>Looking for a few people to work Fridays, Saturdays and Sundays starting soon!</p><p>Positions will be for front desk/snack bar, skate rental/skate guard, and birthday party hosts/hostesses.</p><p>Come to the rink to fill out an application or email Ashley your resume and why you want to work here.</p>', 'hideButton': false, 'button':  'Email Ashley', 'buttonLink': '#'},
    { 'image': this.carouselImages[1], 'title': 'Now accepting registrations for Fall 2019 Adult Hockey!', 'body': '', 'hideButton': false, 'button': 'Register Now', 'buttonLink': '#' },
    { 'image': this.carouselImages[2], 'title': 'Fire on Ice Tournament', 'body': '', 'hideButton': true, 'button': '', 'buttonLink': '#' }
  ];

  cardData = [
    { 'image': this.cardImages[0], 'title': 'Master Schedule', 'body': 'Check times for Public Skate and other activities.', 'hideButton': false, 'button': 'Go to Schedules', 'buttonLink': '#' },
    { 'image': this.cardImages[1], 'title': 'Beginner Hockey', 'body': 'Learn to skate and play hockey! Starts September 7th.', 'hideButton': false, 'button': 'Learn More', 'buttonLink': '#' },
    { 'image': this.cardImages[2], 'title': 'Learn To Skate', 'body': 'Join skate school, starting September 9th!', 'hideButton': false, 'button': 'Learn More', 'buttonLink': '#' },
  ];

  ngOnInit() {
  }

}
