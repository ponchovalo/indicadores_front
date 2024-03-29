import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToastModule } from 'primeng/toast';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ToastModule,
    CardModule,
    InputTextModule,
    ButtonModule
  ],
  exports: [
    ToastModule,
    MessageModule,
    MessagesModule,
    CardModule,
    InputTextModule,
    ButtonModule
  ]
})
export class PrimengModule { }
