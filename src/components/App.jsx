import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import Note from './Note'
import CreateArea from './CreateArea'

function App () {
  const [notes, setNotes] = useState([])
  function createNote (note) {
    setNotes(prevNote => {
      return [...prevNote, note]
    })
 
  }
  function deleteNode (id) {
    setNotes(prevNotes => {
      return prevNotes.filter((nodeItem, index) => {
        return index !== id;
      })
    })
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={createNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            onDelete={deleteNode}
            title={noteItem.title}
            content={noteItem.content}
          />
        )
      })}
      <Footer />
    </div>
  )
}

export default App
