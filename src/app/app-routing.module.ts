import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JoinComponent } from './join/join.component';
import { HomeComponent } from './home/home.component';
import { AccountComponent} from './account/account.component';

const routes: Routes = [
    {
        path: 'join',
        component: JoinComponent,
    },
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'account',
        component: AccountComponent,
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }
