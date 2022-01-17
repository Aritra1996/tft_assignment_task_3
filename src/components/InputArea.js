import './InputArea.css'

export function InputArea(props) {
    let value = props.value
    if(props.value==='') {
        value = 0
    }
    return(
        <div className="InputArea">
            <input value={value} readOnly/>
        </div>
    )
}