function addToZero(array){
    for(let i = 0; i < array.length; i++ ) {                    
        for(let j = 0; j < array.length; j++) {                 
            if (i + j !== 0) {                                  
                if (array[i] + array[j] === 0) {
                    console.log(`${array[i]} true`)

                }
            } 
        }
    }
}

addToZero([1,2,3,4,-4])

// run time: O(n^2)

const uniqueChar = (Str) => {
    for(let i = 0; i < Str.length; i ++) {
        for(let j = i + 1; j < Str.length; j++) {
            if(Str[j] === Str[i]) {
                return false;
        }
    }
}
return true;
}

console.log(uniqueChar(`Monday`));
console.log(uniqueChar(`Moonday`));
console.log(uniqueChar('Bob'));

// run time O(n^2)

function pangram(str){
    let alphArr = [
        'a','b','c','d','e','f','g','h','i','j','k','l','m',
        'n','o','p','q','r','s','t','u','v','w','x','y','z'
        ]
    let strArr = str.split('')
    console.log(strArr)
    for(let i = 0; i < strArr.length; i++){
        for(let j = 0; j < alphArr; j++){
            if(strArr[i] !== alphArr[j]){
                strArr.toString()
                return `"${strArr}." is not a pangram....`
            }
        }
    }
}


console.log(pangram("the quick brown fox jumps over the lazy dog"))
console.log(pangram("i like cats, but not mice"))


