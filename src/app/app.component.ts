import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'slick-slider';

  slides = [
    {img: "../assets/image/1.jpg"},
    {img: "../assets/image/2.jpg"},
    {img: "../assets/image/3.jpg"},
    {img: "../assets/image/4.jpg"},
    {img: "../assets/image/5.jpg"},
  ];

  slideConfig = {
    "speed": 300,
    "slidesToShow": 3, 
    "slidesToScroll": 2,
    "arrows": true,
    // "dots":true,
    "infinite": true,
    // "centerMode": true,
    // "centerPadding": '20px',
    "autoplay": true,
    "autoplaySpeed": 2000,
    "responsive":[
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
}
