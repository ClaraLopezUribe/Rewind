//Controller function: Get string from page

function getValue() {

    document.getElementById("alert").classList.add("invisible");
        
    let yourString = document.getElementById("yourString").value;

    let revString = reverseString(yourString);

    displayReversedString(revString);
}

//Logic function: Reverse string

function reverseString(yourString){
//declare that the string entered by the user (yourString) is an array

//Why is this let revString = [] instead of let yourString = []???

    let revString = [];

//reverse the string entered by user (yourString) using a for loop:
    //use the length parameter to determine what the last position of yourString 
        //last position of the array will be .length -1
    //decrement to index=0 by using index--
    //the reversed string (revString) is built by adding to itself the calculated index of each iteration of the for loop

    for (let index = yourString.length - 1; index >= 0; index--) {
       revString += yourString[index]; 
        
    }

//return the value back to the controller function
    return revString;
    

}

//View function: Display results on screen

function displayReversedString (revString) {

    //write to the page using template literal with tick sign (prefered over concatenation)
    document.getElementById("result").innerHTML = `Your string reversed is: ${revString}`
    //show the alert box
    document.getElementById("alert").classList.remove("invisible");


}

//Display alert message

