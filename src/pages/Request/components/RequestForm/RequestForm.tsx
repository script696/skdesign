import styled from "styled-components/macro";
import { Field, Form, Formik } from "formik";
import { Accordion, AccordionDetails, AccordionSummary, FormControl, Grid, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { FormDropDown, FormTextField } from "../../../../components";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import cities from "../../../../utils/jsonData/cities.json";
import sources from "../../../../utils/jsonData/sources.json";
import { REQUEST_VALID_SCHEMA } from "../../../../utils";
import { useAppDispatch, useAppSelector } from "../../../../hooks/reduxHooks/reduxHooks";
import { fetchRequest } from "../../../../store/request/actions";
import FormPhoneField from "../../../../components/phone/phone";
import { useDispatch } from "react-redux";

const StyledRequestForm = styled.div`
	width: 440px;
	padding: 40px 30px;
	box-shadow: 0px 5px 20px rgba(53, 50, 56, 0.14);
	border-radius: 8px;
	display: flex;
	flex-direction: column;
`;

const initialValues = {
	name: "",
	number: "",
	email: "",
	link: "",
	city: "",
	sources: "",
	company: "",
	recipient: "",
};

const RequestForm = () => {
	const { isPreloader } = useAppSelector((state) => state.RequestReducer);
	const dispatch = useDispatch();

	return (
		<StyledRequestForm>
			<Formik
				initialValues={initialValues}
				validationSchema={REQUEST_VALID_SCHEMA}
				onSubmit={async (values, { resetForm }) => {
					dispatch(fetchRequest(values, resetForm));
				}}
			>
				{({ values, errors, isValid, dirty }) => (
					<Form>
						<Grid container rowSpacing={2.5} columnSpacing={{ xs: 2.5 }}>
							<Grid item xs={6}>
								<Field component={FormTextField} name="name" label="Ваше имя" fullWidth />
							</Grid>
							<Grid item xs={6}>
								<Field component={FormPhoneField} name="number" label="Номер телефона" fullWidth />
							</Grid>
							<Grid item xs={6}>
								<Field component={FormTextField} name="email" label="E-mail" fullWidth />
							</Grid>
							<Grid item xs={6}>
								<Field component={FormTextField} name="link" label="Ссылка на профиль" fullWidth />
							</Grid>
							<Grid item xs={12}>
								<FormControl fullWidth>
									<FormDropDown label="Выберите город?" name="city" data={cities} />
								</FormControl>
							</Grid>
							<Grid item xs={12}>
								<Field
									component={FormTextField}
									name="company"
									label="Название организации/студии"
									fullWidth
								/>
							</Grid>
							<Grid item xs={12}>
								<Accordion elevation={0}>
									<AccordionSummary
										expandIcon={<ExpandMoreIcon />}
										aria-controls="panel1a-content"
										id="panel1a-header"
									>
										<Typography>Скрыть дополнительные поля</Typography>
									</AccordionSummary>
									<AccordionDetails>
										<Grid container rowSpacing={2.5}>
											<Grid item xs={12}>
												<Field component={FormTextField} name="recipient" label="Получатель" fullWidth />
											</Grid>
											<Grid item xs={12}>
												<FormControl fullWidth>
													<FormDropDown label="Откуда узнали про нас?" name="sources" data={sources} />
												</FormControl>
											</Grid>
										</Grid>
									</AccordionDetails>
								</Accordion>
							</Grid>
							<Grid item xs={12}>
								<LoadingButton
									loading={isPreloader}
									type="submit"
									variant="contained"
									disabled={!dirty || !isValid}
									color="primary"
									fullWidth
								>
									{!isPreloader && "Отправить заявку"}
								</LoadingButton>
							</Grid>
						</Grid>
					</Form>
				)}
			</Formik>
		</StyledRequestForm>
	);
};

export default RequestForm;
