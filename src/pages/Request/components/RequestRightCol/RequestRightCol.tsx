import styled from "styled-components/macro";
import { Field, Form, Formik } from "formik";
import { Autocomplete, TextField, Select, Switch, ToggleButtonGroup } from "formik-mui";
import { RequiredTextField } from "../../../../components";
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Button,
	FormControl,
	Grid,
	Menu,
	MenuItem,
	Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import cities from "../../../../utils/cities.json";
import sources from "../../../../utils/sources.json";

const StyledRequestRightCol = styled.section`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100%;
`;

const StyledRequestForm = styled.div`
	width: 440px;
	padding: 40px 30px;
	box-shadow: 0px 5px 20px rgba(53, 50, 56, 0.14);
	border-radius: 8px;
	display: flex;
	flex-direction: column;
`;

const RedditTextField = styled((props) => <TextField InputProps={{ disableUnderline: true }} {...props} />)(
	({ theme }) => ({
		"& .MuiFilledInput-root": {
			border: "1px solid #e2e2e1",
			overflow: "hidden",
			borderRadius: 4,
			backgroundColor: theme.palette.mode === "light" ? "#fcfcfb" : "#2b2b2b",
			transition: theme.transitions.create(["border-color", "background-color", "box-shadow"]),
			"&:hover": {
				backgroundColor: "transparent",
			},
			"&.Mui-focused": {
				backgroundColor: "transparent",
				borderColor: theme.palette.primary.main,
			},
		},
	})
);

function RequestRightCol() {
	return (
		<StyledRequestRightCol>
			<StyledRequestForm>
				<Formik
					initialValues={{ name: "", number: "", email: "", link: "", city: [], sources: [], company: "" }}
					onSubmit={async (values) => {
						console.log(values);
					}}
				>
					{({ values }) => (
						<Form>
							<Grid container rowSpacing={2.5} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
								<Grid item xs={6}>
									<Field component={RequiredTextField} name="name" type="text" label="Ваше имя" />
								</Grid>
								<Grid item xs={6}>
									<Field component={RequiredTextField} name="number" type="text" label="Номер телефона" />
								</Grid>{" "}
								<Grid item xs={6}>
									<Field component={RequiredTextField} name="email" type="text" label="E-mail" />
								</Grid>
								<Grid item xs={6}>
									<Field component={RequiredTextField} name="link" type="text" label="Ссылка на профиль" />
								</Grid>
								<Grid item xs={12}>
									<FormControl fullWidth>
										<Field
											component={Select}
											type="text"
											label="Выберите город"
											name="city"
											multiple={false}
											inputProps={{ name: "city", id: "city" }}
										>
											{cities?.map(({ id, name }) => (
												<MenuItem key={id} value={id}>
													{name}
												</MenuItem>
											))}
										</Field>
									</FormControl>
								</Grid>
								<Grid item xs={12}>
									<FormControl fullWidth>
										<Field
											component={RequiredTextField}
											name="company"
											type="text"
											label="Название организации/студии"
										/>
									</FormControl>
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
											<FormControl fullWidth>
												<Field
													component={RequiredTextField}
													name="recipient"
													type="text"
													label="Получатель"
												/>
											</FormControl>
											<FormControl fullWidth>
												<Field
													component={Select}
													type="text"
													label="Выберите город"
													name="sources"
													multiple={true}
													inputProps={{ name: "tags", id: "tags" }}
												>
													{sources?.map((source) => (
														<MenuItem key={Math.random()} value={Math.random()}>
															{source}
														</MenuItem>
													))}
												</Field>
											</FormControl>
										</AccordionDetails>
									</Accordion>
								</Grid>
								<Grid item xs={12}>
									<FormControl fullWidth>
										<Button type="submit" variant="contained" color="primary" disableElevation>
											Отправить заявку
										</Button>
									</FormControl>
								</Grid>
							</Grid>
						</Form>
					)}
				</Formik>
			</StyledRequestForm>
		</StyledRequestRightCol>
	);
}

export default RequestRightCol;
