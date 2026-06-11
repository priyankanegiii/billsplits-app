import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {HistoryItem} from "../models/model.history";

@Injectable({
    providedIn :'root'
})

export class HistoryService{

    private historyarray: HistoryItem[] = [];

    
   addHistoryItem(item : HistoryItem) {
    
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