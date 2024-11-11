import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { DocsExampleComponent } from '@docs-components/public-api';

import {
  RowComponent,
  ColComponent,
  TextColorDirective,
  CardComponent,
  CardHeaderComponent,
  CardBodyComponent,
  FormSelectDirective,
} from '@coreui/angular';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  standalone: true,
  imports: [
    RowComponent,
    ColComponent,
    TextColorDirective,
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    DocsExampleComponent,
    FormSelectDirective,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class SelectComponent {
  // Definir os anos disponíveis para seleção
  availableYears: number[] = [];
  // Variável para armazenar os anos selecionados
  selectedYears: number[] = [];

  constructor() {
    const currentYear = new Date().getFullYear();
    // Gerar anos de 2000 até o ano atual + 10 anos
    this.availableYears = Array.from(
      { length: 31 },
      (_, i) => currentYear - 15 + i
    );
  }
}
