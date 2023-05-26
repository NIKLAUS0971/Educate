
import * as React from 'react';
import {useContext} from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import '../Style/Style.css'
import { CustomContext } from '../Context/Context';

export default function PaginationRounded({setCurrentPage, numberOfPages}) {
  const{nextPage}=useContext(CustomContext)
    const handleChange =(page, p)=>{
        setCurrentPage(page)
        // window.scroll(0,0)
    }
  return (
    <Stack spacing={2}>
      <Pagination
      sx={{
        "Button.MuiPaginationItem-rounded.Mui-selected":{
            background:'#7F5AF0',
            color:'#ffff',
            border:'none'
        }
       
      }}
      onChange={(e)=>handleChange(e.target.textContent)} count={numberOfPages} variant="outlined" shape="rounded" color='primary'/>
    </Stack>
  );
}