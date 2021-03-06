/*
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button'

      <header className="App-header">
        <h1>Projeto Karangos</h1>
        <Button variant="contained" color="primary">Clique aqui!</Button>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>*/

import TopBar from './ui/TopBar'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import yellow from '@material-ui/core/colors/yellow';
import pink from '@material-ui/core/colors/pink';
import FooterBar from './ui/FooterBar';
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import KarangosList from './routed/KarangosList2'
import KarangosForm from './routed/KarangosForm'
import ClientsList from './routed/ClientsList'
import ClientsForm from './routed/ClientsForm'
import Homepage from './routed/Homepage'

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: yellow[500],
    },
    secondary: {
      main: pink[500],
    },
  },
});

const useStyles = makeStyles((theme) => ({
  main: {
    backgroundColor: theme.palette.background.default,
    paddingBottom: '42px',
    minHeight: '100vh', //100% da altura da area de visualizaçao
  },
  routed: {
    padding: '25px',
    color: theme.palette.text.primary,
    fontFamily: theme.typography.fontFamily
  }
}))

function Main() {
  const classes = useStyles()
  return (
     <Box className={classes.main}>
       <BrowserRouter> {/* Inicia a regiao onde pode haver troca dinamica de elementos */}
        <TopBar />
          <Box id="routed" className={classes.routed}>
            <Switch> {/* Determina qual elemento sera exibido de acordo com a rota */}

              <Route exact path="/">
                <Homepage />
              </Route>

              <Route path="/list">
                <KarangosList />
              </Route>

              <Route path="/new">
                <KarangosForm />
              </Route>

              <Route path="/listc">
                <ClientsList />
              </Route>

              <Route path="/newc">
                <ClientsForm />
              </Route>

              <Route path="/edit/:id">
                <KarangosForm />
              </Route>

              <Route path="/editc/:id">
                <ClientsForm />
              </Route>

            </Switch>
          </Box>
        <FooterBar />
       </BrowserRouter>
     </Box>
  )
}

function App() {
  return (
  <ThemeProvider theme={theme}>
    <Main />
  </ThemeProvider>
  );
}

export default App;
