// export default function Todd({task}){
//     return(
//         <li>Task:{task}</li>
//     )
// }


//conditonal rendering option 1 :
// export default function Todd({task, isDone}){
//    if(isDone === true){
//     return <li>Finshed:{task}</li>
//    }
//    else{
//     return <li>Work one: {task}</li>
//    }
// }


//conditonal rendering option 2 :
export default function Todd({task, isDone}){
    if(isDone === true){
     return <li>Finshed:{task}</li>
    }
    return <li>Work one: {task}</li>
 }