import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SignaturePadModule } from 'angular2-signaturepad';
import { AppVersion } from '@ionic-native/app-version/ngx';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { IonicStorageModule } from '@ionic/storage';
import { Camera } from '@ionic-native/camera/ngx';
import { HttpClientModule } from '@angular/common/http';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { File } from '@ionic-native/File/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    SignaturePadModule,
    IonicStorageModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
  ],
  providers: [
    Camera,
    File,
    WebView,
    FilePath,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    AppVersion,
    ScreenOrientation,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
