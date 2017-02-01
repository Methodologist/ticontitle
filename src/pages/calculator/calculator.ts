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
            miscFee: ['', Validators.required],
            chsinglefam: [true, Validators.required],
            chcondo: [false, Validators.required],
            settleFee: ['', Validators.required],
            ownPolicy: ['', Validators.required],
            titSearch: ['', Validators.required],
            lendPolicy: ['', Validators.required],
            condoAssFee: ['', Validators.required],
            envEndsorse: ['', Validators.required],
            flForm9: ['', Validators.required],
            recording: ['', Validators.required],
            docStampMort: ['', Validators.required],
            intTaxMort: ['', Validators.required],
            docStampDeed: ['', Validators.required],
            surveyFee: ['', Validators.required],
            termiteFee: ['', Validators.required],
            buyTotal: ['', Validators.required],
            sellTotal: ['', Validators.required],
            commissionOwner: 'seller',
            miscFeeOwner: 'buyer',
            settleFeeOwner: 'buyer',
            ownPolicyOwner: 'buyer',
            titSearchOwner: 'buyer',
            lendPolicyOwner: 'buyer',
            condoAssFeeOwner: 'buyer',
            envEndsorseOwner: 'buyer',
            flForm9Owner: 'buyer',
            recordingOwner: 'buyer',
            docStampMortOwner: 'buyer',
            intTaxMortOwner: 'buyer',
            docStampDeedOwner: 'seller',
            surveyFeeOwner: 'buyer',
            termiteFeeOwner: 'buyer'
        });
  }
  
  submitForm(value: any):void{
    
    
    console.log('Reactive Form Data: ')
    console.log(Number(value.buyTotal));
  }
}
