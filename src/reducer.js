let initialstate={
    todolist:''
}
export const todoreducer=(state=initialstate,action)=>{
    switch(action.type){
        case 'GET_ITEM':
            return{
                todolist:state.todolist+action.paylod
            }
        case 'SOLVE_ITEM':
            return{
                todolist:eval(action.Item)
            }
            case 'DELETE_ITEM':
                let length=action.Item.length
                return{
                    todolist:action.Item.slice(0,length-1)
                }
        
        default: return state
    }

}