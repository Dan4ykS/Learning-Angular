import { Component, Input, OnInit } from '@angular/core';

import { requestError } from '../../services/interfaces';

@Component({
  selector: 'app-loader-data',
  templateUrl: './loader-data.component.html',
  styleUrls: ['./loader-data.component.scss'],
})
export class LoaderDataComponent implements OnInit {
  @Input() loading: boolean;
  @Input() error: requestError;
  @Input() funcForLoading: () => void | null;

  constructor() {}

  ngOnInit(): void {
    if (this.funcForLoading) {
      this.funcForLoading();
    }
  }
}
