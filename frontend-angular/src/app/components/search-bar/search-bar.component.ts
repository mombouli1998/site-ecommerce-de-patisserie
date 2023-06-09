import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  searchterm: string=""
  @Output() onSearch = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  search(): void{
    this.onSearch.emit(this.searchterm)
  }

}
