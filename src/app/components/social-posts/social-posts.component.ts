import { Component, OnInit } from '@angular/core';
import {Post} from '../../interfaces/post';

@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css']
})
export class SocialPostsComponent implements OnInit {

  adding: boolean = false;
  
  posts: Array<Post> = [
    {title: 'Chimps', thought: 'In water, chimps will drown.', votes: 0},
    {title: 'Birds', thought: 'Do birds dream of flying into space?', votes: 0},
    {title: 'Crabs', thought: 'Crabs are the peak of evolution.', votes: 0},
    {title: 'Frogs', thought: 'Alex Jones was right.', votes: 0}
  ];

  constructor() { }

  ngOnInit(): void { }

  addPost(newPost: Post) { 
    this.posts.splice(0, 0, newPost); 
    this.adding = false;
  }

  onDelete(oldPost: Post) { this.posts = this.posts.filter(post => post != oldPost); }
}
