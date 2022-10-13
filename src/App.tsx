import React from "react";
import "./styles/index.css";
import { Request } from "./pages";
import { createTheme, ThemeProvider } from "@mui/material/styles";

declare module "@mui/material/styles" {
	interface Theme {
		status: {
			danger: React.CSSProperties["color"];
		};
	}

	interface Palette {
		neutral: Palette["primary"];
	}
	interface PaletteOptions {
		neutral: PaletteOptions["primary"];
	}

	interface ThemeOptions {
		status: {
			danger: React.CSSProperties["color"];
		};
	}
}

const theme = createTheme({
	components: {
		MuiButton: {
			styleOverrides: {
				root: { minHeight: 50, borderRadius: 8 },
			},
		},
		MuiTextField: {
			styleOverrides: {
				root: { borderRadius: 25 },
			},
		},
	},
	typography: {
		fontFamily: `"Open Sans", sans-serif`,
		fontSize: 14,
		fontWeightRegular: 400,
	},
	status: {
		danger: "#e53e3e",
	},
	palette: {
		primary: {
			main: "#0086A8",
		},
		neutral: {
			main: "#64748B",
			contrastText: "#fff",
		},
	},
});

function App() {
	return (
		<ThemeProvider theme={theme}>
			<div className="App">
				<Request />
			</div>
		</ThemeProvider>
	);
}

export default App;
