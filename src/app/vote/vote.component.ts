import { Component, OnInit, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {

  @Output() isComplete = new EventEmitter<boolean>();

  upvotes = 0;
  dvotes = 0;
  shares = 0;

  upVotes() {
    this.upvotes = this.upvotes + 1;
  }

  downVote() {
    this.dvotes = this.dvotes + 1;
  }

  share() {
    this.shares = this.shares + 1;
  }
  constructor() { }

  ngOnInit() {
  }

}
