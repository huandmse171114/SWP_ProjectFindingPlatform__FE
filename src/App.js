import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes';
import { DefaultLayout } from './components/Layout';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import React from 'react';
import { Provider, ErrorBoundary, LEVEL_ERROR, LEVEL_WARN } from '@rollbar/react'; // Provider imports 'rollbar'

const rollbarConfig = {
  accessToken: 'e31ee8c3d62744c9bf2e64a209daf75c',
  environment: 'testenv',
};

// function level(error) {
//     return error instanceof TypeError ? LEVEL_ERROR : LEVEL_WARN;
// }

function errorMessage(error, { componentStack }) {
    const sourceComponents = componentStack.split('\n').map(c => c.trim().replace('in', ''));
    return `Custom message: component ${sourceComponents[0]} had an error` + sourceComponents[0]
}

function extraData(error, info) {
    return info.componentStack.includes('Experiment') ? { experiment: true } : null;
}

// Custom phần view hiển thị lỗi trên trang web 
const ErrorDisplay = ({ error, resetError }) =>  {
    console.log("before logging error")
    console.dir(error);
    return <div onClick={resetError}>Error occured: {error.stack}</div>
}

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
                                            <Provider config={rollbarConfig}>
                                                <ErrorBoundary level={LEVEL_ERROR} errorMessage={errorMessage} extra={{additional: 'data extra 1'}} fallbackUI={ErrorDisplay}>
                                                    <Page />
                                                </ErrorBoundary>
                                            </Provider>
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
