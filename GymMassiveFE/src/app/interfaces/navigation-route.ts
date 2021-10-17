export interface NavigationRoute {
  path: string;
  name: string;
  icon?: string;
  children?: NavigationRoute[];
}
