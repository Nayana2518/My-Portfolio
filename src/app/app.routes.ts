import { Routes } from '@angular/router';
import { AboutComponent } from './features/about/about.component';
import { ProjectsComponent } from './features/projects/projects.component';
import { ContactComponent } from './features/contact/contact.component';
import { MainComponent } from './shared/layout/main/main.component';
import { HomeComponent } from './features/home/home.component';

export const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        children: [
            { path: '', component: HomeComponent },
            { path: 'about', component: AboutComponent },
            { path: 'projects', component: ProjectsComponent },
            { path: 'contact', component: ContactComponent }
        ]
    },
    { path: '**', redirectTo: '' }
];
