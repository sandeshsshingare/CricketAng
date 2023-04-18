import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthhomeComponent } from './authhome/authhome.component';
import { PlayerlistComponent } from './playerlist/playerlist.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: 'auth',
    canActivate: [AuthGuard],
    children: [
      {
        path: 'authhome',
        component: AuthhomeComponent,
      },
      {
        path: 'playerlist',
        component: PlayerlistComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
