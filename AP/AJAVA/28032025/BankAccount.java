public class BankAccount
{
    private double balance;
    public BankAccount()
    { balance = 0; }
    public BankAccount(double acctBalance)
    { balance = acctBalance; }
    public void deposit(double amount)
    { balance += amount; }
    public void withdraw(double amount)
    { balance -= amount; }
    public double getBalance()
    { return balance; }

    public static void main(String[] args)
    {
        CheckingAccount acc = new CheckingAccount(100);
        acc.withdraw(80);
        System.out.println(acc.getBalance());
    }
}

public class CheckingAccount extends BankAccount
{
    private static final double FEE = 2.0;
    private static final double MIN_BALANCE = 50.0;
    public CheckingAccount(double acctBalance)
    { 
        // super(acctBalance);

        // super();
        // deposit(acctBalance);

        this.deposit(acctBalance);  
    }
    
    /** FEE of $2 deducted if withdrawal leaves balance less
    * than MIN_BALANCE. Allows for negative balance. */
    @Override
    public void withdraw(double amount)
    { 
        super.withdraw(amount);
        if (getBalance() < MIN_BALANCE)
            super.withdraw(FEE);
    }
}