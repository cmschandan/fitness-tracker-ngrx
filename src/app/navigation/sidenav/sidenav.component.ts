import { Component, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit{
  @Output() oncloseSide = new EventEmitter<void>;

  constructor(){

  }
  ngOnInit(){

  }
  onClose(){
    this.oncloseSide.emit();
  }

}

