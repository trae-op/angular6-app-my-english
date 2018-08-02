


import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { UsersComponent } from './users/users.component';
import { PageNotFoundComponent } from './page-not-found.component';


export const ROUTES = [
  { path: '', component: HomeComponent },
  { path: 'detail/:titleEn/page/:pageNumber', component: DetailComponent },
  { path: 'users', component: UsersComponent },
  { path: '**', component: PageNotFoundComponent }
];
