"use client"

import React, { useState } from "react";
import Header from "./Components/Header"; 
import Form from "./Components/Form";
import Note from "./Components/Note";

function Page(){

  const [noteArr , setNoteArr] = useState([])

  function addNote(newnote){
   setNoteArr(prevNoteArr => {
      return [...prevNoteArr , newnote]
    })
  }
  function deleteNote(id){
    setNoteArr(prevNoteArr =>{
      return prevNoteArr.filter((item ,index)=>{
        return index !== id;
      })
    })
  }
  return (
    <>
      <Header />
      <Form addNote = {addNote} />
      {
        noteArr.map((item ,index)=>{
          return (<Note delete = {deleteNote}
                       id = {index}  
                       key = {index} 
                       title = {item.title} 
                       content = {item.content}/>)
        })
      }
    </>
    
  )
}

export default Page;