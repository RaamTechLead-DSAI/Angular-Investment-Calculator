// Imports Angular core features and a pipe for currency formatting.
import { CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';

// Component definition for displaying investment result data.
@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})

// Input property to receive an array of yearly investment result data from a parent component.
export class InvestmentResultsComponent {
  @Input() results ?: {
    year: number;
      interest: number;
      valueEndOfYear: number;
      annualInvestment: number;
      totalInterest: number;
      totalAmountInvested: number;
  }[];

}
