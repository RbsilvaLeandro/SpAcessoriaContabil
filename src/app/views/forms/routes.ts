import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Forms',
    },
    children: [
      {
        path: '',
        redirectTo: 'form-control',
        pathMatch: 'full',
      },
      {
        path: 'informacoes',
        loadComponent: () =>
          import('./informacoes/cadastroInformacoes.component').then(
            (m) => m.CadInformacoesComponent
          ),
        data: {
          title: 'Form Control',
        },
      },
      {
        path: 'clientes',
        loadComponent: () =>
          import('./clientes/cadastroclientes.component').then(
            (m) => m.CadClientesComponent
          ),
        data: {
          title: 'Cadastro',
        },
      },
    ],
  },
];
