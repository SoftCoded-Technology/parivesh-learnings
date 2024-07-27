import { Box, Button, Grid, IconButton, Modal, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import { LoadingButton } from '@mui/lab'
import { CloudUpload, Delete , Send } from '@mui/icons-material'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import PracticeModal from './PracticeModal'
// import faEllipsisV from '@fortawesome/react-fontawesome'


const MUI = () => {

  const[IsLoading,setIsLoading]=useState(false)
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  if(IsLoading){
    setTimeout(() => {
      setIsLoading(false)
    }, 2000);
  }

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
      <Typography variant='h1' align='center' color='primary' sx={{
        padding: 5,
        width:'80%'
        // color: 'blue', 
        // bgcolor: 'grey',
        
      }}>
        Learning MUI
      </Typography>

      {/* <Stack alignItems={'center'} justifyContent={'center'} sx={{
          // bgcolor: 'red',
          border: '1px solid black',
          padding: 2,
          width:'90vw',
          height:"250px",
          borderRadius:"10px"
        }} >
        <Stack direction='row' alignItems={'center'} justifyContent={'center'} gap={2} >
          <Box 
          sx={{
            bgcolor: 'turquoise',
            border: '1px solid black',
            padding: 2,
            width:'100px',
            height:"100px",
            textAlign:'center',
            alignContent:'center',
            borderRadius:'10px'
          }}
          >
              box 1
          </Box>
          <Box 
          sx={{
            bgcolor: 'turquoise',
            border: '1px solid black',
            padding: 2,
            width:'100px',
            height:"100px",
            textAlign:'center',
            alignContent:'center',
            borderRadius:'10px'
          }}
          >
              box 2
          </Box>
          <Box 
          sx={{
            bgcolor: 'turquoise',
            border: '1px solid black',
            padding: 2,
            width:'100px',
            height:"100px",
            textAlign:'center',
            alignContent:'center',
            borderRadius:'10px'
          }}
          >
              box 3
          </Box>
          <Box 
          sx={{
            bgcolor: 'turquoise',
            border: '1px solid black',
            padding: 2,
            width:'100px',
            height:"100px",
            textAlign:'center',
            alignContent:'center',
            borderRadius:'10px'
          }}
          >
              box 4
          </Box>
          <Box 
          sx={{
            bgcolor: 'turquoise',
            border: '1px solid black',
            padding: 2,
            width:'100px',
            height:"100px",
            textAlign:'center',
            alignContent:'center',
            borderRadius:'10px'
          }}
          >
              box 5
          </Box>
          <Box 
          sx={{
            bgcolor: 'turquoise',
            border: '1px solid black',
            padding: 2,
            width:'100px',
            height:"100px",
            textAlign:'center',
            alignContent:'center',
            borderRadius:'10px'
          }}
          >
              box 6
          </Box>
        </Stack>
      </Stack> */}
      {/* <Button onClick={()=>setIsLoading(!IsLoading)} startIcon={<CloudUpload/>} variant='contained'>
        buttons
      </Button>
      
      <IconButton aria-label='delete' size='small'>
        <Delete fontSize='small' />
      </IconButton>
      {IsLoading ? <LoadingButton loading={IsLoading} variant='contained'>
        loading
      </LoadingButton>  : <Button onClick={()=>setIsLoading(!IsLoading)} variant='contained' color='secondary' endIcon={<Send/>}>send</Button>} */}
      
      {/* <FontAwesomeIcon icon={faEllipsisV} /> */}
      {/* <Grid gap={2} container mt={3} >
        <Grid item border={'1px solid red'} bgcolor={'gray'} color={'white'} xs={7}>
           item 1 
        </Grid>
        <Grid item border={'1px solid'} xs={4}>
          item 2
        </Grid> 
        <Grid item border={'1px solid'} xs={4}>
          item 2
        </Grid> 
        <Grid item border={'1px solid red'} bgcolor={'gray'} color={'white'} xs={6}>
           item 1 
        </Grid>
        <Grid item border={'1px solid red'} bgcolor={'gray'} color={'white'} xs={6}>
           item 1 
        </Grid>
        <Grid item border={'1px solid'} xs={4}>
          item 2
        </Grid> 
        <Grid item border={'1px solid'} xs={4}>
          item 2
        </Grid> 
        <Grid item border={'1px solid red'} bgcolor={'gray'} color={'white'} xs={7}>
           item 1 
        </Grid>
      </Grid>


      <Typography variant='h2'>
        another grid
      </Typography>

      <Grid gap={2} alignItems={'center'} justifyContent={'center'} container>
        <Grid border={'2px solid gray'} alignItems={'center'} justifyContent={'center'} item xs>
          1
        </Grid>
        <Grid border={'2px solid gray'} alignItems={'center'} justifyContent={'center'} item xs={6}>
          2
        </Grid>
        <Grid border={'2px solid gray'} alignItems={'center'} justifyContent={'center'} item xs>
          3
        </Grid>
      </Grid> */}

      {/* <div>

      <Button onClick={handleOpen} variant='outlined'>
        open modal
      </Button>
      <Modal open = {open} 
        aria-labelledby='modal-title'
        aria-describedby='modal-description'
        >
        <Box xs={style}>
          <Typography id='modal-title'>
            modal
          </Typography>
          <Typography id='modal-description'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Typography>
          <Button onClick={handleClose}>close</Button>
        </Box>
      </Modal>
        </div> */}
      <PracticeModal/>
    </>
  )
}

export default MUI
