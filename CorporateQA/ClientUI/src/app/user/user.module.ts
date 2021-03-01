import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MomentModule } from 'ngx-moment';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxEditorModule } from 'ngx-editor';

import {UserComponent,HomeComponent,CategoryComponent,UserDetailsComponent,UsersListComponent,AnswersListComponent,QuestionsListComponent} from './index'
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [HomeComponent,
    UserComponent, 
    CategoryComponent, 
    UsersListComponent, 
    UserDetailsComponent, 
    AnswersListComponent, 
    QuestionsListComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    MomentModule.forRoot({
      relativeTimeThresholdOptions: {
        'm': 59
      }
    }),
    NgxEditorModule
  ],
  exports:[
    HomeComponent,
    CategoryComponent,
    UsersListComponent,
    UserDetailsComponent,
    AnswersListComponent,
    QuestionsListComponent
  ]
})
export class UserModule { }
