var expenses=[1000,40000,12000,2000,29000]
for(let amount of expenses){
    if(amount<15000){
        console.log(amount);
    }
}


// add 3000 to feb  (updating)
expenses[2]+=3000;
console.log(expenses);

// inserting an element to end of the array

expenses.push(30000)
console.log(expenses);

// remove an item from end of the position
code .

expenses.pop()
console.log(expenses);