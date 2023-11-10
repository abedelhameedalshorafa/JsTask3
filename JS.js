
//// part 1 ////

/*
1
Correct the syntax error 

 [ 1,7  9  45, ] => [1,7,9,45] 

 ["Str" "alex","moh"  => ["str","alex","moh"]

 'the','fox' 'over' lazy, 'dog',  ] => ['the','fox','over','lazy','dog']

*/


//// part 2 /////

/*
2
What the index of "Banana","Tomato"
var fruits=["Tomato","Banana","Watermelon"]

[1]=> Banana
[0]=> Tomato

*/


//// part 3 ////

// const favoriteFoods = ['Shawerma', 'Zingger', 'Kabsa', 'Burgers', 'Mlokhia'];
// const favoriteSports = ['Football', 'Table tennis', 'Basketball'];
// const favoriteMovies = ['The Equalizer', 'Inception', 'Mission Impossible', 'Top Gun'];


//// part 4 ////

// firstOfArray=(arr)=>{
//     return arr[0];
// }

// console.log(firstOfArray(["ahmad",2,3]));


//// part 5 ////

// lastOfArray=(arr)=>{
//     let lastElement=arr.length-1;
//     return arr[lastElement];

// }

// console.log(lastOfArray(["ahmad",2,3]));


//// part 6 ////

// var array = [0,5,7,9];
// array.shift();
// array.unshift(1,3,4,6,8);
// array.pop();
// array.pop();
// array.pop();
// array.push(9)
// array.push(10);

// console.log(array);

//// part 7 ////

// const array = [5, 9, -7, 3.5];

// const push=array.push(10);// the new length for array
// console.log(array);// array with new element 10
// console.log(push);

// const unshift=array.unshift(2,4,6);// the new length for array
// console.log(array);// array with new elements added
// console.log(unshift);

// const pop=array.pop(); // the deleted number
// console.log(array);//array without deleted elements 
// console.log(pop);


// const shift=array.shift();// the deleted number
// console.log(array);////array without deleted elements 
// console.log(shift);


//// part 8 ////

// middleOfArray=(array)=>{
//     let length=array.length;
//     let middleElemnts="";
//     if(length%2==0)
//     {
//         middleElemnts=`${array[length/2-1] } and ${array[length/2]} `;
//     }
//     else
//     {
//         middleElemnts=`${array[(length-1)/2]}`;
//     }

//     return middleElemnts;
// }

// console.log(middleOfArray([1,2,3,4,5]));


//// part 9 ////


// var animals = ['cat', 'ele', 'bird'];
// animals[0] = 'zebra';
// animals[1] = 'elephant';
// animals.pop();
// console.log(animals); 


// var nums = [1, 2, 3, 8, 9];
// nums[0] = 5;
// nums[1] = -22;
// nums[2] = 3.5;
// nums.pop();
// nums.pop();
// nums.push(44, 98, 44); 
// console.log(nums); 



//// part 10 ////

// indexOfArray=(array,number)=>{
//     return array[number];
// }

// console.log(indexOfArray([1,2,3,4,5],2));


//// part 11 ////

// arrayExceptLast=(array)=>{
//     array.pop();
//     return array;
// }

// console.log(arrayExceptLast([1,2,3,4,5,6]));


//// part 12 ////

// addToEnd=(array,number)=>{
//     array.push(number);
//     return array;
// }

// console.log(addToEnd([1,2,3,4,5],6));


//// part 13 ////

// sumArray=(array)=>{
//     let sum=array[0];
//     // for(let i =1 ;i<array.length;i++)
//     // {
//     //     sum+=array[i];
//     // }
//     // return sum;

//     //while loop
//     let i=1
//     while(i<array.length)
//     {
//         sum+=array[i];
//         i++;
//     }
//     return sum;
// }

// console.log(sumArray([1,2,3,4]));



//// part 14 ////

// minInArray=(array)=>{
//     let min=array[0];
//     // for(let i=1;i<array.length;i++)
//     // {
//     //     if(min>array[i])
//     //     {
//     //         min=array[i];
//     //     }
//     // }

    // while

//     let i=1;
//     while(i<array.length)
//     {
//         if(min>array[i])
//         {
//             min=array[i];
//         }
//         i++;
//     }
//     return min;
// }

// console.log(minInArray([1,2,3,4,5,0.5,-1]));


