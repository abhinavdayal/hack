import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  @Input() type: string = "text";
  @Input() botsent: boolean = false;
  @Input() date: number = Date.now();

  constructor() { }

  ngOnInit(): void {
  }

}
