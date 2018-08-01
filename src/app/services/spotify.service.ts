import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Spotify service listo');
  }

  getNewReleases() {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAaZc1cBIcSqdIisQbNYI1SJ2TBWwFEJy_2JFu4QMPNoJPhSRD0FvZjz9oY7icfXYLaSjuVPF6tqDebIrk'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers });
  }
}
