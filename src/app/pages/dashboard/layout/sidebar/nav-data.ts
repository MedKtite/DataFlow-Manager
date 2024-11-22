import { INavbarData } from './helper';

export const navData: INavbarData[] = [
    {
        title: 'Dashboard',
        icon: 'tachometer-alt',
        route: '/dashboard',
        children: []
    },
    {
        title: 'Contact',
        icon: 'user-plus',
        route: '/dashboard/users',
        children: [
            {
                title: 'Lists',
                icon: 'list', // Add icon for child
                route: '/dashboard/lists',
            },
        ]
    },
    {
        title: 'Campaigns',
        icon: 'bullhorn',
        route: '/dashboard/campaigns',
        children: [
            {
                title: 'Emails',
                icon: 'envelope', // Add icon for child
                route: '/dashboard/emails',
            },
            {
                title: 'SMS',
                icon: 'sms', // Add icon for child
                route: '/dashboard/sms',
            },
            {
                title: 'WhatsApp',
                icon: 'whatsapp', // Add icon for child
                route: '/dashboard/whatsapp',
            }
        ]
    },
    {
        title: 'Conversations',
        icon: 'comments',
        route: '/dashboard/conversations',
        children: []
    },
    {
        title: 'Web scraping',
        icon: 'repeat',
        route: '/dashboard/web-scraping',
        children: [] // Add empty children array
    },
    {
        title: 'Reports',
        icon: 'chart-bar',
        route: '/dashboard/reports',
        children: []
    },
    {
        title: 'Settings',
        icon: 'cog',
        route: '/dashboard/settings',
        children: []
    }
];