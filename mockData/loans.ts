type Loan = {
    userId: string;
    amount: number;
    requestDate: Date;
    paymentStartDate: Date;
    loanDuration: number;
    status: string;
    id: string;
}

const loans: Loan[] = [];

export const createNewLoan = (loan: Loan) => {
    loans.push(loan);
}

export const getLoanByUserId = (userId: string) => {
    return loans.find(loan => loan.userId === userId);
}

export const getAllLoans = () => {
    return loans;
}