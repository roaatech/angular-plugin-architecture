import { NgModule } from '@angular/core';
import { SharedLibComponent } from './shared-lib.component';
import { OtherComponent } from './other/other.component';
//primeng modules
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import {CardModule} from 'primeng/card';
import {ToolbarModule} from 'primeng/toolbar';
import {SidebarModule} from 'primeng/sidebar';
import {InputTextModule} from 'primeng/inputtext';
const libraryComponents=[
  TableModule,ButtonModule,DropdownModule,CardModule,ToolbarModule,SidebarModule,InputTextModule
]


@NgModule({
  declarations: [SharedLibComponent, OtherComponent],
  imports: [
    libraryComponents
  ],
  exports: [SharedLibComponent, OtherComponent,libraryComponents
  ]
})
export class SharedLibModule { }
