import { AccountCircle } from '@mui/icons-material'
import { Box, IconButton, Input, InputAdornment, InputBase, Paper, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import React from 'react'
import usePhonebookStore from '../stores/usePhonebookStore';

const SearchBar = () => {

  const {searchTerm, setSearchTerm} = usePhonebookStore();

  return (

    <Box sx={{ display: 'flex', alignItems: 'flex-end', padding: '10px'}}>
        <SearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField fullWidth label="검색" variant="standard" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
    </Box>
  )
}

export default SearchBar
