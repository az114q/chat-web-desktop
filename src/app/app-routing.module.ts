import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeopleListComponent } from './components/people-list/people-list.component';
import { MapComponent } from './components/map/map.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'map',
        component: MapComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'list',
        component: PeopleListComponent
    },
    {

        path: 'profile',
        component: ProfileComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
