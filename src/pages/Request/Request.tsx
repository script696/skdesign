import styled from "styled-components/macro";
import RequestTextContent from "./components/RequestTextContent/RequestTextContent";
import RequestForm from "./components/RequestForm/RequestForm";
import { Grid } from "@mui/material";

const StyledRequest = styled.section`
	position: relative;
	height: 100%;
	max-width: 1440px;
	margin: auto;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 60px;
	background: #fff;
`;

function Request() {
	return (
		<StyledRequest>
			<Grid container rowSpacing={2.5} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
				<Grid item xs={8}>
					<RequestTextContent />
				</Grid>
				<Grid item xs={4}>
					<RequestForm />
				</Grid>
			</Grid>
		</StyledRequest>
	);
}

export default Request;
