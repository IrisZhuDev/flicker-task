import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatInputModule, MatIconModule, MatToolbarModule, MatCardModule, MatSidenavModule, MatListModule
 } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import 'hammerjs';

import { AppComponent } from './app.component';
import { PhotoPipe } from './searchPhoto.pipe';
import { OrderPhotosPipe } from './orderPhotos.pipe';


@NgModule({
    declarations: [
        AppComponent,
        PhotoPipe,
        OrderPhotosPipe
    ],
    imports: [
        HttpClientModule,
        BrowserModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatInputModule,
        MatIconModule,
        MatToolbarModule,
        MatCardModule,
        MatListModule,
        MatSidenavModule,
        FlexLayoutModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent],
    entryComponents: [AppComponent]

})
export class AppModule { }

