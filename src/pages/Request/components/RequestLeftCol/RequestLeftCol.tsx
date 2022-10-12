import styled from "styled-components/macro";
import logo from "../../../../assets/images/sk-design-logo.svg";

const StyledRequestLeftCol = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100%;
`;
const StyledTitle = styled.h2`
	all: unset;
	margin-bottom: 40px;
`;
const StyledContentColumn = styled.div`
	max-width: 940px;
	display: flex;
	flex-direction: column;
	gap: 15px;
`;
const StyledLogo = styled.img`
	height: 70px;
`;
const StyledParagraph = styled.p`
	all: unset;
`;

function RequestLeftCol() {
	return (
		<StyledRequestLeftCol>
			<StyledLogo src={logo} />
			<StyledTitle>Оставьте заявку и станьте частью нашей команды</StyledTitle>
			<StyledContentColumn>
				<StyledParagraph>
					Компания SK Design приглашает к взаимовыгодному сотрудничеству креативных дизайнеров, архитекторов и
					декораторов, дизайн-бюро и интерьерные студии — все, кто дизайн интерьера сделали своим призванием.
				</StyledParagraph>
				<StyledParagraph>
					Партнерство мы видим как доверительные отношения, основанные на честности реализации бизнес идей в
					сфере создания и продаж современной, качественной, удобной, функциональной и эксклюзивной мебели.
				</StyledParagraph>
				<StyledParagraph>
					Ознакомиться с проектами можете в нашем портфолио. Если Вы оформляете интерьеры жилых или
					коммерческих помещений — мы с радостью поможем Вам: составим уникальные условия сотрудничества,
					предоставим 3D модели (уточняйте у менеджеров) и разработаем коммерческое предложение к Вашему
					проекту или изображениям.
				</StyledParagraph>
			</StyledContentColumn>
		</StyledRequestLeftCol>
	);
}

export default RequestLeftCol;
