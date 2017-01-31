import { Component, Inject } from '@angular/core';

import { NavController } from 'ionic-angular';
import { ReactiveFormsModule, AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'page-calculator',
  templateUrl: 'calculator.html'
})

export class CalculatorPage {
    form: FormGroup;
    
    constructor(@Inject(FormBuilder) fb: FormBuilder) {

        this.form = fb.group({
            purPrice: ['', Validators.required],
            moAmount: ['', Validators.required],
            commper: ['', Validators.required],
            commission: ['', Validators.required],
            misccharge: ['', Validators.required],
            miscfee: ['', Validators.required],
            chsinglefam: [true, Validators.required],
            chcondo: [false, Validators.required],
            settfee: ['', Validators.required],
            titleins: ['', Validators.required],
            tsearch: ['', Validators.required],
            lenpolicy: ['', Validators.required],
            condopud: ['', Validators.required],
            envend: ['', Validators.required],
            fform9: ['', Validators.required],
            recording: ['', Validators.required],
            stampmort: ['', Validators.required],
            inttax: ['', Validators.required],
            stampdeed: ['', Validators.required],
            surveyfee: ['', Validators.required],
            termitefee: ['', Validators.required],
            btotal: ['', Validators.required],
            stotal: ['', Validators.required],
            commissionOwner: ['Buyer', 'Seller']
        });
  }
  
  submitForm(value: any):void{
    value.total = Number(value.purPrice) + Number(value.moAmount);
    var totalpolicy = 0;
    var x = 0;
    var y = 0;

    if (value.moAmount == ""){
        value.moAmount = 0;
    } else {
    value.moAmount = value.moAmount;
    }
    
    if (value.commper != "") {
        value.commper = value.commper;
        value.commission = value.purPrice * value.commper / 100;
    }
    
    console.log('Reactive Form Data: ')
    console.log(Number(value.total));
  }
}
