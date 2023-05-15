import { Component, OnInit } from '@angular/core';
import { EntryService } from 'src/app/services/entry.service';
import { Entry } from 'src/app/Entry';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  entries: Entry[] = [];
  title: string = 'Mothers Day Contest'; 
  showAddEntry?: boolean = false;
  subscription?: Subscription;

  constructor(private entryService: EntryService, private uiService: UiService, private router: Router) {

    this.subscription = this.uiService.onToggle().subscribe((value) => (this.showAddEntry = value));

  }

  ngOnInit() {}

  toggleEntryForm() {
    this.uiService.toggleAddEntry();
  }

  addNewEntry(entry: Entry) {
    this.entryService.addNewEntry(entry).subscribe((entry) => (this.entries.push(entry)));
  }

  hasRoute( route: string ) {
    return this.router.url === route;
  } 
}
