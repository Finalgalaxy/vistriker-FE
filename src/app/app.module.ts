import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';

import { HttpModule } from '@angular/http';
import { CONST_ROUTING, RouterModule } from './app.routing';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import  {
    MdButtonModule, MdSidenavModule, MdCardModule, MdMenuModule,
    MdToolbarModule, MdIconModule, MdGridListModule
  } from '@angular/material';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MaterialSidenavComponent } from './material-sidenav/material-sidenav.component';
import { MaterialToolbarComponent } from './material-toolbar/material-toolbar.component';
import { MaterialContentGridComponent } from './material-content-grid/material-content-grid.component';
import { VideoViewComponent } from './video-view/video-view.component';
import { SafePipe } from './safe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    MaterialSidenavComponent,
    MaterialToolbarComponent,
    MaterialContentGridComponent,
    VideoViewComponent,
    SafePipe
  ],
  imports: [
    HttpModule,
    BrowserModule,
    BrowserAnimationsModule,
    MdButtonModule, MdSidenavModule, MdCardModule, MdMenuModule,
    MdToolbarModule, MdIconModule, MdGridListModule,
    CONST_ROUTING,
    RouterModule
  ],
  providers: [
    {
      provide: APP_BASE_HREF,
      useValue: environment.frontend_base_url
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
