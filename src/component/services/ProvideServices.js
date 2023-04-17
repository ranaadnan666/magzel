import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useState } from 'react';

function ProvideServices() {
    const [accordionData, setAccordionData] = useState([
        {
            id: 1,
            heading: 'CMS Customization',
            content: "If you want good conversion for your website without making additional effort, you are more than welcome to let us fix it for you. Our skills in CMS web development will bring you an opportunity to update the content of your website when needed without further assistance of a professional web developer.",
            expanded: true
        },
        {
            id: 2,
            heading: 'BPA Systems',
            content: "No matter the size of your company, with a proper business process automation system you'll be able to get things done a lot faster and easier than without it. What we're good at is web development software engineering, and making your managers' manual work automated.",
            expanded: false
        },
        {
            id: 3,
            heading: 'E-Commerce',
            content: "Use our e-Commerce web development services to get a fully-functional online store or enhance technical capacity of the existing one. Let us make every piece of your website properly developed, customized, and free from any kind of flaws or technical malfunction.",
            expanded: false
        },
        {
            id: 4,
            heading: 'SaaS Platforms',
            content: "The variety of our web developing software services includes providing SaaS platforms that is especially useful for small companies. Instead of spending money on additional licensed hardware, you can use different web applications placed on our server to meet your business needs.",

            expanded: false
        },
        {
            id: 5,
            heading: 'API Integration',
            content: "In addition to the web app development services, we provide an application programming interface integration that makes devices and programs interact with each other. If you want to increase your application efficiency then it's exactly what you need for getting more clients!",

            expanded: false
        },
        {
            id: 6,
            heading: 'Membership Sites',
            content: "As a web application development company, we have gained experience in creating membership websites that bill users on a subscription basis. Our team will offer you software tools, technologies and solutions that will fulfill your business goals fast and easy.",

            expanded: false
        },
        {
            id: 7,
            heading: 'CRM Systems',
            content: "Companies of all sizes need a good-quality customer relationship management system to ensure direct communication with future and existing clients. Our best web development practices and solutions will make your company able to meet business needs and increase product efficiency.",

            expanded: false
        }
    ]);

    const handleAccordionChange = (panel) => (event, isExpanded) => {
        setAccordionData(
            accordionData.map((data) => ({
                ...data,
                expanded: panel === data.id ? isExpanded : false,
            }))
        );
    };

    return (
        <div style={{
            background: "#f1f4fd"
        }}>
            <Box pt={5} marginTop={"-7px"} pb={5} width={{
                xs: '90%',
                md: '70%'
            }} mx={'auto'}>
                <Typography variant="h4" fontWeight={800} textAlign={'center'} mt={2} mb={5}>
                    We Provide Services
                </Typography>
                {accordionData.map((data) => (
                    <Accordion
                        // sx={{
                        //     backgroundColor: '#f1f4fd', // Change the background color here
                        //     color: '#333',
                        // }}
                        key={data.id}
                        expanded={data.expanded}
                        onChange={handleAccordionChange(data.id)}
                        defaultExpanded={data.id === 1} // Add this line to set the first Accordion open by default
                    >
                        <AccordionSummary expandIcon={data.expanded ? <RemoveIcon sx={{ color: '#db5156' }} /> : <AddIcon sx={{ color: '#db5156' }} />}>
                            <Typography variant='h5' fontWeight={800}>{data.heading}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography variant="body1" mt={1}>{data.content}</Typography>

                        </AccordionDetails>
                    </Accordion>
                ))}
            </Box>
        </div>
    );
}

export default ProvideServices;