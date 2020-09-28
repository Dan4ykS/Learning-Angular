import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Params } from '@angular/router';

import { Post } from 'src/app/services/interfaces';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  post: Post;
  showId: boolean;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe((data: Data) => {
      this.post = data.post;
    });
    this.route.queryParams.subscribe((params: Params) => {
      if (params.showId === 'true') {
        this.showId = true;
      } else {
        this.showId = false;
      }
    });
  }
}
