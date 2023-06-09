import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testhome',
  templateUrl: './testhome.component.html',
  styleUrls: ['./testhome.component.css']
})
export class TesthomeComponent implements OnInit{
  public welcomeMessage: string | null | undefined;

  ngOnInit(): void {
    this.welcomeMessage = localStorage.getItem("welcomeMessage");
  }
}
