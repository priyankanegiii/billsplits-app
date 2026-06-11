import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {HistoryItem} from "../history/history.component.interface";

@Injectable({
    providedIn :'root'
})

export class HistoryService{

    
   private  historyarray: HistoryItem[] = [{
    billAmount: NaN,
    people : NaN,
    tipPercentage: NaN,
    perPersonShare: NaN,
    totalAmount: NaN
   }];

    
   addHistoryItem(item : HistoryItem) {
    if(this.historyarray.length ==1 && isNaN(this.historyarray[0].billAmount)){
        this.clearHistory();
    }
    
    this.historyarray.push(item);

    console.log(this.historyarray);
   }
   
   getHistory(): HistoryItem[] {
    return this.historyarray;
   }

   clearHistory() {
    this.historyarray = [];
   }

  

   
}