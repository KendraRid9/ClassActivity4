import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  messageForm: FormGroup;
  submitted = false;
  success = false;

  constructor(private formBuilder: FormBuilder) { 
      this.messageForm = this.formBuilder.group({
        name: ['', Validators.required], // '' = default name (in this case it's empty)
        message: ['', Validators.required]

      })
    }

    onSubmit() {
      this.submitted = true;

      if(this.messageForm.invalid) {
        return;
      }
      
      // else
      this.success = true;

    }

  ngOnInit() {
  }

}
