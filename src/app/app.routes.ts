import { Routes } from '@angular/router';
import { DirectivesComponent } from './components/directives/directives.component';
import { OutputComponent } from './components/output/output.component';
import { ProductComponent } from './pages/product/product.component';
import { ProductDescriptionComponent } from './components/product-description/product-description.component';
import { FicheTechniqueComponent } from './components/fiche-technique/fiche-technique.component';
import { DevisComponent } from './components/devis/devis.component';

export const routes: Routes = [
  // Page d'accueil
  { path: "", component: DirectivesComponent },

  // Page accessible à '/output'
  { path: "output", component: OutputComponent },

  // Page accessible à '/output/8'
  {
    path: "product/:id/:slug", component: ProductComponent,
    children: [
      { path: 'description', component: ProductDescriptionComponent },
      { path: 'fiche-technique', component: FicheTechniqueComponent },
      { path: 'devis', component: DevisComponent }
    ]

  },
];
