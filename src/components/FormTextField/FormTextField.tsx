import { ChangeEvent, useCallback } from "react";
import { fieldToTextField, TextFieldProps } from "formik-mui";
import MuiTextField from "@mui/material/TextField";

const FormTextField = (props: TextFieldProps) => {
	const {
		form: { setFieldValue },
		field: { name },
	} = props;
	const onChange = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => {
			const { value } = e.target;
			setFieldValue(name, value ? value.toUpperCase() : "");
		},
		[setFieldValue, name]
	);
	return <MuiTextField {...fieldToTextField(props)} onChange={onChange} />;
};

export default FormTextField;
