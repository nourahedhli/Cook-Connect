import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {Component} from '@angular/core';
import {MatChipInputEvent} from '@angular/material/chips';

// tslint:disable-next-line:class-name
export interface cat {
  name: string;
}


// @ts-ignore
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  categories: cat[] = [
    {name: 'Dessert'},
    {name: 'Vegetarian'},
    {name: 'Gluten-Free'},
  ];

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.categories.push({name: value.trim()});
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(cats: cat): void {
    const index = this.categories.indexOf(cats);

    if (index >= 0) {
      this.categories.splice(index, 1);
    }
  }
}

