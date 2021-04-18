import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AvataarComponent } from './avatar/avatar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChatbotModule } from './chatbot/chatbot.module';
import { LearningModule } from './learning/learning.module';
import { SharedModule } from './shared/shared.module';
import { MaterialComponentsModule } from './material-components.module';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    AvataarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, 
    ChatbotModule, 
    LearningModule,
    SharedModule,
    MaterialComponentsModule,
    HttpClientModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
