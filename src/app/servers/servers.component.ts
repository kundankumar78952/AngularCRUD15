import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  serversId: number = 10;
  serversStatus: string = ' in offline mode';

  serverCreated = false;
  serverName = '';
  allowedNewServer = false;
  servers = ['Testserver','Testserver2'];
  constructor() {
    setTimeout(() => {
      this.allowedNewServer = true;
    }, 2000);
    this.serversStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }
  getserversStatus() {
    return this.serversStatus;
  }

  ngOnInit() {}
  // onUpdateServerName(event:Event){
  //   this.serverName=(<HTMLInputElement>event.target).value;
  // }
  onCreateServer() {
    this.serverCreated = true;
    'Server was created! Name is ' + this.serverName;
    this.servers.push(this.serverName);
  }
  getColor(){
    return this.serversStatus ==='online'?'green':'red';
  }
}


