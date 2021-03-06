import React, { useState } from 'react'
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';


function CreateArea (props) {
  const [note, setNote] = useState({
    title: '',
    content: ''
  })
  function handleChange (event) {

    const { name, value } = event.target
    setNote(prevNote => {
      return { ...prevNote, [name]: value }
    })
  }
  function handleClick (event) {
    props.onAdd(note)
    setNote({
      title: '',
      content: ''
    })
    event.preventDefault()
  }
  function expand(){
    setExpanded(true);
  }
  const[isExpanded,setExpanded]=useState(false);
  return (
    <div>
      <form className='create-note'>
      {isExpanded?<input
          name='title'
          value={note.title}
          placeholder='Title'
          onChange={handleChange}
        />:null}
        
        <textarea
        onClick={expand}
          name='content'
          value={note.content}
          placeholder='Take a note...'
          rows={isExpanded?3:1}
          onChange={handleChange}
        />
        <Zoom in={isExpanded}>
        <Fab onClick={handleClick}><AddIcon/></Fab>
        </Zoom>
      </form>
    </div>
  )
}

export default CreateArea
