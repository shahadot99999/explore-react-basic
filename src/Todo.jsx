// export default function Todo({task}){
//     return(
//         <li>Task:{task}</li>
//     )
// }


//conditonal rendering option 1 :
// export default function Todo({task, isDone}){
//    if(isDone === true){
//     return <li>Finshed:{task}</li>
//    }
//    else{
//     return <li>Work one: {task}</li>
//    }
// }


// //conditonal rendering option 2 :
// export default function Todo({task, isDone}){
//     if(isDone === true){
//      return <li>Finshed:{task}</li>
//     }
//     return <li>Work one: {task}</li>
//  }

//conditonal rendering option 3 : ternary operator
// export default function Todo({task, isDone}){
//     return(
//         <li> {isDone ? 'Finished' : 'Work on'}: {task}</li>
//     )
   
//  }


 //conditonal rendering option 4 : &&
//  export default function Todo({task, isDone}){
//     return(
//         <li>{task} {isDone && ': Done'}</li>
//     )
// }

 
//conditonal rendering option 5 : ||
 export default function Todo({task, isDone}){
    return(
        <li>{task} {isDone || ': Do it'}</li>
    )
}