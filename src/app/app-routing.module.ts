import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutApiComponent } from './component/about/about-api/about-api.component';
import { AboutUsComponent } from './component/about/about-us/about-us.component';
import { AboutComponent } from './component/about/about.component';
import { AuthorizationComponent } from './component/authorization/authorization/authorization.component';
import { LogInComponent } from './component/authorization/log-in/log-in.component';
import { SignUpComponent } from './component/authorization/sign-up/sign-up.component';
import { ContactComponent } from './component/contact/contact.component';
import { DishListComponent } from './component/dish-list/dish-list.component';
import { DishComponent } from './component/dish-list/dish/dish.component';
import { FavoritesComponent } from './component/profile/favorites/favorites.component';
import { AuthorizationGuard } from './component/guards/authorization/authorization.guard';
import { MessageGuard } from './component/guards/message/message.guard';
import { HomeComponent } from './component/home/home.component';
import { MessageComponent } from './component/message/message.component';
import { ProfileComponent } from './component/profile/profile.component';
import { UserInfoComponent } from './component/profile/user-info/user-info.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'pageNotFound',
    loadChildren: () => import('./component/page-not-found/page-not-found.module').then((notFound) => notFound.PageNotFoundModule)
  },
  {
    path: 'dish-list',
    component: DishListComponent,
    children: [
      {
        path: 'message',
        component: MessageComponent
      },
    ]
  },
  {
    path: 'dish-list/:id',
    canActivate: [AuthorizationGuard],
    component: DishComponent,
  },
  {
    path: 'about',
    redirectTo: 'about/us',
    pathMatch: 'full'
  },
  {
    path: 'about',
    component: AboutComponent,
    children: [
      {
        path: 'us',
        component: AboutUsComponent
      },
      {
        path: 'api',
        component: AboutApiComponent
      },
      {
        path: '**',
        redirectTo: 'pageNotFound'
      },
    ]
  },
  {
    path: 'profile',
    redirectTo: 'profile/userInfo',
    pathMatch: 'full'
  },
  {
    path: 'profile',
    component: ProfileComponent,
    children: [
      {
        path: 'userInfo',
        component: UserInfoComponent
      },
      {
        path: 'favorites',
        component: FavoritesComponent
      },
      {
        path: '**',
        redirectTo: 'pageNotFound'
      },
    ]
  },
  {
    path: 'log-in',
    component: LogInComponent
  },
  {
    path: 'sign-up',
    component: SignUpComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'pageNotFound'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
