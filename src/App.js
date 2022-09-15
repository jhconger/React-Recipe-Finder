import styled from 'styled-components'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Container, Nav, Form, FormControl, Button} from 'react-bootstrap';

//
// const Container = styled.div`
//  display: flex;
//  flex-direction: column;
//  `;
//
// const Header = styled.div`
// color:white;
// background-color: black;
// display: flex;
// flex-direction: row;
// justify-content: space-between;
// padding: 20px;
// font-size: 25px;
// font-weight: bold;
// box-shadow: 0 3px 6px 0 #555
// `;
//
const AppIcon = styled.img`
display: flex;
flex-direction: row;
align-items: center;
height: 75px;
width: 75px;
`;
//
// const AppNameComponent = styled.div`
// display: flex;
// margin: 10px;
// align-items: center;
// `;
//
// const SearchComponent = styled.div`
// display: flex;
// margin: 5px;
// align-items: center;
// background-color: white;
// border-radius: 2px;
// `;
//
// const SearchIcon = styled.img`
// display: flex;
// margin: 10px;
// align-items: center;
// border: none;
// outline: none;
// font-size: 16px;
// `;
//
// const SearchInput = styled.input`
// display: flex;
// margin: 10px;
// align-items: center;
// border: none;
// outline: none;
// font-size: 16px;
// `;

function App() {
//   return <Container>
//       <Header>
//           <AppNameComponent>
//               <AppIcon><img src="toppng.com-sandwich-577x447.png"/></AppIcon>Recipe Finder</AppNameComponent>
//           <SearchComponent>
//               <SearchInput placeholder="Search Recipe"/>
//               <SearchIcon src="search.png"/>
//           </SearchComponent>
//       </Header>
//           </Container>

    return (
        <>
            <Navbar bg="dark" expand="lg" variant="dark">
                <Container fluid>
                    <AppIcon src='RecipeLogo.svg'/>
                    <Navbar.Brand href="/home">Recipes for the Ages</Navbar.Brand>
                    {/*<Navbar.Brand href="/home">Trending</Navbar.Brand>*/}
                    <Navbar.Toggle aria-controls="navbarScroll"></Navbar.Toggle>
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="me-auto my-2 my-lg-3" style={{maxHeight:'100px'}} navbarScroll>

                        </Nav>
                        <Form className="d-flex">
                            <FormControl type="search" placeholder="Search Recipes" className="me-2" aria-label="search"></FormControl>
                            <Button variant="secondary" type="submit">
                                Search
                            </Button>
                        </Form>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </>
    );
}

export default App;
