import { Box, Button, Grid, List, ListItem, Typography } from '@mui/material';
import React, { useState } from 'react';


function Technologies() {
    const [selectedMenuIndex, setSelectedMenuIndex] = useState(0);
    const [activeMenuItem, setActiveMenuItem] = useState(null);
    const handleMenuItemClick = (index) => {
        setSelectedMenuIndex(index);
        setActiveMenuItem(index);
    }

    // Define an array of menu items with their corresponding content
    const menuItems = [
        {
            id:1,
            title: 'HTML5',
            content: "HTML5 had already become an integral part of dynamic interactive web pages. This version was designed specifically to widen the web opportunities that won't interfere with the functioning of the existing web pages.",
            disc: 'HTML5 is beneficial in many ways as it simplifies the process of code writing, includes API integration, solves cross-browser issues, eliminates dependence on plugins, makes browsers and websites faster as well as easier to use, and a lot more. All HTML5 advantages and opportunities allow us to provide the most effective front-end solutions for our clients.'
        },
        {
            id: 2,
            title: 'CSS & Preprocessors',
            content: "CSS is a style sheet language responsible for the website's visual formatting. Moreover, CSS includes web design and development adjustments for different types of devices, which makes it possible to set up different page display variants for personal computers and smartphones.",
            disc: 'CSS preprocessors allow writing code that will make the text on any web page logical and structured as well as increase its readability. We use CSS and a variety of its preprocessors to create websites with a visually pleasing interface, good structure, and the possibility to make formatting changes without additional effort.'
        },
        {
            id: 3,
            title: 'JavaScript',
            content: "JavaScript is one of the main client-side programming languages used for writing scripts and their further integration into HTML pages. This language makes it possible to change browser pages and web page formatting styles. One of its biggest advantages is fast response to users' requests.",
            disc: "More than 90% of websites and all browsers use JavaScript because of its versatility and reduced need for the website's server.JavaScript has too many advantages to exclude it from the list of the main technologies we use in our front- end related projects."
        },
        {
            id: 4,
            title: 'React js',
            content: "React.js is one of the biggest libraries and, basically, any fully-functional dynamic application can be created using React.js only. This library has many benefits that widen opportunities for the entire process of front-end development. It is perfect for creating large web applications that does not require page reloading to change data.",
            disc: 'In addition to the simplicity in use, all React.js applications are easy to test and are equally good for creating web, IOS and Android applications. Usability of this library allows our front-end developers to provide highly effective web solutions in terms of their projects.'
        },
        {
            id: 5,
            title: 'Vue.Js',
            content: "Vue.js is a framework for a user interface creation. In case if used in a combination with advanced tools and additional libraries, it perfectly fits for creating complex single-page applications. Main advantages of Vue.js are its simplicity and structure in addition to its flexibility, small size, and reactivity of variables.",
            disc: 'Because of the simple structure, it allows to trace errors with ease, which decreases time spent on application development. We can say that using Vue.js on our projects helps to build errorless web and mobile applications that help to increase our clients’ business efficiency.'
        },
        {
            id: 6,
            title: 'Angular js',
            content: "AngularJS is a framework used for creating single-page web applications. Since it is a framework, developers don't need to write the entire code, but can use already existing standards and tools. Moreover, it is a great solution for fast front-end development as it eliminates the necessity of using other frameworks and plugins.",
            disc: 'AngularJS is used for creating a wide range of web and mobile applications, for example, weather apps, social apps, e-commerce, etc. Our front-end specialists use AngularJS on a constant basis and had already applied it in the number of projects.'
        },
        {
            id: 7,
            title: 'TypeScript',
            content:"TypeScript is a JS based programming language used for writing different types of web frameworks, applications and more.It has an improved flexibility and efficiency that results in making many developers choose it over JS.The main benefits of TypeScript are code readability, wider IDE support, reverse compatibility with JS, and a lot more.",
            disc: "What's most important, it ensures the type correctness and eliminates type mismatch bugs.When working on our projects, we use TypeScript to make our front- end development processes easier and the results even more enjoyable for each client."
        },
        {
            id: 8,
            title: 'Redux',
            content: "Redux is a state management tool for data and interface in JavaScript-based applications. This non-traditional library fits for single-page applications that can face difficulties in the long run. The Redux's distinguishing feature lies in storing the application's entire state in only one central location, so each component has direct access to it.",
            disc: 'In addition, it implies a unidirectional data flow and does not allow changing the application state directly. Our front-end developers had already enjoyed the advantages of working with Redux and are ready to use it for future projects.'
        },
        {
            id: 9,
            title: 'GraphQL',
            content: "GraphQL is a query language used mainly to download data from a server. It allows to specify the required data precisely, simplifies data aggregation, and uses the type system for data specification. In other words, GraphQL is a smart mediator between a client and data sources.",
            disc: 'Moreover, a client can take only one request action instead of a few ones to get results for different needs. This language is beneficial in many ways and solves problems that front-end developers face on a daily basis. This technology helps us to please clients with the most effective solutions and create highly-competitive websites and applications..'
        },
    ];

   
    

    return (
        <Box pt={5} bgcolor={"#f1f4fd"} marginTop={"-7px"} pb={5}>
            <Grid container spacing={3} width={"60%"} mx={'auto'} mb={5}>
                <Grid item xs={4}>
                    <Typography variant="h4" fontWeight={800}>        Technologies</Typography>
                  
                    <List>
                        {menuItems.map((menuItem, index) => (
                            <ListItem
                                button
                                key={index}
                                onClick={() => handleMenuItemClick(index)}
                                sx={{
                                    fontSize: '25px',
                                    fontWeight: '700',
                                    color: '#bcbcbf',
                                    ":hover": {
                                        color: 'black'
                                    },
                                    ...(activeMenuItem === index && { color: 'black' }) // Apply active styles
                                }}
                            >
                                {menuItem.title}
                            </ListItem>
                        ))}
                    </List>
                </Grid>
                <Grid item xs={8}>
                  
                    <Typography variant="h4" fontWeight={800}>{menuItems[selectedMenuIndex].title}</Typography>
                    <Typography variant="body1" mt={5}>{menuItems[selectedMenuIndex].content}</Typography>
                    <Typography variant="body1" mt={5}>{menuItems[selectedMenuIndex].disc}</Typography>

                    <Button variant="contained" sx={{
                        bgcolor: '  #db5156', color: 'white', padding: '10.5px 50.5px', marginTop: '20px', borderRadius: '64px', ":hover": {
                            bgcolor: '  #db5156'
                        }
                    }}>Open Success Stories</Button>
                  
                </Grid>
            </Grid>
        </Box>
    );
}

export default Technologies;
