// import React,{useState} from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import { createTheme, CssBaseline,Switch, ThemeProvider, FormControl, FormGroup, FormControlLabel } from '@mui/material';
// import { ContextProvider } from './hooks/useStateContext';

import React, { useState, useMemo } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createTheme, CssBaseline, Switch, ThemeProvider, FormControl, FormGroup, FormControlLabel } from '@mui/material';
import { ContextProvider } from './hooks/useStateContext';

// Define light and dark themes outside the component
const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
  typography: {
    fontFamily:'IBM Plex Sans',
  }
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
  typography: {
    fontFamily:'IBM Plex Sans',
  }
});

const AppWithThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Memoize the current theme based on `isDarkMode`
  const currentTheme = useMemo(() => (isDarkMode ? darkTheme : lightTheme), [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <App />
      <FormControl component="fieldset" sx={{ mt: 4, ml: 4 }}>
        <FormGroup row>
          <FormControlLabel
            control={
              <Switch 
                color="primary" 
                onChange={toggleTheme} 
                aria-label="Toggle between light and dark theme" 
                checked={isDarkMode} 
              />
            }
            label="Dark Mode"
            labelPlacement="end"
          />
        </FormGroup>
      </FormControl>
    </ThemeProvider>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextProvider>
      <AppWithThemeToggle />
    </ContextProvider>
  </React.StrictMode>
);

reportWebVitals();

// // const darkTheme = createTheme({
// //   palette:{
// //     mode:"dark",
// //   },
// // })

// const AppWithThemeToggle = () => {
//   const [isDarkMode, setIsDarkMode] = useState(true);

//   const lightTheme = createTheme({
//     palette: {
//       mode: "light",
//     },
//   });

//   const darkTheme = createTheme({
//     palette: {
//       mode: "dark",
//     },
//   });

//   const toggleTheme = () => {
//     setIsDarkMode((prevMode) => !prevMode);
//   };

//   return (
//     <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
//       <CssBaseline />
//       {/* Add a button to toggle theme */}
//       {/* <Button 
//         onClick={toggleTheme} 
//         variant="contained" 
//         style={{ margin: '10px' }}
//       >
//         Toggle Theme
//       </Button> */}
//       <App />
//       <FormControl component="fieldset" sx={{mt:4,ml:4}}>
//         <FormGroup aria-label="position" row>
//           <FormControlLabel
//             value="toggle theme"
//             control={<Switch color="primary" onChange={toggleTheme}/>}
//             label="Toggle Theme"
//             labelPlacement="end"
//           />
//         </FormGroup>
//       </FormControl>
//     </ThemeProvider>
//   );
// };

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <ContextProvider>
//       <AppWithThemeToggle />
//     </ContextProvider>
//   </React.StrictMode>
// );

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <ThemeProvider theme={darkTheme}>
//       <CssBaseline/>
//       <App />
//     </ThemeProvider>
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
