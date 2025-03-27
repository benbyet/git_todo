import {Box, Container, CssBaseline, Paper, styled, useTheme} from "@mui/material";
import ItemList from "./itemList";
import Header from "./header";

const StyledContainer = styled(Container) (({ theme }) => ({
    // backgroundColor: '#87CEEB',
    minHeight: '100vh',
}));
const Todo = () => {
    const theme = useTheme();
    return (
        <Box>
            <Header/>
            <StyledContainer maxWidth="sm" sx={{marginTop: "30px"}}>
                {/*<Paper elevation={3} sx={{padding: 4}}>*/}
                    <ItemList/>
                {/*</Paper>*/}
            </StyledContainer>
        </Box>
        // <div className="App">
        //     <header className="App-header">
        //         <img src={logo} className="App-logo" alt="logo"/>
        //         <p>
        //             Edit <code>src/App.js</code> and save to reload.
        //         </p>
        //         <a
        //             className="App-link"
        //             href="https://reactjs.org"
        //             target="_blank"
        //             rel="noopener noreferrer"
        //         >
        //             Learn React
        //         </a>
        //     </header>
        // </div>
    );
}

export default Todo;
