import TerminalIcon from '@mui/icons-material/Terminal';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
import CloudIcon from '@mui/icons-material/Cloud';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FilterDramaIcon from '@mui/icons-material/FilterDrama';
import GroupsIcon from '@mui/icons-material/Groups';
const servicesdata = [
    {
        id: 1,
        title:'Web Design & Development',
        disc: 'We create a smooth user experience for every web design and development project we take.',
        icon: <TerminalIcon sx={{fontSize:'40px'}} />,
    },
    {
        id: 2,
        title: 'Mobile App Development ',
        disc: 'Magzel enjoins a hallmark of projects in mobile application development and contributed to the industry',
        icon: <PhoneIphoneIcon sx={{ fontSize: '40px' }} />,
    },

    {
        id: 3,
        title: 'Software Development',
        disc: 'For various startups and established businesses alike, our exceptional software development company',
        icon: <SettingsOutlinedIcon sx={{ fontSize: '40px' }} />,
    },
    {
        id: 4,
        title: 'Startup Solution',
        disc: 'We are the enablers of tech-savvy and budding entrepreneurs. We groom and nurture entrepreneurs from various industries',
        icon: <RocketLaunchOutlinedIcon sx={{ fontSize: '40px' }} />,

    },
    {
        id: 5,
        title: 'DevOps',
        disc: 'Magzel would like to offer its services to move your workload to Azure with our Free migration and DevOps services during the lockdown!',
        icon: <CloudIcon sx={{ fontSize: '40px' }} />,
    },
    {
        id: 6,
        title: 'Resource Augmentation ',
        disc: 'From dedicated and multi-tiered teams of professionals to simple staff augmentation, we offer exceptional service of resource allocation.',
        icon: <PersonIcon sx={{ fontSize: '40px' }} />,
    },

    {
        id: 7,
        title: 'Ecommerce Solution',
        disc: 'E-commerce solution requires a technically holistic approach and it caters to all aspects including, design, development and e-cart.',
        icon: <ShoppingCartOutlinedIcon sx={{ fontSize: '40px' }} />,
    },
    {
        id: 8,
        title: 'Managed Cloud Hosting',
        disc: "Magzel's Cloud Management Services drives us to create a customized solution that addresses all unique requirement.",
        icon: <FilterDramaIcon sx={{ fontSize: '40px' }} />,
    },
    {
        id: 9,
        title: 'IT Resource Allocation',
        disc: "Magzel's IT allocation service is all about managing human resources frontiers including tracking, optimization, and stages of analysis.",
        icon: <GroupsIcon sx={{ fontSize: '40px' }} />,
        
    }
]


export default servicesdata