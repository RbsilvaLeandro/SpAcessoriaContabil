import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
  },
  {
    name: 'Cad Clientes',
    url: '/forms/clientes',
    iconComponent: { name: 'cil-user' },
  },
  {
    name: 'Cad Informações',
    url: '/forms/informacoes',
    iconComponent: { name: 'cil-calculator' },
  },
];