//// part 15 ////

// removeFromArray=(array,number)=>{
//     for(let i=0;i<array.length;i++)
//     {
//         if(array[i]===number){
//             array.splice(i,1);
//         }
//     }
    
//     // while
//     let i=0;
//     while(i<array.length){
//         if(array[i]===number){
//             array.splice(i,1);
//         }
            // i++;
//     }
//     return array;
// }

// console.log(removeFromArray([1,2,3,4,7,8,9],7));


//// part 16 ////

// oddArray=(array)=>{

//     for(let i=0;i<array.length;i++){
//         if(array[i]%2===0)
//         {
//             array.splice(i,1);
//         }
//     }

//     // while 
//     let i=0;
//     while(i<array.length){
//         if(array[i]%2===0)
//         {
//             array.splice(i,1);
//         }
            // i++;
//     }
//     return array;
// }

// console.log(oddArray([1,2,3,4,5]));


//// part 17 ////

// aveArray=(array)=>{
//     let sum=array[0];
//     let avg;
//     for(let i =1 ;i<array.length;i++)
//     {
//         sum+=array[i];
//     }

//     // while 
//     let i=1;
//     while(i<array.length)
//     {
//         sum+=array[i];
//         i++;   
//     }
//     avg=sum/array.length;
//     return avg;
// }

// console.log(aveArray([1,2,3,4,5,9]));


//// part 18 ////

// shorterInArray=(array)=>{
//     let short=array[0];
//     for(let i=0;i<array.length;i++)
//     {
//         if(short.length>array[i].length)
//         {
//             short=array[i];
//         }
//     }

//     //while
//     let i=0;
//     while(i<array.length){
//         if(short.length>array[i].length)
//         {
//             short=array[i];
//         }
//         i++;
//     }
//     return short;
// }

// console.log(shorterInArray(["abed","jo","hashem","ahmad"]));


//// part 19 ////

// repeatChar=(string,char)=>{
//     let repeat=0;
//     for(let i=0;i<string.length;i++)
//     {
//         if(string[i]===char)
//         {
//             repeat++;
//         }
//     }
//     // while
//     let i=0;
//     while(i<string.length)
//     {
//         if(string[i]===char)
//         {
//             repeat++;
//         }
//         i++;   
//     }
//     return repeat;
// }

// console.log(repeatChar("abedelhameed alshorafa","e"));


//// part 20 ////

// evenIndexOddLength=(strings)=>{
//     let newStrings=[];
//     for(let i=0;i<strings.length;i++)
//     {
//         if(i%2===0)
//         {
//             if(strings[i].length%2===1)
//             {
//                 newStrings.push(strings[i]);
//             }
//         }
//     }
//     //while
//     // let i=0;
//     // while(i<i<strings.length)
//     // {
//     //     if(i%2===0)
//     //     {
//     //         if(strings[i].length%2===1)
//     //         {
//     //             newStrings.push(strings[i]);
//     //         }
//     //     }
//     //     i++;
//     // }
//     return newStrings;
// }

// var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
// console.log(evenIndexOddLength(strings));


//// part 21 ////

// powerElementIndex=(array)=>{
//     let newArr=[];
//     for(let i=0;i<array.length;i++)
//     {
//         newArr.push(Math.pow(array[i],i));
//     }
//     //while

//     let i=0;
//     while(i<array.length)
//     {
//         for(let i=0;i<array.length;i++)
//         {
//             newArr.push(Math.pow(array[i],i));
//         }
//         i++;
//     }
//     return newArr;
// }

// console.log(powerElementIndex([44, 5, 4, 3, 2, 10]));


//// part 22 ////



// evenNumberEvenIndex=(array)=>{
//     let newArr=[];
//     for(let i=0;i<array.length;i++)
//     {
//         if(i%2===0)
//         {
//             if(array[i]%2===0)
//             {
//                 newArr.push(array[i]);
//             }
//         }
//     }
//     //while
//     // let i=0;
//     // while(i<i<array.length)
//     // {
//     //     if(i%2===0)
//     //     {
//     //         if(array[i].length%2===0)
//     //         {
//     //             newArr.push(array[i]);
//     //         }
//     //     }
//     //     i++;
//     // }

//     return newArr;
// }


// console.log(evenNumberEvenIndex([5,2,2,1,8,66,55,77,34,9,55,1]));