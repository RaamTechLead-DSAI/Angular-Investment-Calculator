// Imports necessary Angular core features and types for component creation and data binding.
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import type { InvestmentInput } from '../investment-input.model';

// Defines metadata for the UserInputComponent including selector, template, and style information.
@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})

// Event emitter to send investment input data to the parent component when submitted.
export class UserInputComponent {
  @Output() calculate = new EventEmitter <InvestmentInput> ();
  enteredInitialInvestment = '0';
  enteredAnnualInvestment = '0';
  enteredExpectedReturn ='5';
  enteredDuration = '10';

// Local state to hold user input values as strings.
onSubmit() {
  this.calculate.emit({
      initialInvestment: +this.enteredInitialInvestment,
      duration: +this.enteredDuration,
      expectedReturn: +this.enteredExpectedReturn,
      annualInvestment: +this.enteredAnnualInvestment
    });
  }
}
