import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import {MatChipInputEvent} from '@angular/material/chips';
import {FormControl} from '@angular/forms';
import {MatAutocompleteSelectedEvent, MatAutocomplete} from '@angular/material/autocomplete';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';




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
export class Tab3Page implements OnInit{
  constructor() {
    this.filteredCategories = this.categoryCtrl.valueChanges.pipe(
        startWith(null),
        map((category: string | null) => category ? this._filter(category) : this.allCategories.slice()));
  }
  visible = true;
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  categoryCtrl = new FormControl();
  filteredCategories: Observable<string[]>;
  categories: string[] = ['Dessert'];
  allCategories: string[] = ['Dessert', 'Vegetarian', 'Gluten-Free', 'Lunch', 'Dinner', 'Vegan'];
  name = '';
  values = [];
  values1 = [];
// for the chip
  @ViewChild('categoryInput') categoryInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;

  // these for the inputs
  ngOnInit() {
  }
  removevalue(i){
    this.values.splice(i, 1);
  }
addvalue(){
    this.values.push({value: ''});
}
// for Method input
  removevalue1(i){
    this.values1.splice(i, 1);
  }
  addvalue1(){
    this.values1.push({value1: ''});
  }

// adding the chips
  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.categories.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }

    this.categoryCtrl.setValue(null);
  }

  remove(fruit: string): void {
    const index = this.categories.indexOf(fruit);

    if (index >= 0) {
      this.categories.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.categories.push(event.option.viewValue);
    this.categoryInput.nativeElement.value = '';
    this.categoryCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allCategories.filter(fruit => fruit.toLowerCase().indexOf(filterValue) === 0);
  }




}

