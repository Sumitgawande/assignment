import '../App.css';
import { useQuery } from '@apollo/client'
import { GET_EPISODE_DETAILS } from '../gql/Query'
import { Link, useParams } from 'react-router-dom';
import Footer from './Footer';
import { Box } from '@mui/system';
import { CircularProgress } from '@mui/material';
import Navbar from './Navbar';

function EpisodeDetails(props) {


  const params = useParams();

  const id = params.id

  const { loading, error, data } = useQuery(GET_EPISODE_DETAILS, {
    variables: { id: id },
  });



  return (
    <div >
      <div>
        <Navbar />
      </div>


      {
        loading ? <Box sx={{ display: 'flex', justifyContent: "center", alignItems: "center", paddingTop: '100px' }}>
          <CircularProgress />
        </Box>
          : error ? (
            <p>Error:  {error}</p>
          ) : (
            <div>
              <h2 style={{ color: 'white', width: '80%', margin: '30px auto auto auto', textAlign: 'left' }}>All characters of episode: {data.episode.name}</h2>
              <h3 style={{ color: 'white', width: '80%', margin: '30px auto auto auto', textAlign: 'left' }}>On air: {data.episode.air_date}</h3>
              <div className='character_cards'>
                {
                  data.episode.characters.map((character, index) => {
                    return (
                      <div key={character.id} className='character_card'>
                        <Link style={{ textDecoration: 'none' }}
                          to={`/character/${character.id}`}>
                          <img src={character.image} alt='character' />
                          <p style={{ color: '#a3412b' }}>{character.name}</p>
                        </Link>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          )
      }

      <Footer />

    </div>
  );
}

export default EpisodeDetails;
