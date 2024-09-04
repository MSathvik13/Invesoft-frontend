import { Injectable } from '@angular/core';
import { Stock } from '../models/stock.model';

@Injectable({
  providedIn: 'root',
})
export class StockService {
  private stocks: Stock[] = [];

  getStocks(): Stock[] {
    return this.stocks;
  }

  addStock(stock: Stock) {
    this.stocks.push({ ...stock, id: this.stocks.length + 1 });
  }

  deleteStock(id: number) {
    this.stocks = this.stocks.filter((s) => s.id != id);
  }

  constructor() {}
}
