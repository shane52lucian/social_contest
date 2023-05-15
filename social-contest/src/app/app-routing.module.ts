import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntriesComponent } from './component/entries/entries.component';
import { InstructionsComponent } from './pages/instructions/instructions.component';
import { TermsComponent } from './pages/terms/terms.component';

const routes: Routes = [
  { 
    path: "", 
    component: EntriesComponent, 
  },
  { path: 'instructions', component: InstructionsComponent },
  { path: 'terms', component: TermsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
