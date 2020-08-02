import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {User} from '../User';
import {FormService} from '../form.service'
import {Router} from '@angular/router'
import { relative } from 'path';
import {ActivatedRoute} from '@angular/router'


@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  constructor(public service:FormService,private rout:Router,private Active:ActivatedRoute) { }
   public form = new User('','','');
   public errormessage="";
   public success="";
  ngOnInit(): void {
  }
  onsubmit(user)
  {
    this.service.getcustomers(this.form).subscribe(data=>this.success=data,y=>this.errormessage=y.statusText);
      user.form.reset();
      this.route();
  }
  route()
  {
    this.rout.navigate(['../list'],{relativeTo:this.Active})
  }

}
