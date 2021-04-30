import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

import { MatSidenav } from '@angular/material/sidenav';

import { WikiService } from '../wiki.service';

@Component({
  selector: 'app-wiki',
  templateUrl: './wiki.component.html',
  styleUrls: ['./wiki.component.scss'],
})
export class WikiComponent implements OnInit, AfterViewInit {
  @ViewChild('sidenav') sidenav: MatSidenav;

  showSideNav: boolean = true;
  isExpanded = true;
  showSubmenu: boolean = false;

  selectedMenu: string = null;

  links: any[];
  wikiList: any[] = [];

  displayedColumns: string[] = ['id', 'name'];

  constructor(private service: WikiService) {
    this.links = service.getWikiLink();
    this.wikiList = service.getWikiEnv();
    // Create 100 users
    //const users =

    // Assign the data to the data source for the table to render
    //this.dataSource = new MatTableDataSource(users);
  }

  ngAfterViewInit() {}

  ngOnInit(): void {}

  onMainMenuClick(id: string): void {
    this.showSubmenu = !this.showSubmenu;
    this.selectedMenu = id;
  }
  onShowSideNav() {
    this.showSideNav = !this.showSideNav;
  }
}
