import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatToolbarModule, MatSidenavModule, MatInputModule, MatDialogModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { DialogComponent } from './dialog/dialog.component'
import { HttpModule } from '@angular/http';


@NgModule({
    declarations: [DialogComponent, AppComponent],
  imports: [
    BrowserModule,
    HttpModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatInputModule,
    MatDialogModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  entryComponents: [ DialogComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }
