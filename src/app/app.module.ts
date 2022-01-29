import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { PokeapiService } from './services/pokeapi.service'

import { AppComponent } from './app.component'
import { ListComponent } from './views/list/list.component'

@NgModule({
  declarations: [AppComponent, ListComponent],
  imports: [BrowserModule, FormsModule],

  providers: [PokeapiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
