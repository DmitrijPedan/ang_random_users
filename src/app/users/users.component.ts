import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";
import { User } from "../user";
import { LogService } from "../log.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {

  users: User[]=[];
  selectedUsers: User[]=[];
  modalVisible: boolean=false;

  constructor(
    private dataService: DataService,
    private logService: LogService
  ) { }

  ngOnInit(): void {
    this.getUsers(10);
  }

  getUsers(results: number): void {
    this.dataService.getUsers(results).subscribe(data => this.users = data.results);
    this.selectedUsers = [];
  }

  handleSelect(id: string): any {
    const select = this.users.find(user => user.login.uuid === id);
    this.selectedUsers.push(select);
    this.logService.write({time: new Date().toString(), type: 'uc', content: `open ${select.name.first} ${select.name.last}`});
  }

  deleteSelectedUser(id: string): void {
    const select = this.selectedUsers.find(user => user.login.uuid === id);
    this.removeUserFromArray(this.selectedUsers, id);
    this.logService.write({time: new Date().toString(), type: 'uc', content: `close ${select.name.first} ${select.name.last}`});
  }

  deleteUser(id: string): void {
    const select = this.users.find(user => user.login.uuid === id);
    this.removeUserFromArray(this.users, id);
    this.removeUserFromArray(this.selectedUsers, id);
    this.logService.write({time: new Date().toString(), type: 'rm', content: `remove ${select.name.first} ${select.name.last}`});
  }

  switchModalVisible(): void {
    this.modalVisible = !this.modalVisible;
  }

  removeUserFromArray(array: User[], id: string): void {
    array.map((user, i) => user.login.uuid === id ? array.splice(i, 1) : null)
  }

  addNewUser(form: any): void {
    const newUser = {
      name: {
        first: form.controls.firstName.value,
        last: form.controls.lastName.value,
      },
      picture: {
        thumbnail: form.controls.photo.value,
        large: form.controls.photo.value,
      },
      login: {
        uuid: new Date().toString(),
      }
    }
    this.users.push(newUser);
  }
}
