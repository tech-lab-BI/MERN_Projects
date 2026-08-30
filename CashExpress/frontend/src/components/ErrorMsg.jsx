function ErrorMsg({msg}){
    return <>
        <ul>
            {msg.map((item, index) => (<li key={index}>{item}</li>))}
        </ul>
    </>
}

export default ErrorMsg;