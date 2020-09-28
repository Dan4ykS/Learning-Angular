import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-work-with-server',
  templateUrl: './work-with-server.component.html',
  styleUrls: ['./work-with-server.component.scss'],
})
export class WorkWithServerComponent {
  postTitle = '';
  postBody = '';

  constructor(public postService: PostsService, private pageTitle: Title) {
    pageTitle.setTitle('Работа с сервером');
  }
}
