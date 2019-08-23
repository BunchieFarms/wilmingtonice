import { NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

import { ContentRoutingModule } from './content/content-routing.module';

@NgModule({
  imports: [ContentRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(private router: Router) {
    this.router.errorHandler = (error: any) => {
      this.router.navigate(['']);
      console.log(error);
    };
  }
}
