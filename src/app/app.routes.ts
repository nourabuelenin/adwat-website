import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { AboutComponent } from './features/about/about.component';
import { ServicesComponent } from './features/services/services.component';
import { ProjectsComponent } from './features/projects/projects.component';
import { ProjectDetailComponent } from './features/project-detail/project-detail.component';
import { ContactComponent } from './features/contact/contact.component';
import { FaqPageComponent } from './features/faq-page/faq-page.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home.component').then((m) => m.HomeComponent),
    title: 'Adwat Information Technology - Leading Saudi Software Development Company',
  },
  {
    path: 'about',
    loadComponent: () => import('./features/about/about.component').then((m) => m.AboutComponent),
    title: 'About Us - Adwat Information Technology',
  },
  {
    path: 'services',
    loadComponent: () =>
      import('./features/services/services.component').then((m) => m.ServicesComponent),
    title: 'Our Services - Adwat Information Technology',
  },
  {
    path: 'projects',
    loadComponent: () =>
      import('./features/projects/projects.component').then((m) => m.ProjectsComponent),
    title: 'Our Projects - Adwat Information Technology',
  },
  {
    path: 'projects/:id',
    loadComponent: () =>
      import('./features/project-detail/project-detail.component').then(
        (m) => m.ProjectDetailComponent,
      ),
    title: 'Project Details - Adwat Information Technology',
  },
  {
    path: 'faq',
    loadComponent: () =>
      import('./features/faq-page/faq-page.component').then((m) => m.FaqPageComponent),
    title: 'FAQ - Adwat Information Technology',
  },
  {
    path: 'news',
    loadComponent: () => import('./features/news/news.component').then((m) => m.NewsComponent),
    title: 'News - Adwat Information Technology',
  },
  {
    path: 'news/:slug',
    loadComponent: () =>
      import('./features/news-detail/news-detail.component').then((m) => m.NewsDetailComponent),
    title: 'Newsletter - Adwat Information Technology',
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./features/contact/contact.component').then((m) => m.ContactComponent),
    title: 'Contact Us - Adwat Information Technology',
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
