import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import {
  ButtonModule,
  CardModule,
  FormModule,
  GridModule,
} from '@coreui/angular';
import { IconSetService } from '@coreui/icons-angular';
import { iconSubset } from '../../../icons/icon-subset';
import { CadInformacoesComponent } from './cadastroInformacoes.component';

describe('FormControlsComponent', () => {
  let component: CadInformacoesComponent;
  let fixture: ComponentFixture<CadInformacoesComponent>;
  let iconSetService: IconSetService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CardModule,
        GridModule,
        FormsModule,
        FormModule,
        ButtonModule,
        RouterTestingModule,
        CadInformacoesComponent,
      ],
      providers: [IconSetService],
    }).compileComponents();
  });

  beforeEach(() => {
    iconSetService = TestBed.inject(IconSetService);
    iconSetService.icons = { ...iconSubset };

    fixture = TestBed.createComponent(CadInformacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
