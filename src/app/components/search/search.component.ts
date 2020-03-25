import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {

  artistas: any[] = [];
  loading: boolean;
  constructor(private spotify: SpotifyService) {
  }

  buscar(termino: string) {
    if (termino.trim().length > 0) {
      this.loading = true;
      this.spotify.getArtistas(termino).subscribe((data) => {
        console.log(data);
        this.loading = false;
        this.artistas = data;
      });
    }
  }

}
