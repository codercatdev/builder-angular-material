import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  public contentLoaded(event: Event): void {
    console.log('Content Loaded', event);
  }
  public contentError(event: Event): void {
    console.log('Content Error', event);
  }
}
