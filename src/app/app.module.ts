import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserDataComponent } from './user-data/user-data.component';
import { InputsComponent } from './inputs/inputs.component';
import { OutputsComponent } from './outputs/outputs.component';
import { FormsModule } from '@angular/forms';
import { ClearButtonComponent } from './inputs/clear-button/clear-button.component';

@NgModule({
  declarations: [
    AppComponent,
    UserDataComponent,
    InputsComponent,
    OutputsComponent,
    ClearButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
