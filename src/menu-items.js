import CommuteOutlinedIcon from '@material-ui/icons/CommuteOutlined';
import TrendingUpOutlinedIcon from '@material-ui/icons/TrendingUpOutlined';
import LocalShippingOutlinedIcon from '@material-ui/icons/LocalShippingOutlined';
import GroupOutlinedIcon from '@material-ui/icons/GroupOutlined';
import DesktopAccessDisabledOutlinedIcon from '@material-ui/icons/DesktopAccessDisabledOutlined';
import SupervisorAccountOutlinedIcon from '@material-ui/icons/SupervisorAccountOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';


const icons = {
    CommuteOutlinedIcon: CommuteOutlinedIcon,
    TrendingUpOutlinedIcon: TrendingUpOutlinedIcon,
    LocalShippingOutlinedIcon: LocalShippingOutlinedIcon,
    GroupOutlinedIcon: GroupOutlinedIcon,
    DesktopAccessDisabledOutlinedIcon: DesktopAccessDisabledOutlinedIcon,
    SupervisorAccountOutlinedIcon: SupervisorAccountOutlinedIcon,
    HomeOutlinedIcon: HomeOutlinedIcon,

};


export const menuItems = {
    items: [
        {
            id: 'general',
            title: 'General',
            caption: 'Dashboard & Reportes',
            type: 'group',
            icon: icons['NavigationOutlinedIcon'],
            children: [
                {
                    id: 'principal',
                    title: 'Principal',
                    type: 'item',
                    icon: icons['GroupOutlinedIcon'],
                    url: '/admin/dashboard',
                },
                {
                    id: 'dashboard',
                    title: 'Dashboard',
                    type: 'collapse',
                    icon: icons['HomeOutlinedIcon'],
                    children: [
                        {
                            id: 'rechazos',
                            title: 'Rechazos',
                            type: 'item',
                            url: '/widget/rechazos',
                        },
                        {
                            id: 'ejecucion',
                            title: 'Ejecución de entregas',
                            type: 'item',
                            url: '/widget/ejecucion',
                        },
                        {
                            id: 'modulaciones',
                            title: 'Modulaciones',
                            type: 'item',
                            url: '/widget/modulaciones',
                        },
                        {
                            id: 'indicadores',
                            title: 'Indicadores de Reparto',
                            type: 'item',
                            url: '/widget/indicadores',
                        },
                        {
                            id: 'rechazosventas',
                            title: 'Rechazos Ventas',
                            type: 'item',
                            url: '/widget/rechazosventas',
                        },
                    ],
                },
                {
                    id: 'flota',
                    title: 'Flota',
                    type: 'collapse',
                    icon: icons['CommuteOutlinedIcon'],
                    children: [
                        {
                            id: 'listt2',
                            title: 'Check List T2',
                            type: 'item',
                            url: '/widget/listt2',
                        },
                        {
                            id: 'listflt',
                            title: 'Check List FLT',
                            type: 'item',
                            url: '/widget/listflt',
                        },
                        {
                            id: 'dashboardflota',
                            title: 'Dashboard',
                            type: 'item',
                            url: '/widget/dashboard',
                        },
                        {
                            id: 'cumplimiento',
                            title: 'Cumplimiento',
                            type: 'item',
                            url: '/widget/cumplimiento',
                        },
                        {
                            id: 'reportes',
                            title: 'Reportes',
                            type: 'item',
                            url: '/widget/reportes',
                        },
                    ],
                },
                {
                    id: 'hojaruta',
                    title: 'Hoja Ruta',
                    type: 'collapse',
                    icon: icons['TrendingUpOutlinedIcon'],
                    children: [
                        {
                            id: 'buscarcliente',
                            title: 'Buscar Cliente',
                            type: 'item',
                            url: '/widget/buscarcliente',
                        },
                        {
                            id: 'raya',
                            title: '_____',
                            type: 'item',
                            url: '/widget/raya',
                        },
                        {
                            id: 'listasegura',
                            title: 'Lista Segura',
                            type: 'item',
                            url: '/widget/listasegura',
                        },
                        {
                            id: 'alertas',
                            title: 'Alertas',
                            type: 'item',
                            url: '/widget/alertas',
                        }
                    ],
                },
                {
                    id: 'repartos',
                    title: 'Repartos',
                    type: 'collapse',
                    icon: icons['LocalShippingOutlinedIcon'],
                    children: [
                        {
                            id: 'transportes',
                            title: 'Transportes',
                            type: 'item',
                            url: '/widget/Transportes',
                        },
                        {
                            id: 'depositosbancarios',
                            title: 'Depositos Bancarios',
                            type: 'item',
                            url: '/widget/depositosbancarios',
                        },
                        {
                            id: 'idicadorruta',
                            title: 'Indicador Ruta',
                            type: 'item',
                            url: '/widget/idicadorruta',
                        },
                        {
                            id: 'mapas',
                            title: 'Mapas',
                            type: 'item',
                            url: '/widget/mapas',
                        },
                        {
                            id: 'telefonos',
                            title: 'Telefonos',
                            type: 'item',
                            url: '/widget/telefonos',
                        },
                        {
                            id: 'documentos',
                            title: 'Documentos',
                            type: 'item',
                            url: '/widget/documentos',
                        },
                        {
                            id: 'owd',
                            title: 'OWD',
                            type: 'item',
                            url: '/widget/owd',
                        },
                        {
                            id: 'asistencia',
                            title: 'Asistencia',
                            type: 'item',
                            url: '/widget/asistencia',
                        },
                    ],
                },
            ],
        },
        {
            id: 'mantenimiento',
            title: 'Mantenimiento',
            caption: 'Administración & Reportes',
            type: 'group',
            icon: icons['NavigationOutlinedIcon'],
            children: [
                {
                    id: 'users',
                    title: 'Usuarios',
                    type: 'item',
                    icon: icons['GroupOutlinedIcon'],
                    url: '/admin/users',
                },
                {
                    id: 'roles',
                    title: 'Roles',
                    type: 'item',
                    icon: icons['DesktopAccessDisabledOutlinedIcon'],
                    url: '/admin/roles',
                },
                {
                    id: 'administracion',
                    title: 'Administración',
                    type: 'collapse',
                    icon: icons['SupervisorAccountOutlinedIcon'],
                    children: [
                        {
                            id: 'importarxls',
                            title: 'Importar xls',
                            type: 'item',
                            url: '/widget/importarxls',
                        },
                        {
                            id: 'exportarxls',
                            title: 'Exportar xls',
                            type: 'item',
                            url: '/widget/exportarxls',
                        },
                        {
                            id: 'camiones',
                            title: 'Camiones',
                            type: 'item',
                            url: '/widget/camiones',
                        },
                        {
                            id: 'indicadoresadmin',
                            title: 'Indicadores',
                            type: 'item',
                            url: '/widget/indicadoresadmin',
                        },
                        {
                            id: 'zonasdeventas',
                            title: 'Zonas de Ventas',
                            type: 'item',
                            url: '/widget/zonasdeventas',
                        },
                    ],
                },
                {
                    id: 'gestion',
                    title: 'Gestión',
                    type: 'collapse',
                    icon: icons['CommuteOutlinedIcon'],
                    children: [
                        {
                            id: 'owd5s',
                            title: 'OWD 5S',
                            type: 'item',
                            url: '/widget/owd5s',
                        },
                        {
                            id: 'dashboardgestion',
                            title: 'Dashboard',
                            type: 'item',
                            url: '/widget/dashboardgestion',
                        },
                    ],
                },
                {
                    id: 'planeamiento',
                    title: 'Planeamiento',
                    type: 'collapse',
                    icon: icons['TrendingUpOutlinedIcon'],
                    children: [
                        {
                            id: 'nps',
                            title: 'NPS',
                            type: 'item',
                            url: '/widget/nps',
                        },
                    ],
                },
            ],
        },
        // {
        //     id: 'support',
        //     title: 'Sidebar Features',
        //     type: 'group',
        //     icon: icons['ContactSupportOutlinedIcon'],
        //     children: [
        //         {
        //             id: 'menu-level',
        //             title: 'Level 0',
        //             type: 'collapse',
        //             icon: icons['LayersOutlinedIcon'],
        //             children: [
        //                 {
        //                     id: 'menu-level-1.1',
        //                     title: 'Level 1',
        //                     type: 'collapse',
        //                     children: [
        //                         {
        //                             id: 'menu-level-2.1',
        //                             title: 'Level 2',
        //                             type: 'collapse',
        //                             children: [
        //                                 {
        //                                     id: 'menu-level-3.1',
        //                                     title: 'Level 3',
        //                                     type: 'collapse',
        //                                     children: [
        //                                         {
        //                                             id: 'menu-level-4.1',
        //                                             title: 'Level 4',
        //                                             type: 'collapse',
        //                                             children: [
        //                                                 {
        //                                                     id: 'menu-level-5.1',
        //                                                     title: 'Level 5',
        //                                                     type: 'collapse',
        //                                                     children: [
        //                                                         {
        //                                                             id: 'menu-level-6.1',
        //                                                             title: 'Level 6',
        //                                                             type: 'collapse',
        //                                                             children: [
        //                                                                 {
        //                                                                     id: 'menu-level-7.1',
        //                                                                     title: 'Level 7',
        //                                                                     type: 'collapse',
        //                                                                     children: [
        //                                                                         {
        //                                                                             id: 'menu-level-8.1',
        //                                                                             title: 'Level 8',
        //                                                                             type: 'item',
        //                                                                             url: '#',
        //                                                                         },
        //                                                                     ],
        //                                                                 },
        //                                                             ],
        //                                                         },
        //                                                     ],
        //                                                 },
        //                                             ],
        //                                         },
        //                                     ],
        //                                 },
        //                             ],
        //                         },
        //                     ],
        //                 },
        //             ],
        //         },
        //         {
        //             id: 'menu-level-subtitle',
        //             title: 'Caption Levels',
        //             caption: 'I am Subtitle',
        //             type: 'collapse',
        //             icon: icons['LayersOutlinedIcon'],
        //             children: [
        //                 {
        //                     id: 'sub-menu-level-1.1',
        //                     title: 'Level 1',
        //                     caption: 'I am level 1 subtitle',
        //                     type: 'collapse',
        //                     children: [
        //                         {
        //                             id: 'sub-menu-level-2.1',
        //                             title: 'Level 2',
        //                             caption: 'I am level 2 subtitle',
        //                             type: 'item',
        //                             url: '#',
        //                         },
        //                     ],
        //                 },
        //             ],
        //         },
        //         {
        //             id: 'disabled-menu',
        //             title: 'Disabled Menu',
        //             type: 'item',
        //             url: '#',
        //             icon: icons['BlockOutlinedIcon'],
        //             disabled: true,
        //         },
        //         {
        //             id: 'oval-chip-menu',
        //             title: 'Oval Chip',
        //             type: 'item',
        //             url: '#',
        //             icon: icons['FiberManualRecordOutlinedIcon'],
        //             chip: {
        //                 label: '9',
        //                 color: 'primary',
        //             },
        //         },
        //         {
        //             id: 'rounded-chip-menu',
        //             title: 'Rounded Chip',
        //             type: 'item',
        //             url: '#',
        //             icon: icons['EditAttributesOutlinedIcon'],
        //             chip: {
        //                 label: 'Rounded',
        //                 color: 'secondary',
        //             },
        //         },
        //         {
        //             id: 'avatar-chip-menu',
        //             title: 'Avatar Chip',
        //             type: 'item',
        //             url: '#',
        //             icon: icons['FaceOutlinedIcon'],
        //             chip: {
        //                 label: 'Coded',
        //                 color: 'primary',
        //                 avatar: 'C',
        //                 size: 'small',
        //             },
        //         },
        //         {
        //             id: 'outline-chip-menu',
        //             title: 'Outline Chip',
        //             type: 'item',
        //             url: '#',
        //             icon: icons['RadioButtonUncheckedOutlinedIcon'],
        //             chip: {
        //                 label: 'Outline',
        //                 variant: 'outlined',
        //                 color: 'primary',
        //             },
        //         },
        //     ],
        // },
    ],
}
