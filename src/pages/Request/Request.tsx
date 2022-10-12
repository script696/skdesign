import styled from "styled-components/macro";
import RequestLeftCol from "./components/RequestLeftCol/RequestLeftCol";
import RequestRightCol from "./components/RequestRightCol/RequestRightCol";

const StyledRequest = styled.section`
	position: relative;
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	background: #fff;
`;

function Request() {
	return (
		<StyledRequest>
			<RequestLeftCol />
			<RequestRightCol />
		</StyledRequest>
	);
}

export default Request;
