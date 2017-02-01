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
            purPrice: [null, Validators.required],
            moAmount: [null, Validators.required],
            commper: [null, Validators.compose([Validators.required, Validators.maxLength(2)])],
            commission: [null, Validators.required],
            misccharge: [null, Validators.required],
            totMortFee: [null, Validators.required],
            chsinglefam: [true, Validators.required],
            chcondo: [false, Validators.required],
            settleFee: [null, Validators.required],
            ownPolicy: [null, Validators.required],
            titSearch: [null, Validators.required],
            lendPolicy: [null, Validators.required],
            condoAssFee: [null, Validators.required],
            envEndsorse: [null, Validators.required],
            flForm9: [null, Validators.required],
            recording: [null, Validators.required],
            docStampMort: [null, Validators.required],
            intTaxMort: [null, Validators.required],
            docStampDeed: [null, Validators.required],
            surveyFee: [null, Validators.required],
            termiteFee: [null, Validators.required],
            buyTotal: [null, Validators.required],
            sellTotal: [null, Validators.required],
            commissionOwner: 'seller',
            totMortFeeOwner: 'buyer',
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
