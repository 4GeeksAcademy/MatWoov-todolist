import React from "react";

//include images into your bundle
import { TodoList } from "./TodoList";
import { Reference } from "./Reference";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
		<TodoList />
		<Reference />
		</div>
	);
};

export default Home;
