import { Post, User } from "./models";
import { connectToDb } from "./utils";

export const getPosts = async () => {
	try {
		connectToDb;
		const posts = await Post.find();
		return posts;
	} catch (error) {
		console.log(error);
		throw new Error("Failed to fetch data post");
	}
};

export const getPost = async (slug) => {
	try {
		connectToDb;
		const post = await Post.find({ slug });
		return post;
	} catch (error) {
		console.log(error);
		throw new Error("Failed fetch one post");
	}
};

export const getUser = async (id) => {
	try {
		connectToDb;
		const user = await User.findById(id);
		return user;
	} catch (error) {
		console.log(error);
		throw new Error("Failed to fetch user");
	}
};

export const getUsers = async () => {
	try {
		connectToDb;
		const users = await User.find();
		return users;
	} catch (error) {
		console.log(error);
		throw new Error("Failed to fetch all Users");
	}
};
