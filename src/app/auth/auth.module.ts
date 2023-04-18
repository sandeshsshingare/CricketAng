import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { PlayerlistComponent } from './playerlist/playerlist.component';
import { AuthhomeComponent } from './authhome/authhome.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSortModule } from '@angular/material/sort';
 import { CdkTableModule } from '@angular/cdk/table';
 import { DataSource } from '@angular/cdk/table';
@NgModule({
  declarations: [ProfileComponent, PlayerlistComponent, AuthhomeComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatFormFieldModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    MatSortModule,
    CdkTableModule,
   
  ],
})
export class AuthModule {}
