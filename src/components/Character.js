import '../App.css';
import {useQuery} from '@apollo/client'
import {GET_CHARACTER_DETAILS} from '../gql/Query'
import { useParams } from 'react-router-dom';
import { Box, CircularProgress ,label} from '@mui/material';
import Navbar from './Navbar';
import Footer from './Footer';

function CharacterDetails(props) {

  
  const params = useParams();
  
  
  const id = params.id

  const { loading, error, data } = useQuery(GET_CHARACTER_DETAILS, {
    variables: {characterId:id },
  });

  

  return (
    <div className='characterComponent'>
      <div className='row_header'>
        <Navbar/>
      </div>
      <div style={{width:'90%',margin:"auto"}} className='row_body'>

      
          <h2 style={{color:'white',textAlign:'left',width:'100%',margin:"auto",padding:'30px'}}>Details of character</h2>
     {
         loading ?  <Box sx={{ display: 'flex',justifyContent:"center",alignItems:"center",paddingTop:'100px' }}>
         <CircularProgress  />
       </Box>
         :error ?(
<p>Error:  {error}</p>
         ): (
             <div className='character_details'>
               <section  className='character_image'>
               <img src={data.character.image} alt='character' />
               </section>
                 <section className='character_info' >
                   <Box component="span" sx={{display:'flex'}} style={{color:"white",alignItems:'left'}}>
                     Name:  {data.character.name}
                   </Box><br/>
                   <Box component="span" sx={{display:'flex'}} style={{color:"white",alignItems:'left'}}>
                     Gender:  {data.character.gender}
                   </Box><br/>
                   <Box component="span" sx={{display:'flex'}} style={{color:"white",alignItems:'left'}}>
                     Species:  {data.character.species}
                   </Box><br/>
                   <Box component="span" sx={{display:'flex'}} style={{color:"white",alignItems:'left'}}>
                     Status:  {data.character.status}
                   </Box><br/>
                   <Box component="span" sx={{display:'flex'}} style={{color:"white",alignItems:'left'}}>
                     Location:  {data.character.location.name}
                   </Box>        
                  </section>               
             </div>
         )
     }
        
      
        </div>
        <div className='row_footer'>
        <Footer/>
        </div>   
    </div>
  );
}

export default CharacterDetails;

