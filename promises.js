
function sum(a, b){
    return new Promise(function (resolve, reject){
        if(typeof a === 'number' && typeof b === 'number'){
            resolve(a+b);
        }else{
            reject('Can\'t add non-numeric values!');
        }
    });
}

function add(a, b){
    sum(a, b).then(function(num){
        console.info("Sum of numbers: ", num);
    }, function(err){
        console.error("Unable to add values", err);
    })
}

add(2,5);
add('str', 5);