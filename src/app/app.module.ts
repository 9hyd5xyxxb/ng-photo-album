import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { ApiModule, Configuration, ConfigurationParameters } from 'api/api';
import { environment } from './../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


export function apiConfigFactory(): Configuration {
  const params: ConfigurationParameters = {
    basePath: environment.apiUrl,
  };

  return new Configuration(params);
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ApiModule.forRoot(apiConfigFactory),
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
