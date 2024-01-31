import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DxFormModule } from 'devextreme-angular';
import { DxChartModule } from 'devextreme-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataFormComponent } from './components/data-form/data-form.component';

@NgModule({
  declarations: [AppComponent, DataFormComponent],
  imports: [BrowserModule, AppRoutingModule, DxFormModule, DxChartModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
