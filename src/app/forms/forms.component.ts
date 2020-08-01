import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {User} from '../User';
import {FormService} from '../form.service'



@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  constructor(public service:FormService) { }
   public form = new User('','','');
   public errormessage="";
   public success="";
  ngOnInit(): void {
  }
  onsubmit(user)
  {
    this.service.getcustomers(this.form).subscribe(data=>this.success=data,y=>this.errormessage=y.statusText);
      user.form.reset();
  }

}
