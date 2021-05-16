import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { AddEditCampaignComponent } from './add-edit-campaign/add-edit-campaign.component';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { CampaignComponent } from './campaign/campaign.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    HomeComponent,
    AddEditCampaignComponent,
    HeaderComponent,
    CampaignComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, SharedModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
