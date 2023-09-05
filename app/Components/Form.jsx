import React, { useState } from "react";


function Form(props){
    const [note , setNote] = useState({
        title : "",
        content : ""
        })
    
    function handleClange(event){
        let name = event.target.name
        let value = event.target.value
         setNote(prevNote=>{
            return {
                ...prevNote ,
                [name]:value
            }
        })
        
    }
    
    function handleSubmit(event){
        setNote({
            title : "",
            content : ""
            })
        event.preventDefault();
    }

    return(
        <>
        <div className="form">
            <h2>ADD TASK</h2>
            <form onSubmit={handleSubmit}>
                <input onChange={handleClange} type="text" name = "title"  placeholder="Title" value ={note.title} />
                <textarea onChange={handleClange} name="content" placeholder="Take a note.."  value = {note.content}></textarea>
                <button type= "submit"onClick={() => {
                    props.addNote(note)
                }}>ADD</button>
            </form>
        </div>
       

       
        </>

    )
}



export default Form;