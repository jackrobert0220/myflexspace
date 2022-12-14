import tellMyFlexSpaceTo from "./axios.config";
// tellMyFlexSpaceTo is the instance of axios.create we created and includes the insance methods we need: .get .post .put .delete and others listed in the docs.

const posts = "/posts";

const getAll = () => {
	return tellMyFlexSpaceTo.get(`${posts}`);
};

const get = (id) => {
	return tellMyFlexSpaceTo.get(`${posts}/${id}`);
};

const create = (data) => {
	return tellMyFlexSpaceTo.post(`${posts}`, data);
};

const update = (id, data) => {
	return tellMyFlexSpaceTo.put(`${posts}/${id}`, data);
};

const destroy = (id) => {
	return tellMyFlexSpaceTo.delete(`${posts}/${id}`);
};

// you can only export default when there's ONE thing to export
export { getAll, get, create, update, destroy };
