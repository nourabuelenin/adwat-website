import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { AboutComponent } from './features/about/about.component';
import { ServicesComponent } from './features/services/services.component';
import { ProjectsComponent } from './features/projects/projects.component';
import { ContactComponent } from './features/contact/contact.component';
import { FaqPageComponent } from './features/faq-page/faq-page.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Adwat Information Technology - Leading Saudi Software Development Company'
  },
  {
    path: 'about',
    component: AboutComponent,
    title: 'About Us - Adwat Information Technology'
  },
  {
    path: 'services',
    component: ServicesComponent,
    title: 'Our Services - Adwat Information Technology'
  },
  {
    path: 'projects',
    component: ProjectsComponent,
    title: 'Our Projects - Adwat Information Technology'
  },
  {
    path: 'faq',
    component: FaqPageComponent,
    title: 'FAQ - Adwat Information Technology'
  },
  {
    path: 'contact',
    component: ContactComponent,
    title: 'Contact Us - Adwat Information Technology'
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
