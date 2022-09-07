
// push -> adds the element at the end of tan array, it modifies the array
// --------------------------------------------------------------------------------------------
// pop -> removes the last element of an array, it modifies the array
// --------------------------------------------------------------------------------------------
// shift -> removes the first element of an array, it modifies the array
// --------------------------------------------------------------------------------------------
// unshift -> adds the element to the first of an array and rest all are gone one step back,
           // it modifies the array eg. all are standing in the que to take train ticket 
           // someone comes in the front and asks for first class ticket 
           // and all go one step back and he comes in the first
// --------------------------------------------------------------------------------------------
// sort -> it is a higher order function, it modifies the original array, you write it like
        // x.sort((a,b) => a-b) for ascending a-b, and for decending b-a
// --------------------------------------------------------------------------------------------
// slice (with single number)-> It dosent modifies the array, 
                              // arr = [1,2,3,4,5];
                              // x = arr.slice(3)
                              
                              //( 3 is how many numbers should i want to cut from the beggning and it is not the index number , slice is somewhat similar to shift in shift it only removes the first element but in slice we can define how mnay elements should be removed from front and it displays the remaining numbers not the sliced numbers )
                              
                              // console.log(x) ----> [4,5]

// slice (with double number) -> It dosent modifies the array
                                // arr = ["richard", "rocky", "tflow", "rocky", "ishan"];
                                
                                // x = arr.slice(1,3); // here starting index value 1 and ending index value will not print so u should take one number higher than that and it will only return the particular array from _ to _ which you have mentioned
                                // console.log(x) -> ["rocky", "tflow"]
// --------------------------------------------------------------------------------------------
// splice -> //It modifies the array
              //Removes the element and adds the new element in place of it 
              // 1) It takes 3 inputs first one is indexof the number to start splice
              // 2) the second number is how many elements it should remove it is not the index number but the count of numbers it should remove
              // 3) the third is what element you wanted to add instead of that 

              // arr = ["richard", "rocky", "tflow", "rocky", "ishan"];
              // arr.splice(1,3,"Three hackers")
              // console.log(arr) -> ['richard', 'three hackers', 'ishan']
// -----------------------------------------------------------------------------------
