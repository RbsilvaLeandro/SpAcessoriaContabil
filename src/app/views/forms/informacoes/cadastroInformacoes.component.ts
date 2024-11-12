import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {
  ColComponent,
  TextColorDirective,
  CardComponent,
  CardHeaderComponent,
  CardBodyComponent,
  FormControlDirective,
  ButtonDirective,
} from '@coreui/angular';

@Component({
  selector: 'app-informacoes',
  templateUrl: './cadastroInformacoes.component.html',
  styleUrls: ['./cadastroInformacoes.component.scss'],
  standalone: true,
  imports: [
    ColComponent,
    TextColorDirective,
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    FormsModule,
    FormControlDirective,
    ButtonDirective,
  ],
})
export class CadInformacoesComponent {
  public favoriteColor = '#26ab3c';
  receitaValue: number = 0.0;
  despesasValue: number = 0.0;

  constructor() {}
}
