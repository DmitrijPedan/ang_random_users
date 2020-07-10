import { Output, Component, OnInit, EventEmitter } from '@angular/core';
import { NgForm} from '@angular/forms';
import { LogService } from "../log.service";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(
    private logService: LogService
  ) { }

  isVisible: boolean=true;

  user: any= {
    name: {first: '', last: ''},
    picture: {thumbnail: '', large: ''}
  }

  firstName: string;
  lastName: string;
  photo: string;

  photosUrl =[
    {name: 'man', url: 'https://randomuser.me/api/portraits/men/71.jpg'},
    {name: 'women', url: 'https://randomuser.me/api/portraits/women/53.jpg'},
    {name: 'lego', url: 'https://randomuser.me/api/portraits/lego/6.jpg'}
  ]

  ngOnInit(): void {
  }

  @Output() switchModalVisible = new EventEmitter();
  @Output() addNewUser = new EventEmitter();

  submit(form: NgForm) {
    this.addNewUser.emit(form);
    this.logService.write({time: new Date().toString(), type: 'add', content: `add ${form.controls.firstName.value} ${form.controls.lastName.value}`})
  }
}
