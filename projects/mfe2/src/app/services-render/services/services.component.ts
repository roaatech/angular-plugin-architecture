import { Component, OnInit } from '@angular/core';
import { AuthLibService, Logout, User } from '@auth-lib';
import { Store } from '@ngxs/store';
import { SharedLibService } from 'projects/shared-lib/src/lib/shared-lib.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  columns: any[] = [];
  data: any[] = [];
  constructor(
    private dataService: SharedLibService, private store: Store
    ) { }

  ngOnInit(): void {
    this.columns = [
        { field: 'nameAr', header: 'Service' },
        { field: 'status', header: 'Status'},
        { field: 'type', header: 'Type'}, 
        { field: 'category', header: 'Category' }
      ];
    this.dataService.getRenderServices().subscribe(res => {
      this.data = res;
    });
  }
  getCurrentUser(): string {
    return this.store.selectSnapshot<User>((state) => state.user.user).name;
  }
  logOut(){
      this.store.dispatch(new Logout());
  }

}
