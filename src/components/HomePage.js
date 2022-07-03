import '../App.css';
import {useQuery} from '@apollo/client'
import { GET_EPISODES_BY_NAME} from '../gql/Query'
import { Link } from 'react-router-dom';



import { useEffect, useState } from 'react';
import { AppBar, Paper, Tab,Box, Tabs, ListItem ,ListItemText,CircularProgress, List} from '@mui/material';
import Footer from './Footer';
import Navbar from './Navbar';





function HomePage() {

const [value,setValue] = useState(0);

const [name,setName] = useState('');

const {loading,error,data} = useQuery(GET_EPISODES_BY_NAME,{
  variables:{name:name}
});
console.log('new data added');



useEffect(()=>{
  
  console.log('new master data');
  console.log('new master data');
  console.log('new master data');
  console.log('new master data');
  console.log('new master data fresh one');
  console.log('new master data fresh one');
  
   
  if(value === 0){
    setName('Rick');
  }else{
    setName("Morty");
  }
 
},[value])

console.log('new data added local');
console.log('new data added local');
console.log('new data added local');

console.log('new data added local');console.log('new data added local');

  return (
 <div className="homepage">
  <div>
    <Navbar/>
      </div>  
        <div>
           <div className='body_section'>
               <section>
             <h1 className='heading'>Rick and Morty's episodes</h1>
             <p className='header_text'>The web series is filled with thrilling adventure and comedy.</p>
             <p className='header_text'>It is full of entertainment.</p>
             <p className='header_text'>We can simply call it as a 'Masterpiece of creativity'</p>
                </section>    


        <AppBar  position="static" style={{marginTop:'50px'}}>
          <Paper square>
              <Tabs
              value={value}
              textColor="primary"
              indicatorColor="primary"
              onChange={(event, newValue) => {
              setValue(newValue);
               }}
              >

           <Tab label="Rick's Episodes" ></Tab>
           <Tab label="Morty's Episodes" ></Tab>
          </Tabs>
         </Paper>
        </AppBar>
      </div>
        <div >
     {
          loading ? ( <Box sx={{ display: 'flex',justifyContent:"center",alignItems:"center",paddingTop:'100px' }}>
          <CircularProgress  />
        </Box>

          ):error ? (
              <p>Error:{error}</p>
          )
          :(
            
     <div className='grid'  >
     
      {data.episodes.results.map((episode, index) => (
        <ListItem key={episode.id} value={value} index={index} >
          <div className='card' >
         <img  src="https://joeschmoe.io/api/v1/random" /><br/>
         <ListItemText style={{color:'white',textAlign:'center'}} primary={episode.episode} />         
         <Link  style={{textDecoration:'none'}}
         to={`/episode/${episode.id}`}><ListItemText  
         style={{color:'#a3412b',textAlign:'center'}} 
         primary={episode.name} /></Link>     
         </div>   
        </ListItem>
 ))}
      </div>
          )
      }
        
    </div>  
   </div>
   <div>
   <Footer/>
   </div>
  
   </div>
  );
}

export default HomePage;

console.log('new data added local to master');console.log('new data added local');
console.log('new data added local');
console.log('new data added local');



