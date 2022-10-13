import { useCallback } from "react";
import { fieldToTextField, TextFieldProps } from "formik-mui";

import MuiTextField from "@mui/material/TextField";

const RequiredTextField = (props: TextFieldProps) => {
	const {
		form: { setFieldValue },
		field: { name },
	} = props;
	const onChange = useCallback(
		(e: any) => {
			const { value } = e.target;
			setFieldValue(name, value ? value.toUpperCase() : "");
		},
		[setFieldValue, name]
	);
	return <MuiTextField {...fieldToTextField(props)} onChange={onChange} required />;
};

export default RequiredTextField;
