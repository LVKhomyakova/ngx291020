import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(
    private router: Router,
  ) {
  }

  public ngOnInit(): void {
    this.router.events
      .pipe(
        // filter((event) => event instanceof NavigationStart && event.id === 1)
      )
      // tslint:disable-next-line:variable-name
      .subscribe((_event) => {
        //console.log(event);
      });
  }
}

