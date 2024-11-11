import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
  },
  {
    name: 'Clientes',
    url: '/forms/layout',
    iconComponent: { name: 'cil-user' },
  },
  {
    name: 'Despesas',
    url: '/forms/form-control',
    iconComponent: { name: 'cil-calculator' },
  },
];
