import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { from } from 'rxjs';
import { CockpitComponent } from './cockpit/cockpit.component';
import { GameControllerComponent } from './game-controller/game-controller.component';
import { EvenCellComponent } from './game-controller/even-cell.component';
import { OddCellComponent } from './game-controller/odd-cell..component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    CockpitComponent,
    GameControllerComponent,
    EvenCellComponent,
    OddCellComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
