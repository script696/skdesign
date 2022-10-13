import * as Yup from "yup";

export const REQUEST_VALID_SCHEMA = Yup.object().shape({
	name: Yup.string().min(2, "Слишком короткое").required("Обязательное поле"),
	number: Yup.string().required("Обязательное поле"),
	email: Yup.string()
		.required("Обязательное поле")
		.matches(/.+@.+\..+/, "Введите Email"),
	link: Yup.string().required("Обязательное поле").url("Введите ссылку").min(2, "Слишком короткое"),
});
