// Interface defining the structure for investment input parameters used in financial calculations.
export interface InvestmentInput {
    initialInvestment: number,
    duration: number,
    expectedReturn: number,
    annualInvestment: number
}
