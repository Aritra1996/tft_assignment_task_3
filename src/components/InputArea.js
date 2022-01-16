import './InputArea.css'

export function InputArea(props) {
    return(
        <div className="InputArea">
            <input value={props.value} readOnly/>
        </div>
    )
}