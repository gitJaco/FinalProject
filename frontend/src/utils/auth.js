import credentials from './credentials';

const spotify = credentials();

export async function authorization() {
const response = await fetch('https://accounts.spotify.com/api/token', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Authorization': 'Basic ' + btoa(spotify.clientId + ':' + spotify.clientSecret)
  },
  body: 'grant_type=client_credentials'
});

const data = await response.json();

console.log(data);

return await data;
}

export async function artistId(token, artist) {
 const response = await fetch('https://api.spotify.com/v1/search?q=' + artist + '&type=artist', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + token
  }
 })

 const data = await response.json();

 return await data.artists.items[0].id
}

export async function getAlbums(token, id) {
  const response = await fetch('https://api.spotify.com/v1/artists/' + id + '/albums' + '?include_groups=album&market=MX&limit=50', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + token
  }
})
 const data = await response.json();
 return await data.items
}