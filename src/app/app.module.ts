import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChangeDetectionComponent } from './demos/change-detection/change-detection.component';
import { ComponentCommunicationComponent } from './demos/component-communication/component-communication.component';
import { DirectiveComponent } from './demos/directive/directive.component';
import { FormComponent } from './demos/form/form.component';
import { LifeCycleComponent } from './demos/life-cycle/life-cycle.component';
import { ObservableComponent } from './demos/observable/observable.component';
import { PipeComponent } from './demos/pipe/pipe.component';
import { ViewEncapsulationComponent } from './demos/view-encapsulation/view-encapsulation.component';
import { LcPersonComponent } from './demos/life-cycle/lc-person/lc-person.component';
import { CcParentComponent } from './demos/component-communication/cc-parent/cc-parent.component';
import { CcChildComponent } from './demos/component-communication/cc-child/cc-child.component';
import { CcAnotherchildComponent } from './demos/component-communication/cc-anotherchild/cc-anotherchild.component';
import { ClassComponent } from './class/class.component';
import { NgDirectiveComponent } from './demos/directive/ng-directive/ng-directive.component';
import { CustomDirectiveComponent } from './demos/directive/custom-directive/custom-directive.component';
import { ListitemComponent } from './demos/directive/ng-directive/listitem/listitem.component';
import { MyhiddenDirective } from './demos/directive/custom-directive/myhidden.directive';
import { MyifDirective } from './demos/directive/custom-directive/myif.directive';
import { CurrencyExchangePipe } from './demos/pipe/currency-exchange.pipe';
import { MyfilterPipe } from './demos/pipe/myfilter.pipe';
import { TemplateDrivenComponent } from './demos/form/template-driven/template-driven.component';
import { ReactiveComponent } from './demos/form/reactive/reactive.component';
import { ReactiveFbComponent } from './demos/form/reactive-fb/reactive-fb.component';
import { CdPersonComponent } from './demos/change-detection/cd-person/cd-person.component';
import { PersonDetailComponent } from './demos/change-detection/cd-person/person-detail/person-detail.component';
import { ViewencapsulationEmulatedComponent } from './demos/view-encapsulation/viewencapsulation-emulated/viewencapsulation-emulated.component';
import { ViewencapsulationNativeComponent } from './demos/view-encapsulation/viewencapsulation-native/viewencapsulation-native.component';
import { ViewencapsulationNoneComponent } from './demos/view-encapsulation/viewencapsulation-none/viewencapsulation-none.component';
import { FormObservableComponent } from './demos/observable/form-observable/form-observable.component';
import { HttpObservableComponent } from './demos/observable/http-observable/http-observable.component';
import { HttpModule } from '@angular/http';
import {PersonService } from './demos/shared/person.service';



@NgModule({
  declarations: [
    AppComponent,
    ChangeDetectionComponent,
    ComponentCommunicationComponent,
    DirectiveComponent,
    FormComponent,
    LifeCycleComponent,
    ObservableComponent,
    PipeComponent,
    ViewEncapsulationComponent,
    LcPersonComponent,
    CcParentComponent,
    CcChildComponent,
    CcAnotherchildComponent,
    ClassComponent,
    NgDirectiveComponent,
    CustomDirectiveComponent,
    ListitemComponent,
    MyhiddenDirective,
    MyifDirective,
    CurrencyExchangePipe,
    MyfilterPipe,
    TemplateDrivenComponent,
    ReactiveComponent,
    ReactiveFbComponent,
    CdPersonComponent,
    PersonDetailComponent,
    ViewencapsulationEmulatedComponent,
    ViewencapsulationNativeComponent,
    ViewencapsulationNoneComponent,
    FormObservableComponent,
    HttpObservableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule

],
  providers: [PersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
