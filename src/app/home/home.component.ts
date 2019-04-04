import { Component, OnInit, Input } from '@angular/core';
import { NgwWowService } from 'ngx-wow'; 
import { Router, NavigationEnd } from '@angular/router';
import { CollapseModule } from 'ngx-bootstrap'
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    @Input() isCollapsed: boolean = false;

    constructor(
        private router: Router,
        private ngwWowService: NgwWowService
    ) { 
    }

    ngOnInit() {
        this.isCollapsed = true;
    }

    ngOnDestroy() {
    }
}
