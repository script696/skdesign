import { IfetchRequestData } from "./types";

const fakeAPI = (data: IfetchRequestData) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => resolve(JSON.stringify(data)), 2 * 1000);
	});
};

export default class RequestService {
	static sendFakeRequest(data: IfetchRequestData) {
		return fakeAPI(data);
	}
}
