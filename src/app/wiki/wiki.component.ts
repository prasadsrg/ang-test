import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { MatSidenav } from '@angular/material/sidenav';

import { WikiService } from '../wiki.service';

@Component({
  selector: 'app-wiki',
  templateUrl: './wiki.component.html',
  styleUrls: ['./wiki.component.scss'],
})
export class WikiComponent implements OnInit, AfterViewInit {
  dbData: any = {};

  @ViewChild('sidenav') sidenav: MatSidenav;

  showSideNav: boolean = true;
  isExpanded = true;
  showSubmenu: boolean = false;

  selectedMenu: string = null;
  currentDate: Date = new Date();
  links: any[];
  wikiList: any[] = [];

  displayedColumns: string[] = ['id', 'name'];

  constructor(private service: WikiService, private dialog: MatDialog) {
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

  viewDdTemplate(template, data) {
    console.log(data);
    this.dbData = data;
    this.dialog.open(template);
  }
}
