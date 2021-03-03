import React from 'react'

const Message = (props) => {
    return (
        <div>
            <p className={`message-componet ${props.messageStyle}`}>
                {props.children}
            </p>
        </div>
    )
}

export default Message
