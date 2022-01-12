
export default props=>{
console.log('props.children',props.children)
    if(props.teste){
        return props.children
    }else{
        return false
    }
}