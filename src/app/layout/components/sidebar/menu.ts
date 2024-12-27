import { MenuItem } from "./menu.model";


export class Menu {
  public static pages: MenuItem[] = [
    {
      items: [
        {
          icon: 'icon-dashboard',
          label: 'menu.dashboard',
          route: '/',

        },
        {
          icon: 'icon-client',
          label: 'menu.clients',
          route: '/clients',
        },
        {
          icon: 'icon-matter',
          label: 'menu.matters',
          route: '/matters',
        },
        {
          icon: 'icon-calendar',
          label: 'menu.calendar',
          route: '/calendar',
        },
        {
          icon: 'icon-invoice',
          label: 'menu.invoices',
          route: '/invoices',
        },
      ],
    },
  ];
}
