export default function TabButton({onSelect, children, isSelect}){
    return(
        <button className={isSelect? "active" : undefined} onClick={onSelect}>{children}</button>
    )

}