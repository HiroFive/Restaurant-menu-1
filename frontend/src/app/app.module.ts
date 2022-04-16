import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDropzoneModule } from 'ngx-dropzone';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent, AdminComponent } from './pages';
import { ScrollComponent } from './components/scroll/scroll.component';
import { FoodCardComponent } from './components/food-card/food-card.component';
import { FoodListComponent } from './components/food-list/food-list.component';
import { SidebarComponent } from './components/navbar/sidebar/sidebar.component';
import { ListItemComponent } from './components/navbar/sidebar/list-item/list-item.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ButtonComponent } from './components/common/button/button.component';
import { ModalComponent } from './components/common/modal/modal.component';
import { ShowHideButtonComponent } from './components/common/show-hide-button/show-hide-button.component';
import { EditInfoComponent } from './components/common/forms/edit-info/edit-info.component';
import { AddCategoryComponent } from './components/common/forms/category-crud/add-category/add-category.component';
import { AddSubCategoryComponent } from './components/common/forms/category-crud/add-subcategory/add-subcategory.component';
import { EditCategoryComponent } from './components/common/forms/category-crud/edit-category/edit-category.component';
import { AddFoodComponent } from './components/common/forms/food-crud/add-food/add-food.component';
import { EditFoodComponent } from './components/common/forms/food-crud/edit-food/edit-food.component';
import { SearchComponent } from './components/search/search.component';
import {
  CategoryDeleteComponent,
  FoodDeleteComponent,
} from './components/common/forms/delete/';
import { NotFoundBannerComponent } from './components/not-found-banner/not-found-banner.component';
import { FormInputComponent } from './components/common/form-input/form-input.component';
import { CheckboxComponent } from './components/common/checkbox/checkbox.component';
import { LoadingBannerComponent } from './components/common/loading-banner/loading-banner.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ScrollComponent,
    FoodCardComponent,
    FoodListComponent,
    SidebarComponent,
    ListItemComponent,
    NotFoundComponent,
    ButtonComponent,
    ModalComponent,
    ShowHideButtonComponent,
    EditInfoComponent,
    AddCategoryComponent,
    AddSubCategoryComponent,
    EditCategoryComponent,
    AddFoodComponent,
    EditFoodComponent,
    SearchComponent,
    CategoryDeleteComponent,
    FoodDeleteComponent,
    NotFoundBannerComponent,
    FormInputComponent,
    CheckboxComponent,
    LoadingBannerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDropzoneModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
