interface Iprops {
    text:string
    buttonStyle?: string;
}
export default function Button(props:Iprops){
    return(
    <div>
        <button className={`bg-orange-400 rounded w-28 h-8 ${props.buttonStyle}`}>{props.text}</button>
    </div>
    )
}


