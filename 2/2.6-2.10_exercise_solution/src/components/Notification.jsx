import React from "react"

const Notification = ({ notification }) => {
    if (notification.message === null) {
      return null
    }
  
    let style;
  
    if (notification.type === 'success'){
        style = {
            color: 'green',
            background: 'lightgrey',
            fontStyle: 'italic',
            fontSize: 20,
            borderStyle: 'solid',
            borderRadius: 5,
            padding: 10,
            marginBottom: 10,
        }
    }
  
    if (notification.type === 'error'){
        style = {
            color: 'red',
            background: 'lightgrey',
            fontStyle: 'italic',
            fontSize: 20,
            borderStyle: 'solid',
            borderRadius: 5,
            padding: 10,
            marginBottom: 10,
        }
    }
  
    return (
      <div style={style}>
        {notification.message}
      </div>
    )
  };


export default Notification;
