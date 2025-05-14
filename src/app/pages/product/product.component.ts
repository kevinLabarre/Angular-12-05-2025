import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { PokeService } from '../../services/poke.service';
import { RespApiPoke } from '../../components/interfaces/respApiPoke';
import { PokeResult } from '../../components/interfaces/pokeResult';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-product',
  imports: [RouterOutlet],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  id: number = 0;
  slug: string = "";

  pokemons: PokeResult[] = [];

  respPoke?: RespApiPoke

  constructor(private route: ActivatedRoute, private service: PokeService) {
    this.id = this.route.snapshot.params["id"];
    this.slug = this.route.snapshot.params["slug"];

    // this.route.snapshot.params est un objet qui contient tous les params de ma route
    console.log(this.route.snapshot.params);

    this.service.getPokemons().subscribe({
      next: (data) => {
        // this.pokemons = data.results
        this.respPoke = data
        console.log(this.pokemons)
      },
      error: (e) => { console.error(e.message) },
      complete: () => { console.log('requete terminée !!') }
    })

    this.loadPokemon()

  }

  async loadPokemon() {
    try {
      const data = await firstValueFrom(this.service.getPokemons());
      this.pokemons = data.results
    } catch (e: any) {
      console.error(e.message)
    }
    finally {
      console.log('requete terminée !!')
    }
  }

}
