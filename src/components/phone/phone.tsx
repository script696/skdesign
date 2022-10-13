import { useCallback, useState } from "react";
import InputMask from "react-input-mask";
import { fieldToTextField, TextFieldProps } from "formik-mui";
import MuiTextField from "@mui/material/TextField";

const FormPhoneField = (props: TextFieldProps) => {
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
	const { value, label }: any = fieldToTextField(props);

	return (
		<InputMask mask="+7(999) 999-99-99" onChange={onChange} value={value}>
			<MuiTextField type="tel" label={label} />
		</InputMask>
	);
};

export default FormPhoneField;
