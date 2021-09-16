let input = prompt('what is in your bucket list?');
const todos = ['Bunjee Jump','Camp at the Red Canyon','Hand shake with Barack Obama'];
while ( input !== 'quit' && input!== 'q'){
    if (input =='list'){
        console.log('*****')
        for( let i =0; i < todos.length; i++){
            console.log(`${i}: ${todos[i]}`);
        }
        console.log('*****')
    }
    else if( input === 'new'){
        const  newTodo = prompt('what is the thing to do on the list?');
        todos.push(newTodo);
        console.log(`${newTodo} added to the list`)
    }
    else if (input === 'delete'){
        const index = parseInt(prompt('Ok, enter an index to delete:'));
        if (!Number.isNaN(index)){
        const deleted = todos.splice(index,1);
        console.log(`${deleted[0]} has been deleted`);
    }
            else {console.log('Unknown index')
        }
    }
    input = prompt('what is in your bucket list?')

}
console.log('QUIT THE APP!')