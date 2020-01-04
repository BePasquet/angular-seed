import { NgModule } from '@angular/core';
import { LayoutComponent } from './components/layout/layout.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LayoutRoutingModule } from './layout-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [LayoutComponent],
  imports: [SharedModule, FlexLayoutModule, LayoutRoutingModule],
  exports: [LayoutComponent]
})
export class LayoutModule {}
