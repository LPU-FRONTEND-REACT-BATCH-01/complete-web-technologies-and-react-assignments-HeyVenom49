let account = {
    balance : 0,
    transaction : []
}

let deposite = function(amount){
    if(amount>0){
        account.balance+=amount;
        console.log(`Total current balance: ${account.balance}`);
        account.transaction.push(`Deposited: ${amount}`);
    }else{
        console.log("Amount must be greater than 0");
    }
}

let withdraw = function(amount){
    if(account.balance>500){
        if(amount>0){
            if(amount<=account.balance){
                if(amount<=10000){
                    if((account.balance-amount)>=500){
                        account.balance-=amount;
                        console.log(`Withdrawal of ${amount} is successful`);
                        console.log(`Your current balance: ${account.balance}`);
                        account.transaction.push(`Withdrawn: ${amount}`);
                    }else{
                        console.log(`You can not withdraw money more than ${account.balance-500}`);
                    }
                }else{
                    console.log("Withdrawl amount should be less than or equal to 10000");
                }
            }else{
                console.log("Withdrawl amount must be smaller than current account. Check your current balance.");
            }
        }else{
            console.log("Amount must be greater than 0");
        }
    }else{
        console.log("To be eligible for withdrawl account balance must be greater than 500");
    }
}

let getBalance = function(){
    console.log(`Current balance: ${account.balance}`);
}

let getTransactions = function(){
    console.log("Your Transactions: ");
    // console.log(account.transaction);
    account.transaction.map((x)=>{
        console.log(x);
    });
}



// let dep1 = Number(prompt("Enter money to be deposited: "));
// let withd = Number(prompt("Enter money to be withdrawn: "));
// let dep2 = Number(prompt("Enter money to be deposited: "));

// deposite(dep1);
// withdraw(withd);
// deposite(dep2);
// getTransactions();

while(true){
    let choice = Number(prompt("Press 1 to deposite \n Press 2 to withdrwal \n Press 3 to check current balance \n Press 4 to check your transactions \n Press 5 to exit \n Enter your choice: "));
    if(choice==1){
        let dep = Number(prompt("Enter money to be deposited: "));
        deposite(dep);
    }else if(choice==2){
        let withd = Number(prompt("Enter money to be withdrawn: "));
        withdraw(withd);
    }else if(choice==3){
        getBalance();
    }else if(choice==4){
        getTransactions();
    }else{
        break;
    }
}