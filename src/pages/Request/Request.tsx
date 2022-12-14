import styled from "styled-components/macro";
import RequestTextContent from "./components/RequestTextContent/RequestTextContent";
import RequestForm from "./components/RequestForm/RequestForm";

const StyledRequest = styled.section`
	position: relative;
	height: 100%;
	max-width: 1400px;
	padding: 50px 20px;
	margin: auto;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 60px;
	background: #fff;
	@media (max-width: 1024px) {
		flex-direction: column;
		max-width: 60vw;
	}
`;

function Request() {
	return (
		<StyledRequest>
			<RequestTextContent />
			<RequestForm />
		</StyledRequest>
	);
}

export default Request;
