import { TrackHandler, Client } from 'spotify-sdk';

const client = Client.instance;

client.settings = {
  clientId: '9e729f9d6b0941dc9c2a707fdb4a9479',
  secretId: 'b387b915845e44e98d493fd6bdf372f1',
  scopes: [
    'user-follow-modify user-follow-read user-library-read user-top-read'
  ],
  redirect_uri: 'http://localhost:3000'
};

export default client;
export { TrackHandler };
