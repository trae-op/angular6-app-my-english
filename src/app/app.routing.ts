


import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { PageNotFoundComponent } from './page-not-found.component';


export const ROUTES = [
  { path: '', component: HomeComponent },
  { path: 'detail/:titleEn/page/:pageNumber', component: DetailComponent },
  { path: '**', component: PageNotFoundComponent }
];
