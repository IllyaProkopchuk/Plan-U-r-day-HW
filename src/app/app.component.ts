import { Component } from '@angular/core';
import { settings } from 'cluster';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HW2';
  taskModule: string;
  check: boolean;
  saveIndex: number;
  editTask: string;
  users: Array<any> = [
    // {
    //   task: 'HTML',
    //   check: true
    // },
    // {
    //   task: 'Clean my room',
    //   check: false
    // },
    // {
    //   task: 'CSS',
    //   check: true
    // },
    // {
    //   task: 'do HW',
    //   check: false
    // }
  ];

  public addUser(): void {
    if (this.taskModule == '' || this.taskModule == ' ' || this.taskModule == null) {
      alert('U must enter some Value');
    }
    else {
      let newUser = new Users(this.taskModule, this.check = true);
      this.users.push(newUser);
      this.taskModule = '';
    }
  };
  public deleteUser(index: number): void {
    this.users.splice(index, 1);
  }
  public editUser(index: number): void {
    this.saveIndex = index;
    this.editTask = this.users[index].task;
    document.querySelector('.box').classList.remove('none');
  }
  public saveEdit(): void {
    this.users[this.saveIndex].task = this.editTask;
    document.querySelector('.box').classList.add('none');
  }
}

interface IUser{
  task: string;
  check: boolean;
}

class Users implements IUser {
  constructor(
    public task: string,
    public check: boolean
  ){}
};