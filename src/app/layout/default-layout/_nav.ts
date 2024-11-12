import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
  },
  {
    name: 'Cad Clientes',
    url: '/forms/layout',
    iconComponent: { name: 'cil-user' },
  },
  {
    name: 'Cad Informações',
    url: '/forms/form-control',
    iconComponent: { name: 'cil-calculator' },
  },
];
