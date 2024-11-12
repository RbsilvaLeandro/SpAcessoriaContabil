import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormsModule,
  FormBuilder,
  FormGroup,
  Validators,
  UntypedFormControl,
  UntypedFormGroup,
} from '@angular/forms';
import {
  RowComponent,
  ColComponent,
  TextColorDirective,
  CardComponent,
  CardHeaderComponent,
  CardBodyComponent,
  FormControlDirective,
  FormLabelDirective,
  ButtonDirective,
  TableDirective,
  ToasterComponent,
  ToasterPlacement,
} from '@coreui/angular';
import { NgClass, NgStyle, SlicePipe } from '@angular/common';
import { AppToastComponent } from '../../notifications/toasters/toast-simple/toast.component';
import { filter, Observable } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

export enum Colors {
  '' = '',
  primary = 'primary',
  secondary = 'secondary',
  success = 'success',
  info = 'info',
  warning = 'warning',
  danger = 'danger',
  dark = 'dark',
  light = 'light',
}

@Component({
  selector: 'app-clientes',
  templateUrl: './cadastroclientes.component.html',
  styleUrls: ['./cadastroclientes.component.scss'],
  standalone: true,
  imports: [
    RowComponent,
    ColComponent,
    TextColorDirective,
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    FormControlDirective,
    ReactiveFormsModule,
    FormsModule,
    FormLabelDirective,
    ButtonDirective,
    TableDirective,
    ToasterComponent,
    NgClass,
    SlicePipe,
    HttpClientModule,
    CommonModule,
  ],
})
export class CadClientesComponent implements OnInit {
  public clientes: any[] = [];
  public clienteForm!: FormGroup;
  positions = Object.values(ToasterPlacement);
  position = ToasterPlacement.TopEnd;
  positionStatic = ToasterPlacement.Static;
  colors = Object.keys(Colors);
  autohide = true;
  delay = 5000;
  fade = true;

  toasterForm = new UntypedFormGroup({
    autohide: new UntypedFormControl(this.autohide),
    delay: new UntypedFormControl({
      value: this.delay,
      disabled: !this.autohide,
    }),
    position: new UntypedFormControl(this.position),
    fade: new UntypedFormControl({ value: true, disabled: false }),
    closeButton: new UntypedFormControl(true),
    color: new UntypedFormControl(''),
  });

  formChanges: Observable<any> = this.toasterForm.valueChanges.pipe(
    takeUntilDestroyed(),
    filter((e) => e.autohide !== this.autohide)
  );

  private readonly API_URL =
    'https://www.jotform.com/tables/243103714766051/243103571640043';

  @ViewChildren(ToasterComponent) viewChildren!: QueryList<ToasterComponent>;

  constructor(private http: HttpClient, private fb: FormBuilder) {}

  ngOnInit() {
    this.formChanges.subscribe((e) => {
      this.autohide = e.autohide;
      this.position = e.position;
      this.fade = e.fade;
      const control = this.toasterForm?.get('delay');
      this.autohide ? control?.enable() : control?.disable();
      this.delay = control?.enabled ? e.timeout : this.delay;
    });

    this.clienteForm = this.fb.group({
      razaoSocial: ['', [Validators.required]],
    });

    this.loadClientes(); // Carregar clientes ao inicializar
  }

  loadClientes() {
    this.http.get<any[]>(this.API_URL).subscribe(
      (data) => {
        this.clientes = data;
      },
      (error) => {
        this.addToast(
          'Erro',
          'Houve uma falha ao carregar a lista de clientes',
          'danger'
        );
      }
    );
  }

  checkIfClienteExists(razaoSocial: string): boolean {
    return this.clientes.some((cliente) => cliente.razaoSocial === razaoSocial);
  }

  onSubmit() {
    if (this.clienteForm.invalid) {
      return;
    }
    const razaoSocial = this.clienteForm.value.razaoSocial;

    if (this.checkIfClienteExists(razaoSocial)) {
      this.addToast(
        'Erro',
        'Houve uma falha ao carregar a lista de clientes',
        'danger'
      );
      return;
    }

    const clienteData = { razaoSocial };
    this.http.post(this.API_URL, clienteData).subscribe(
      (response) => {
        this.addToast(
          'Cadastro realizado com sucesso',
          'Cadastro realizado com sucesso',
          'success'
        );

        this.loadClientes();
        this.clienteForm.reset();
      },
      (error) => {
        this.addToast('Erro', 'Houve uma falha cadastrar o cliente', 'danger');
      }
    );
  }

  addToast(title: string, messageBody: string, color: string) {
    const formValues = this.toasterForm.value;

    const toasterPosition = this.viewChildren.filter(
      (item) => item.placement === this.toasterForm.value.position
    );

    toasterPosition.forEach((item) => {
      const { ...props } = { ...formValues, title, messageBody, color };
      const componentRef = item.addToast(AppToastComponent, props, {});
      componentRef.instance['closeButton'] = props.closeButton;
    });
  }

  cancelar(): void {
    this.clienteForm.reset();
  }
}
