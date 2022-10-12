import styled from "styled-components/macro";
import logo from "../../../../assets/images/sk-design-logo.svg";

const StyledRequestRightCol = styled.section`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100%;
`;

const StyledLogo = styled.img`
	width: 446px;
	height: 446px;
	border: 1px solid red;
`;

function RequestRightCol() {
	return (
		<StyledRequestRightCol>
			<StyledLogo />
		</StyledRequestRightCol>
	);
}

export default RequestRightCol;
