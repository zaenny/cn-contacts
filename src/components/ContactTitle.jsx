import { Button, Icon, IconButton } from '@mui/material'
import React, { useState } from 'react'
import AddIcCallRoundedIcon from '@mui/icons-material/AddIcCallRounded';
import ContactForm from './ContactForm';

const ContactTitle = () => {
    
    const [open, setOpen] = useState(false);

    const handleOpenModal = () => {
        setOpen(true);    
    }

    const handleCloseModal = () => {
        setOpen(false);
    }

  return (
    <>

        <div className='contact-title'>
            <h1>주소록</h1>
            <IconButton onClick={handleOpenModal}>
                <AddIcCallRoundedIcon fontSize="large"/>
            </IconButton>    
        </div>

        <ContactForm 
            open={open}
            onClose={handleCloseModal}/>
    </>
  )
}

export default ContactTitle
