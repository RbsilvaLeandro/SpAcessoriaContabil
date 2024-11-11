import { NgModule } from '@angular/core';
import { ToastrModule } from 'ngx-toastr'; // Importando o ToastrModule

@NgModule({
  declarations: [],
  imports: [
    ToastrModule.forRoot(), // Configuração do ToastrModule
  ],
  providers: [],
  bootstrap: [], // Inicializar o componente Layout
})
export class RootModule {}
