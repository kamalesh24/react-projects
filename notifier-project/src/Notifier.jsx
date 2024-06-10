import { useState } from "react";
import './App.css'

function Notifier() {
    const [cnt, setCnt] = useState(1)
    const [newMsg, setNewmsg] = useState({
        uname: "",
        msg: ""
    })
    const msgs = []

    const handleChange = (event) => {
        const {value, name} = event.target
        setNewmsg((prevVal) => {
            if(name === "uname"){
                return {
                    uname: value,
                    msg: prevVal.msg
                }
            } else {
                return {
                    uname: prevVal.uname,
                    msg: value
                }
            }
        })
    }

    const notify = (event) => {
        
        msgs.push(newMsg)
        console.log(msgs)

        setCnt(cnt+1);
        console.log(cnt);
        
        event.preventDefault()
    }

    return (
        <>
            <h1>Notifier APP</h1>
            <form>
                <label>Username : </label>
                <input 
                    name="uname" 
                    onChange={handleChange}
                    value={newMsg.uname} 
                /><br/>

                <label>Message : </label>
                <input 
                    name="msg"
                    onChange={handleChange}
                    value={newMsg.msg}
                /><br/>

                <button onClick={notify}>Notify</button>
            </form>
        </>
    )
}

export default Notifier