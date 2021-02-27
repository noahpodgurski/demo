import { Component } from '@angular/core';
import { Book } from 'src/app/shared/models/book.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  books = [
    new Book(1, "Case of the Winged Jackal", "Theo Quinten", new Date("1-3-2010")),
    new Book(2, "Flies of Silence", "Jackie Tim", new Date("4-13-2003")),
    new Book(3, "Atomic Angel", "Lally Kimberlyn", new Date("6-11-2012")),
    new Book(4, "The Girl in the City", "Denton Roxanna", new Date("5-1-2012")),
    new Book(5, "Into the Mirage", "Van Morris", new Date("12-9-2009")),
  ]
  dataSource: any;
  dtOptions: DataTables.Settings = {};

  clickEvent(){
    this.books.push(new Book(this.books.length+1, String($("#title").val()), String($("#author").val()), new Date(String($("#publish_date").val()))))
  }

  onChange(checked){
    if (checked){
      for (let i = 0; i < this.books.length; i++){
        this.books[i].title = this.books[i].title.toUpperCase();
      }  
    } else {
      for (let i = 0; i < this.books.length; i++){
        this.books[i].title = this.books[i].title.toLowerCase();
        this.books[i].title = this.books[i].title.charAt(0).toUpperCase() + this.books[i].title.slice(1);
      }
    }
  }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers'
    };
    this.dataSource = this.books;
    console.log(this.dataSource)
  }
}
