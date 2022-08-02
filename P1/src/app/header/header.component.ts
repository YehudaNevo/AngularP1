import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  @Output() featuredSelected = new EventEmitter<string>();

  onSelect(feature: string) {
    this.featuredSelected.emit(feature);
  }

  constructor() {}

  ngOnInit() {}
}
