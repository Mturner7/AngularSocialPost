import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import {Post} from '../../interfaces/post'

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() thispost: Post = {title: '', thought: '', votes: 0};
  @Output() delete: EventEmitter<Post> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  emitDeleteEvent(){
    this.delete.emit(this.thispost);
  }
}
