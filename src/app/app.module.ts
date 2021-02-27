import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DataTablesModule } from "angular-datatables";
import { AppComponent } from './app.component';
import { CdkTableModule } from "@angular/cdk/table";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DataTablesModule,
    CdkTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
