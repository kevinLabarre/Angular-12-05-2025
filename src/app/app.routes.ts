import { Routes } from '@angular/router';
import { DirectivesComponent } from './components/directives/directives.component';
import { OutputComponent } from './components/output/output.component';

export const routes: Routes = [
  { path: "", component: DirectivesComponent },
  { path: "output", component: OutputComponent }
];
