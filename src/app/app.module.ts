import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { IngredientsComponent } from './component/dish-list/ingredients/ingredients.component';
import { DishListComponent } from './component/dish-list/dish-list.component';
import { DishCardComponent } from './component/dish-list/dish-card/dish-card.component';
import { DishListDataService } from './component/services/dish-list-data/dish-list-data.service';
import { DishListService } from './component/services/dish-list/dish-list.service';
import { ContactComponent } from './component/contact/contact.component';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { DishComponent } from './component/dish-list/dish/dish.component';
import { DishListFormService } from './component/services/dish-list-form/dish-list-form.service';
import { AboutUsComponent } from './component/about/about-us/about-us.component';
import { AboutApiComponent } from './component/about/about-api/about-api.component';
import { AuthorizationGuard } from './component/guards/authorization/authorization.guard';
import { AuthorizationService } from './component/services/authorization/authorization.service';
import { MessageGuard } from './component/guards/message/message.guard';
import { MessageComponent } from './component/message/message.component';
import { AuthorizationComponent } from './component/authorization/authorization/authorization.component';
import { SingUpModule } from './component/authorization/sign-up/sing-up.module';
import { LogInModule } from './component/authorization/log-in/log-in.module';
import { CommonModule } from '@angular/common';
import { FavoritesComponent } from './component/profile/favorites/favorites.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FavoritesService } from './component/services/favorites/favorites.service';
import { FavoritesDataService } from './component/services/favorites-data/favorites-data.service';
import { ProfileComponent } from './component/profile/profile.component';
import { FormModule } from './component/dish-list/form/form.module';
import { UserInfoComponent } from './component/profile/user-info/user-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IngredientsComponent,
    DishListComponent,
    DishCardComponent,
    ContactComponent,
    HomeComponent,
    AboutComponent,
    DishComponent,
    AboutUsComponent,
    AboutApiComponent,
    MessageComponent,
    AuthorizationComponent,
    FavoritesComponent,
    ProfileComponent,
    UserInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SingUpModule,
    LogInModule,
    CommonModule,
    FontAwesomeModule,
    FormModule
  ],
  providers: [
    DishListDataService,
    DishListService,
    DishListFormService,
    AuthorizationGuard,
    AuthorizationService,
    FavoritesService,
    FavoritesDataService,
    MessageGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
