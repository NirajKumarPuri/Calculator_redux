export const getItem=(paylod)=>{
    return(
        {
            type:'GET_ITEM',
            paylod:paylod
        }
    )
}
export const solveItem=(item)=>{
    return({
        type:'SOLVE_ITEM',
        Item:item
    })
}
export const deleteItem=(item)=>{
    return({
        type:'DELETE_ITEM',
         Item:item
    })
}