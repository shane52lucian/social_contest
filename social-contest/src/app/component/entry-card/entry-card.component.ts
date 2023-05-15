import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Entry } from 'src/app/Entry';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-entry-card',
  templateUrl: './entry-card.component.html',
  styleUrls: ['./entry-card.component.scss']
})
export class EntryCardComponent implements OnInit{

  @Input() entry?: Entry;
  @Output() onVoteEntry: EventEmitter<Entry> = new EventEmitter();
  faheart = faHeart;
  voteCount: number = 0;

  constructor() {}
  ngOnInit(): void {}

  onVote(entry: any) {
    this.onVoteEntry.emit(entry);
  }
}
