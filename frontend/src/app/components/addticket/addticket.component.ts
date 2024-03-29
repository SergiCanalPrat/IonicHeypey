import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import { Ticket } from '../../models/ticket';
import { TicketService } from '../../services/ticket.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-addticket',
  templateUrl: './addticket.component.html',
  styleUrls: ['./addticket.component.css']
})
export class AddticketComponent implements OnInit {

  ticketsForm: FormGroup;

  constructor(private ticketService: TicketService, private router: Router, private formBuilder: FormBuilder) {

    this.ticketsForm = this.formBuilder.group({
      name: new FormControl(),
      cif: new FormControl(),
      foto: new FormControl(),
      expedicion: new FormControl(),
      products: new FormControl()
    })
   }

  ngOnInit() {
  }
  addTickets(){
    console.log(this.ticketsForm);
    let ticket = new Ticket(this.ticketsForm.value._id, this.ticketsForm.value.name, this.ticketsForm.value.cif, this.ticketsForm.value.foto, this.ticketsForm.value.expedicion, this.ticketsForm.value.products)
    
    this.ticketService.saveTickets(ticket)
      .subscribe(
        res => {
          console.log ('respuesta '+ res);
          this.router.navigateByUrl('/api/tickets')
        })  
  }
}
