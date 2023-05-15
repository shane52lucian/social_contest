import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { ButtonComponent } from './component/button/button.component';
import { EntriesComponent } from './component/entries/entries.component';
import { EntryCardComponent } from './component/entry-card/entry-card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { AddEntryComponent } from './component/add-entry/add-entry.component'
import { FormsModule } from '@angular/forms';

import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { InstructionsComponent } from './pages/instructions/instructions.component';
import { FooterComponent } from './component/footer/footer.component';
import { TermsComponent } from './pages/terms/terms.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    EntriesComponent,
    EntryCardComponent,
    AddEntryComponent,
    InstructionsComponent,
    FooterComponent,
    TermsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    ShareButtonsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
