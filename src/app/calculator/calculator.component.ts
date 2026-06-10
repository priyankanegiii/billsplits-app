import { Component } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {FormGroup , FormControl , Validators } from '@angular/forms';
import { HistoryService } from '../service/history.service';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss'
})
export class CalculatorComponent {

   infoForm = new FormGroup({
    totalBill : new FormControl(
      '0',
    [
      Validators.required,
      Validators.min(0),
      

    ]),
    numberOfPeople : new FormControl(
      '1',
      [
        Validators.required,
        Validators.min(1)
      ]
    ),
    tipPercentage : new FormControl(
      '0',
      [
        Validators.required,
        Validators.min(0),
        Validators.max(100)
      ]
    )

  });
  clicked : boolean = false;
  summary : string = '';
  tipAmount : number = 0;
  totalAmount : number = 0;
  eachPersonPays : number = 0;
  

  constructor(private historyService: HistoryService) {}

  ngOnInit(){
     this.infoForm.valueChanges.subscribe(value => {
      // console.log(value);
      const totalBill = Number(value.totalBill ?? 0);
      const numberOfPeople = Number(value.numberOfPeople ?? 1);
      const tipPercentage = Number(value.tipPercentage ?? 0);

      this.tipAmount = (totalBill * tipPercentage) / 100;
      this.totalAmount = totalBill + this.tipAmount;
      this.eachPersonPays = this.totalAmount / numberOfPeople;



     
      
      
    
      
      });
}

 get BillControl(){
  return this.infoForm.get('totalBill');
}
   
get PeopleControl(){
  return this.infoForm.get('numberOfPeople');
}

get TipControl(){
  return this.infoForm.get('tipPercentage');
}

copyBill(){
       this.clicked =true;
       this.summary  =`
      your bill detail is as follows :

      Total Amount : ${this.totalAmount}
      Total Tip  : ${this.tipAmount}
      Each Person Pays : ${this.eachPersonPays}

   `
    navigator.clipboard.writeText(this.summary);
    setTimeout(() => {
    this.clicked = false;
  }, 3000);
}

addToHistory(){
  this.historyService.addHistoryItem({
  billAmount : Number(this.infoForm.value.totalBill ?? 0),
  people : Number(this.infoForm.value.numberOfPeople ?? 1),
  tipPercentage : Number(this.infoForm.value.tipPercentage ?? 0),
  perPersonShare : this.eachPersonPays,
  totalAmount : this.totalAmount
  });
}

getData(){
    return this.historyService.getHistory();
}

clearData(){
  this.historyService.clearHistory();
}

}
