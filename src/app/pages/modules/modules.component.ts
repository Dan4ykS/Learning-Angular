import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.scss'],
})
export class ModulesComponent implements OnInit {
  constructor(private pageTitle: Title) {
    pageTitle.setTitle('Работа с модулями')
  }

  ngOnInit(): void {
  }
}
