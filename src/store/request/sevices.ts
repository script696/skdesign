const fakeAPI = (data: any) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => resolve(JSON.stringify(data)), 4 * 1000);
	});
};

export default class RequestService {
	static sendFakeRequest(data: any): Promise<any> {
		return fakeAPI(data);
	}
}
