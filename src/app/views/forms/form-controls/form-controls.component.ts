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
  selector: 'app-form-controls',
  templateUrl: './form-controls.component.html',
  styleUrls: ['./form-controls.component.scss'],
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
export class FormControlsComponent {
  public favoriteColor = '#26ab3c';
  receitaValue: number = 0.0;
  despesasValue: number = 0.0;

  constructor() {}
}
