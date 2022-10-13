export type IFormDropDown = {
	label: string;
	name: string;
	data: Array<{ id: string; name: string }>;
	multiple?: boolean;
	isDivider?: boolean;
};
