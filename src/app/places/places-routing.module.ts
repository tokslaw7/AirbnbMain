import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlacesPage } from './places.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: PlacesPage,
    children: [
      {
        path: '',
        redirectTo: '/places/tabs/discover',
        pathMatch: 'full',
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
        path: 'offer-bookings',
        loadChildren: () => import('./offers/offer-bookings/offer-bookings.module').then( m => m.OfferBookingsPageModule)
      },
      {
        path: 'edit/:placeId',
        loadChildren: () => import('./offers/edit-offers/edit-offers.module').then( m => m.EditOffersPageModule)
      },
      {
        path: ':placeId',
        loadChildren: () => import('./discover/place-details/place-details.module').then( m => m.PlaceDetailsPageModule)
      },
      {
        path: '',
        redirectTo: '/places/tabs/discover',
        pathMatch: 'full',
      },
    ]
  },
  {
    path: 'offers',
    children: [
      //   {
      //     path: '',
      //     loadChildren: () => import('./offers/offers.module').then( m => m.OffersPageModule)
      // },
      {
        path: 'new',
        loadChildren: () => import('./offers/new-offer/new-offer.module').then( m => m.NewOfferPageModule)
      },
      {
        path: 'edit/:placeId',
        loadChildren: () => import('./offers/edit-offers/edit-offers.module').then( m => m.EditOffersPageModule)
      },
      {
        path: ':placeId',
        loadChildren: () => import('./offers/offer-bookings/offer-bookings.module').then( m => m.OfferBookingsPageModule)
      },

]
  },
  {
    path: '',
    redirectTo: '/places/tabs/discover',
    pathMatch: 'full',
  },

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlacesPageRoutingModule {}
