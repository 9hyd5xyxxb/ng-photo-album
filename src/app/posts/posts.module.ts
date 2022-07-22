import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiModule } from '../ui/ui.module';
import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './posts.component';

@NgModule({
  declarations: [
    PostsComponent
  ],
  imports: [
    CommonModule,
    UiModule,
    PostsRoutingModule
  ]
})
export class PostsModule { }
