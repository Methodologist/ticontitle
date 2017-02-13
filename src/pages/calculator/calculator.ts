import { Component, Inject } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'page-calculator',
  templateUrl: 'calculator.html',
  styles: ['.center { text-align:center; padding-bottom: 2px; }']
})

export class CalculatorPage {
    form: FormGroup;
    
    constructor(@Inject(FormBuilder) fb: FormBuilder) {

        this.form = fb.group({
            purPrice: [0, Validators.required],
            moAmount: [0, Validators.required],
            commper: [0, Validators.compose([Validators.required, Validators.maxLength(2)])],
            commission: [0, Validators.required],
            misccharge: [0, Validators.required],
            totMortFee: [0, Validators.required],
            chsinglefam: [true, Validators.required],
            chcondo: [false, Validators.required],
            settleFee: [350, Validators.required],
            ownPolicy: [0, Validators.required],
            titSearch: [50, Validators.required],
            lendPolicy: [250, Validators.required],
            condoAssFee: [0, Validators.required],
            envEndsorse: [25, Validators.required],
            flForm9: [0, Validators.required],
            recording: [0, Validators.required],
            docStampMort: [0, Validators.required],
            intTaxMort: [0, Validators.required],
            docStampDeed: [0, Validators.required],
            surveyFee: [0, Validators.required],
            termiteFee: [0, Validators.required],
            buyTotal: [0, Validators.required],
            sellTotal: [0, Validators.required],
            totalPolicy: 0,
            note: null,
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
    var x = 0;
    var y = 0;
    
    if (value.moAmount == "") {
        value.moAmount = 0;
    } else {
        value.moAMount = value.moAMount;
    }
    
    if (value.commper != "") {
        value.commper = value.commper;
        value.commission = value.purPrice * value.commper / 100;
    }
    
    // title insurance calculations
    if (value.purPrice < 100000) {
        value.ownPolicy = (value.purPrice / 1000) * 5.75;
    } else if (value.purPrice >= 100000 && value.purPrice < 1000000){
        x = value.purPrice - 100000;
        y = (x / 1000) * 5;
        value.ownPolicy = y + 575;
    } else if (value.purPrice >= 1000000 && value.purPrice < 5000000){
        x = value.purPrice - 1000000;
        y = (x / 1000) * 2.5;
        value.ownPolicy = y + 5075;
    } else if (value.purPrice >= 5000000 && value.purPrice < 10000000){
        x = value.purPrice - 5000000;
        y = (x / 1000) * 2.25;
        value.ownPolicy = y + 15075;
    } else {
        x = value.purPrice - 10000000;
        y = (x / 1000) * 2;
        value.ownPolicy = y + 26325;
    }
    
    value.docStampDeed = (value.purPrice / 1000) * 7;
    value.docStampMort = (value.moAmount / 1000) * 3.5;
    value.intTaxMort = (value.moAmount / 1000) * 2;
    
    //decide if there is need for lenders policy
    
    if (value.moAmount == 0) {
        value.lendPolicy = 0;
    } else {
        value.lendPolicy = 250;
        value.totalPolicy = value.ownPolicy + value.lendPolicy;
    }
    
    //fla form 9 setcion
    
    if (value.moAmount == 0) {
        value.flForm9 = 0;
    } else {
        value.flForm9 = value.totalPolicy * 0.10;
    }
    
    //end fla form 9 setion
    
    if (value.moAmount == 0) {
        value.recording = 27;
    } else {
        value.recording = 207;
    }
    
    if (value.moAmount == 0) {
        value.condoAssFee = 0;
        value.envEndsorse = 0;
    } else {
        if (value.chcondo == true) {
            value.chcondo = 25;
            value.condoAssFee = 0;
        } else {
            value.chcondo = 0;
            value.condoAssFee = 25;
            if (value.chsinglefam && value.moAmount > 0) {
                value.surveyFee = 450;
                value.termiteFee = 100;
            }
        }
        value.condoAssFee = 25;
    }
    
    value.settleFee = 350;
    
    if (value.commissionOwner == "buyer"){
        value.buyTotal += parseInt(value.commission);
    } else {
        value.sellTotal += parseInt(value.commission);
    }
    if (value.totMortFeeOwner == "buyer"){
        value.buyTotal += parseInt(value.totMortFee);
    } else {
        value.sellTotal += parseInt(value.totMortFee);
    }
    if (value.settleFeeOwner == "buyer"){
        value.buyTotal += parseInt(value.settleFee);
    } else {
        value.sellTotal += parseInt(value.settleFee);
    }
    if (value.ownPolicyOwner == "buyer"){
        value.buyTotal += parseInt(value.ownPolicy);
    } else {
        value.sellTotal += parseInt(value.ownPolicy);
    }
    if (value.titSearchOwner == "buyer"){
        value.buyTotal += parseInt(value.titSearch);
    } else {
        value.sellTotal += parseInt(value.titSearch);
    }
    if (value.lendPolicyOwner == "buyer"){
        value.buyTotal += parseInt(value.lendPolicy);
    } else {
        value.sellTotal += parseInt(value.lendPolicy);
    }
    if (value.condoAssFeeOwner == "buyer"){
        value.buyTotal += parseInt(value.condoAssFee);
    } else {
        value.sellTotal += parseInt(value.condoAssFee);
    }
    if (value.envEndsorseOwner == "buyer"){
        value.buyTotal += parseInt(value.envEndsorse);
    } else {
        value.sellTotal += parseInt(value.envEndsorse);
    }
    if (value.flForm9Owner == "buyer"){
        value.buyTotal += parseInt(value.flForm9);
    } else {
        value.sellTotal += parseInt(value.flForm9);
    }
    if (value.recordingOwner == "buyer"){
        value.buyTotal += parseInt(value.recording);
    } else {
        value.sellTotal += parseInt(value.recording);
    }
    if (value.docStampMortOwner == "buyer"){
        value.buyTotal += parseInt(value.docStampMort);
    } else {
        value.sellTotal += parseInt(value.docStampMort);
    }
    if (value.intTaxMortOwner == "buyer"){
        value.buyTotal += parseInt(value.intTaxMort);
    } else {
        value.sellTotal += parseInt(value.intTaxMort);
    }
    if (value.docStampDeedOwner == "buyer"){
        value.buyTotal += parseInt(value.docStampDeed);
    } else {
        value.sellTotal += parseInt(value.docStampDeed);
    }
    if (value.surveyFeeOwner == "buyer"){
        value.buyTotal += parseInt(value.surveyFee);
    } else {
        value.sellTotal += parseInt(value.surveyFee);
    }
    if (value.termiteFeeOwner == "buyer"){
        value.buyTotal += parseInt(value.termiteFee);
    } else {
        value.sellTotal += parseInt(value.termiteFee);
    }
    
    console.log('Reactive Form Data: ')
    console.log(Number(value.moAmount));
  }
}
