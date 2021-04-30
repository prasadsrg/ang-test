import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressComponent } from './address/address.component';
import { PersonComponent } from './person/person.component';
import { WikiComponent } from './wiki/wiki.component';

const routes: Routes = [
  { path: '', component: WikiComponent },
  { path: 'person', component: PersonComponent },
  { path: 'address', component: AddressComponent },
  { path: 'wiki', component: WikiComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
