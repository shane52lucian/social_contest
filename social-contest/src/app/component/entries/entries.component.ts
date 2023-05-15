import { Component, OnInit } from '@angular/core';
import { EntryService } from 'src/app/services/entry.service';
import { Entry } from 'src/app/Entry';


@Component({
  selector: 'app-entries',
  templateUrl: './entries.component.html',
  styleUrls: ['./entries.component.scss']
})
export class EntriesComponent implements OnInit {
  entries: Entry[] = [];

  constructor(private entryService: EntryService ) {}

  ngOnInit(): void {
    this.entryService.getEntries().subscribe((entries) => (this.entries = entries));
  }

  addVote(entry: Entry ) {

    entry.votes++;

    this.entryService.addVotes(entry).subscribe( );
  }

}
