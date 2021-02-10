import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { AuthLibService, Login, Logout, UserState } from '@auth-lib';
import { User } from 'projects/auth-lib/src/lib/app-state/models/User';
import { SharedLibService } from 'projects/shared-lib/src/lib/shared-lib.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css']
})
export class ServiceListComponent implements OnInit {
  columns: any[] = [];
  data: any[] = [];
  // user = this.authService.user;
   user : User;
  @Select(UserState.CurrentUser) currentUser: Observable<User>;
  constructor(private dataService: SharedLibService, private store: Store
    ) { }

  ngOnInit(): void {
    console.log('ff', this.store.selectSnapshot<User>((state) => state.user.user).name) ;
    this.columns = [
    //  { field: 'nameEn', header: 'nameEn' },
      { field: 'nameAr', header: 'Service' },
      { field: 'status', header: 'Status'},
      { field: 'type', header: 'Type'}, 
      { field: 'category', header: 'Category' }
    ];
    this.dataService.getServices().subscribe(res => {
      this.data = res;
    });
  //   this.store.select(UserState.CurrentUser)
  //   .subscribe(res => this.user = res)
  //  ;
  }
  getCurrentUser(): string {
    return this.store.selectSnapshot<User>((state) => state.user.user).name;
  }
  logOut(){
      this.store.dispatch(new Logout());
  }
}