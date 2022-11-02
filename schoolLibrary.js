function schoolLibrary (inputArray){
let shelfElement = inputArray.shift();
let shelfArray = shelfElement.split(`&`);

let shelfArrayLength = shelfArray.length;
let inputArrayLength = inputArray.length;

for (let i = 0 ; i<inputArrayLength ; i++){
    let command = inputArray[i];
    let commandArray = command.split(` | `);
    let isPresent = false;

    if (commandArray[0] === "Done"){
        console.log(shelfArray.join(', '));
        break;
    }else{
        switch (commandArray[0]) {
            case "Add Book":
                isPresent = false;
                for (let j = 0; j < shelfArrayLength; j++){
                    if (commandArray[1]===shelfArray[j]){
                        isPresent = true;
                        break;
                    }
                }
                if (!isPresent){
                    shelfArray.unshift(commandArray[1]);
                }
                break;
            case "Take Book":
                for (let j = 0; j < shelfArrayLength; j++){
                    if (commandArray[1]===shelfArray[j]){
                        shelfArray.splice(j,1);
                        break;
                    }
                }
                break;
            case "Swap Books":
                let isPresent1 = false;
                let isPresent2 = false;
                let bookOneIndex = 0;
                let bookTwoIndex = 0;
                for (let j = 0; j < shelfArrayLength; j++){
                    if (commandArray[1]===shelfArray[j]){
                        isPresent1 = true;
                        bookOneIndex = j;
                        
                    }
                    if (commandArray[2]===shelfArray[j]){
                        isPresent2 = true;
                        bookTwoIndex = j;
                    }
                }
                if (isPresent1 && isPresent2){
                    let temp = shelfArray[bookOneIndex];
                    shelfArray[bookOneIndex] = shelfArray[bookTwoIndex];
                    shelfArray[bookTwoIndex] = temp;
                }
                break;
            case "Insert Book":
                isPresent = false;
                for (let j = 0; j < shelfArrayLength; j++){
                    if (commandArray[1]===shelfArray[j]){
                        isPresent = true;
                        break;
                    }
                }
                if (!isPresent){
                    shelfArray.push(commandArray[1]);
                }
                break;
            case "Check Book":
                let isValid = true;
                if (commandArray[1] < 0 || commandArray[1] >= inputArrayLength){
                    isValid = false;
                }
                if (isValid){
                    console.log(shelfArray[commandArray[1]]);
                }
                break;    
        }
    }
}



}
schoolLibrary(["Don Quixote&The Great Gatsby&Moby Dick",
"Add Book | Ulysses",
"Take Book | The Great Gatsby",
"Swap Books | Ulysses | Moby Dick",
"Check Book | 2",
"Insert Book | Alice's Adventures in Wonderland",
"Done"]);