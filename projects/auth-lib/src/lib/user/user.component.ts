import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'demo-user',
  templateUrl: './user.component.html',
 //styleUrls: ['./user.component.css'],
 styles: [
   ' p { font-weight: bold ; color: blue}',
   'button {background-color: grey ; color: white}',
   '.notLogedin {color:red}'],
})
export class UserComponent implements OnInit {
  // tslint:disable-next-line: no-output-rename
  @Output('onLogout') onLogout = new EventEmitter<any>();
  @Input() userName: string;
  constructor() { }

  ngOnInit(): void {
  }
  onLogoutClick(event){
    this.onLogout.emit(event);
  }

}
