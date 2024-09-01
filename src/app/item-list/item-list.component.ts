import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  items: any[] = [];
  filteredItems: any[] = [];
  searchTerm: string = '';
  sortOrder: string = 'asc';

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    this.itemService.getItems().subscribe(data => {
      this.items = data.entries; // Adjust according to API response structure
      this.filteredItems = this.items;
    });
  }

  // Filter items based on the search term
  filterItems(): void {
    this.filteredItems = this.items.filter(item =>
      item.API.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  // Sort items based on API name
  sortItems(): void {
    this.filteredItems.sort((a, b) => {
      const comparison = a.API.localeCompare(b.API);
      return this.sortOrder === 'asc' ? comparison : -comparison;
    });
  }
}
