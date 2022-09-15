import styled from 'styled-components'


const Container = styled.div`
 display: flex;
 flex-direction: column;
 `;

const Header = styled.div`
color:white;
background-color: black;
display: flex;
flex-direction: row;
padding: 20px;
font-size: 25px;
font-weight: bold;
box-shadow: 0 3px 6px 0 #555
`;

const AppNameComponent = styled.div`

`;

const SearchComponent = styled.div`

`;

function App() {
  return <Container>
      <Header>
          <AppNameComponent><img src="toppng.com-sandwich-577x447.png"/>Recipe Finder</AppNameComponent>
          <SearchComponent>
              <img src="search.png"/>
          </SearchComponent>
      </Header>
          Justin Conger</Container>
}

export default App;
