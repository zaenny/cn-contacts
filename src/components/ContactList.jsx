import React from 'react'
import usePhonebookStore from '../stores/usePhonebookStore'
import { Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const ContactList = () => {

    const { phoneBook, searchTerm } = usePhonebookStore();
    
    const filterContacts = searchTerm.trim() === '' ? phoneBook : phoneBook.filter((contact) => {
        const search = searchTerm.toLowerCase().trim();
        return(
            contact.name.toLowerCase().includes(search) ||
            contact.phoneNumber.includes(search)
        );
    })

    return (
        <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <List>
            {filterContacts.length === 0 ? (
                <ListItem disablePadding>
                    <ListItemText primary={"검색결과가 없습니다"} />
                </ListItem>
            ) : (
                filterContacts.map((item) => (
                <ListItem disablePadding>
                    <ListItemIcon>
                        <AccountCircleIcon />
                    </ListItemIcon>
                    <ListItemText primary={item.name} secondary={item.phoneNumber} />
                </ListItem>
            )))}
            </List>
        </Box>
    )

}

export default ContactList
