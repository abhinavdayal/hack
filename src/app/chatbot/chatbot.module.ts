import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BotComponent } from './bot/bot.component';
import { MaterialComponentsModule } from '../material-components.module';
import { MessageComponent } from './message/message.component';



@NgModule({
  declarations: [
    BotComponent,
    MessageComponent
  ],
  imports: [
    CommonModule, MaterialComponentsModule
  ],
  exports: [
    BotComponent
  ]
})
export class ChatbotModule { }
