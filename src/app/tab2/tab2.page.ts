import { Component } from '@angular/core';
import { Tab3Page } from '../tab3/tab3.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private router: Router) {}

  clkVerduras(){
    console.log('No hace nada lol')
  }
}
