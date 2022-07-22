import { Component, OnInit } from '@angular/core';
import { DefaultService } from 'api/api';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(private defaultService: DefaultService) { }

  ngOnInit(): void {
  }

  getPosts() {
    this.defaultService.getPosts().subscribe(console.log);
  }
}
