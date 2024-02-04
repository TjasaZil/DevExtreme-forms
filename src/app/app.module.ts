import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { DxFormModule } from 'devextreme-angular';
import { DxDateBoxModule } from 'devextreme-angular';
import { DxChartModule } from 'devextreme-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataFormComponent } from './components/data-form/data-form.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { TemperaturesEffects } from './state/temperatures/temperature.effects';
import { temperaturesReducer } from '../app/state/temperatures/temperature.reducers';

@NgModule({
  declarations: [AppComponent, DataFormComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxFormModule,
    DxChartModule,
    DxDateBoxModule,
    HttpClientModule,
    StoreModule.forRoot({ temperatures: temperaturesReducer }),
    EffectsModule.forRoot([TemperaturesEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
