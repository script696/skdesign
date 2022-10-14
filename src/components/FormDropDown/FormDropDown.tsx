import React from "react";
import { Select } from "formik-mui";
import { MenuItem } from "@mui/material";
import { Field } from "formik";

type IFormDropDown = {
	label: string;
	name: string;
	data: Array<{ id: string; name: string }>;
	multiple?: boolean;
};

function FormDropDown({ label, name, data, multiple = false }: IFormDropDown) {
	return (
		<Field component={Select} label={label} name={name} multiple={multiple} inputProps={{ name, id: name }}>
			{data?.map(({ id, name }) => (
				<MenuItem key={id} value={id}>
					{name}
				</MenuItem>
			))}
		</Field>
	);
}

export default FormDropDown;
