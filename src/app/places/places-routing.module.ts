import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlacesPage } from './places.page';

const routes: Routes = [
  {
    path: '',
    component: PlacesPage
  },
  {
    path: 'discover',
    loadChildren: () => import('./discover/discover.module').then( m => m.DiscoverPageModule)
  },
  {
    path: 'new-offer',
    loadChildren: () => import('./offers/new-offer/new-offer.module').then( m => m.NewOfferPageModule)
  },
  {
    path: 'edit-offers',
    loadChildren: () => import('./offers/edit-offers/edit-offers.module').then( m => m.EditOffersPageModule)
  },
  {
    path: 'offer-bookings',
    loadChildren: () => import('./offers/offer-bookings/offer-bookings.module').then( m => m.OfferBookingsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlacesPageRoutingModule {}
