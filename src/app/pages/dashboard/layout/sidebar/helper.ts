export interface INavbarData {
    title: string;
    icon: string;
    route: string;
    children?: INavbarData[];
}