import { Button, Grid } from '@mui/material'
import './App.css'
import ContactForm from './components/ContactForm'
import ContactList from './components/ContactList'
import ContactTitle from './components/ContactTitle'
import SearchBar from './components/SearchBar'

function App() {

  return (
    <div className='contact'>
      <ContactTitle />
      <SearchBar />
      <ContactForm/>
      <ContactList/>
    </div>
  )
}

export default App
