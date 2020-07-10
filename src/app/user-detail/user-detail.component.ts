import { Output, Input, Component,  EventEmitter } from '@angular/core';
import { User } from "../user";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent {

  constructor() { }

    @Input() selectedUser: User;

    @Output() deleteSelectedUser = new EventEmitter()

    close(id: string) {
      this.deleteSelectedUser.emit(id);
    }
}
