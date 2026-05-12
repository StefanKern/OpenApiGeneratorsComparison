import { Routes } from '@angular/router';
import { NgOpenApiGenComponent } from './pages/ng-openapi-gen.component';
import { OrvalComponent } from './pages/orval.component';
import { OpenApiGeneratorComponent } from './pages/openapi-generator.component';
import { NSwagComponent } from './pages/nswag.component';
import { OverviewComponent } from './pages/overview.component';
import { HeyApiComponent } from './pages/hey-api.component';

export const routes: Routes = [
  { path: '', redirectTo: '/overview', pathMatch: 'full' },
  { path: 'overview', component: OverviewComponent },
  { path: 'ng-openapi-gen', component: NgOpenApiGenComponent },
  { path: 'orval', component: OrvalComponent },
  { path: 'openapi-generator', component: OpenApiGeneratorComponent },
  { path: 'nswag', component: NSwagComponent },
  { path: 'hey-api', component: HeyApiComponent },
];
