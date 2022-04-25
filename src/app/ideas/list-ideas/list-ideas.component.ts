import { Component, OnInit } from '@angular/core';
import {Idea} from '../models/idea.model';
import {IdeasService} from '../ideas.service';

@Component({
  selector: 'app-list-ideas',
  templateUrl: './list-ideas.component.html',
  styleUrls: ['./list-ideas.component.scss']
})
export class ListIdeasComponent implements OnInit {

  ideas: Idea[]= [];

  constructor(private ideaService: IdeasService) { }

  ngOnInit(): void {
    this.listIdeas();
  }

  private listIdeas() {
    this.ideaService.listIdeas().subscribe(ideas => this.ideas = ideas);
  }

  upvote(idea: Idea) {
    this.ideaService.upvoteIdea(idea).subscribe(_ => this.listIdeas());
  }

  downvote(idea: Idea) {
    this.ideaService.downvoteIdea(idea).subscribe(_ => this.listIdeas());
  }

  delete(idea: Idea) {
    this.ideaService.deleteIdea(idea).subscribe(_ => this.listIdeas());
  }
}
