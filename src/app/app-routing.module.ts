import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Child1Component} from './child1/child1.component';
import {Child2Component} from './child2/child2.component';

export function prepareOk() {
  return {
    CHILD1: 'child1',
    CHILD2: 'child2',
  };
}

export function prepareFail() {
  const paths = {
    CHILD1: 'child1',
    CHILD2: 'child2',
  };
  return paths;
}

export const ROUTES = prepareOk();
// export const ROUTES = prepareFail();

export const routes: Routes = [
    {
      path: ROUTES.CHILD1,
      component: Child1Component
    },
    {
      path: ROUTES.CHILD2,
      component: Child2Component
    },
  ];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
