import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
    new Quote(1, 'Nelson Mandela', 'There is no passion to be found playing small - in settling for a life that is less than the one you are capable of living.', 'alex', new Date(2021, 5, 10)),
    new Quote(2, 'Joaquin', 'When we are good, nobody remembers us. When we are bad, nobody forgets us.', 'Chan', new Date(1950, 3, 23)),
    new Quote(4, 'Elchapo', 'Never regret! If it was something good, it was incredible. If it was something bad, it was an experience.', 'Good Reads', new Date(2016, 1,17)),
    new Quote(3, 'Che Guevara', '“Every day People straighten up the hair, why not the heart?', 'Andres', new Date(2019, 2,13)),
  ];

  showDescription=false;

  addNewQuote(quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }

  toggleQuotes(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  deleteQuote(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(`Do you want to delete this Quote? ${this.quotes[index].name}`)//alert

      if (toDelete) { this.quotes.splice(index, 1) }//removes quote
    }
  }
  
  completeQuote(isComplete, index){
    if (isComplete) {
      this.quotes.splice(index,1);
    }
  }

  // toggleQuote() {
  //   this.showDescription = !this.showDescription;//show or hide content
  // }

  
 

  constructor() { }

  ngOnInit() {
  }

}
