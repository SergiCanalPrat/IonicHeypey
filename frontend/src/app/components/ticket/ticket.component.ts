import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import { Ticket } from "../../models/ticket";
import { TicketService } from '../../services/ticket.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  ticketsForm: FormGroup;
  list: Ticket[];

  constructor(private ticketService: TicketService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.listTickets();
  }
  listTickets(){
    console.log("listado de las tickets")
    this.ticketService.getTickets()
      .subscribe(
        res => {
          console.log ("respuesta "+ res);
          this.list = res["tickets"];
        })
  }
}
