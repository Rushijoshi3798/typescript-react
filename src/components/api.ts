import axios, {AxiosResponse} from "axios";
import { Todo } from "./constant";

// Get Request
export async function getTodo() {
    let res: AxiosResponse<Todo[]> = await axios.get("http://localhost:8080/todos");
    return res.data;
}

// Post Request
export const addTodo = async (title: string) => {
    let res: AxiosResponse<Todo> = await axios.post("http://localhost:8080/todos", {title, status: false});
    //console.log(res.data);
    return res.data;
    
}

// Patch Request
export const toggleTodo = async (id: number, status: boolean) => {
    let res: AxiosResponse<Todo> = await axios.patch(`http://localhost:8080/todos/${id}`, {
        status: !status
    })
    //console.log(res);
    return res.data
}

// Delete Request
export const deleteTodo = async (id: number) => {
    let res: AxiosResponse<Todo> = await axios.delete(`http://localhost:8080/todos/${id}`);
    //console.log(res);
    return res.status;
}


/*
There is an interesting thing to understand here,

let's suppose you are adding a todo using TodoInput & post request, But the TodoApp component is different & TodoInput Component is different , so TodoApp will not re-render after adding a todo, so you will not get the latest post request data to be fetched automatically to the UI. 

what can we do to solve this?

==> There are basically 2 methods.

1. Use the post response and add it to the todos in TodoApp. (used here as primary basis)
2. make another get request after successfull post request. (Written code in "second_method(get method)" file in components)

One important thing here to understand is that,

when it comes to the cost optimization - You must use the 1st method because it does not make any request to the server & in single post request you can add the data to UI.

But when it's Important to go with the perfectly secured way & no need to compromise with the updated secured data from server only & no need for cost optimization, you can use the 2nd method & use the get reuqest for doing the operation.

Here mainly I had used the 1st method. 
strength -> Less API calls, cost optimization
drawbacks -> lengthy code, scope left for optimization

But You can check the 2nd Method as well :-

********************************************************************************************

To check the Second Method just do One change -->
 In App.tsx,
  instead of --> import TodoApp from './components/TodoApp';
    Add      --> import TodoApp from './components/second_method(get_method)/TodoApp';

********************************************************************************************

*/


