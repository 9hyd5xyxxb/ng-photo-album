import { Component, OnInit } from '@angular/core';
import { DefaultService } from 'api/api';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private defaultService: DefaultService) { }

  ngOnInit(): void {
    this.defaultService.getPosts().subscribe(console.log);
    this.defaultService.getPostsPostId(1).subscribe(console.log);

    this.defaultService.getAlbums().subscribe(console.log);
    this.defaultService.getAlbumsAlbumId(1).subscribe(console.log); 

    this.defaultService.getPhotos().subscribe(console.log);
    this.defaultService.getPhotosPhotoId(1).subscribe(console.log);

    this.defaultService.getUsersUserId(1).subscribe(console.log);
  }
}
