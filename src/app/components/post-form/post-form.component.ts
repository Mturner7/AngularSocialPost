import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import {Post} from '../../interfaces/post';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  validTitle: boolean = true;
  validThought: boolean = true;

  @Input() newPost: Post = {title: '', thought: '', votes: 0};

  @Output() create: EventEmitter<Post> = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

  stripWhitespace(word: string) { return word.replace(/^\s+|\s+$/g, ""); }

  emitCreateEvent() { 
    this.newPost.title = this.stripWhitespace(this.newPost.title);
    this.newPost.thought = this.stripWhitespace(this.newPost.thought);

    if (!this.newPost.thought) { this.validThought = false; }

    else if (!this.newPost.title) { this.validTitle = false; }
    
    else this.create.emit(this.newPost); 
  }

}