import axiosInstance from "./axiosinstance";

class CharactersService {
	async listarPersonagens() {
		const response = await axiosInstance.get("character");
		return response;
	}
}

export default new CharactersService();
