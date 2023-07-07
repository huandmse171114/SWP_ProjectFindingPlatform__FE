import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes';
import { DefaultLayout } from './components/Layout';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import demoData from './components/Layout/component/DemoData';
import Login from './pages/Login';

function App() {
    const theme = createTheme({
    palette: {
        primary: {
            main: '#70b6e5',
        },
        secondary: {
            main: '#0f2027'
        },
    },
    });
    
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        let Page = route.component;
                        let Layout = route.layout || DefaultLayout;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <ThemeProvider theme={theme}>
                                        <Layout>
                                            <Page />
                                        </Layout>
                                    </ThemeProvider>
                                }
                            ></Route>
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
