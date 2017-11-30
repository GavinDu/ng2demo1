import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChangeDetectionComponent } from './demos/change-detection/change-detection.component';

import { ComponentCommunicationComponent } from './demos/component-communication/component-communication.component';
import { DirectiveComponent } from './demos/directive/directive.component';
import { FormComponent } from './demos/form/form.component';
import { LifeCycleComponent } from './demos/life-cycle/life-cycle.component';
import { ObservableComponent } from './demos/observable/observable.component';
import { PipeComponent } from './demos/pipe/pipe.component';
import { ViewEncapsulationComponent } from './demos/view-encapsulation/view-encapsulation.component';


const routes: Routes = [
  {
    path: 'lc',
    component: LifeCycleComponent
  },
  {
    path: 'cd',
    component: ChangeDetectionComponent
  },
  {
    path: 've',
    component: ViewEncapsulationComponent
  },
  {
    path: 'f',
    component: FormComponent
  },
  {
    path: 'd',
    component: DirectiveComponent
  },
  {
    path: 'p',
    component: PipeComponent
  },
  {
    path: 'cc',
    component: ComponentCommunicationComponent,
  },
  {
    path: 'o',
    component: ObservableComponent
  },
  {
    path: '',
    redirectTo: 'lc',
    pathMatch: 'full'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
