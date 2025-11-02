import { Box, Button, Dialog, DialogContent, DialogTitle, TextField } from '@mui/material'
import React, { useState } from 'react'
import usePhonebookStore from '../stores/usePhonebookStore';

const ContactForm = ({open, onClose}) => {

    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const { addContact } = usePhonebookStore();  

    const handleAddContact = () => {
        if(!name.trim() || !phoneNumber.trim()) return;
        addContact(name, phoneNumber);
        onClose();
    }

    const handleClose = () => {
        onClose();
    }

  return (
    <Dialog open={open} onClose={handleClose} maxWidth='md'>
        <DialogTitle>연락처 등록</DialogTitle>
        <DialogContent>
            <Box display="flex" flexDirection="column" alignItems="center" gap={2} sx={{minWidth:100, pt:2}}>
                <TextField fullWidth id="name" label="이름" variant="standard" value={name} onChange={(e)=>setName(e.target.value)}/>
                <TextField fullWidth id="phone-number" label="전화번호" variant="standard" value={phoneNumber} onChange={(e)=> setPhoneNumber(e.target.value)}/>
                <Button size='large' onClick={handleAddContact}>추가</Button> 
            </Box>
        </DialogContent>
    </Dialog>
    
  )
}

export default ContactForm
