import {gql} from '@apollo/client'




export const GET_EPISODES_BY_NAME  = gql`
query RickEpisodes($name:String!){
  episodes(filter: {name:$name}) {
    info {
      count
    }
    results {
      id
      episode
      name
      characters {
        name
      }
    }
  }
  }
`;




export const GET_EPISODE_DETAILS = gql`

  query GetEpisodeDetails($id: ID!) {
    episode(id: $id) {
      name
    air_date
    characters {
      id
      name
      image
    }
    }
  }

`;

export const GET_CHARACTER_DETAILS = gql`

query GetCharacterDetails($characterId: ID!) {
  character(id: $characterId) {
    name
    gender
    species
    status
    image
    location {
      name
    }
  }
}

`;


export const GET_ALL_EPISODES = gql`  
query GetAllEpisodes($ids: [ID!]!, ) {
  episodesByIds(ids: $ids) {
    id
    name 
    air_date
    episode
  }
}



`;
