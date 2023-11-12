// HERE WE STORE ALL LOGIC FOR API CONTROLL FOR THE TESTS
// Import the request from playwright
import {
  APIRequestContext,
  request,
} from '@playwright/test';

// Crete a class
class APIController {
    // Firstly declare the variable for APIRequestContext as private variable to not do the changes into it
    private fakerAPI: APIRequestContext;
    // Create initialization function
    async init() {
        // Add fakerAPI context instance within our class file using this
        this.fakerAPI = await request.newContext({
            baseURL: 'https://jsonplaceholder.typicode.com/'
        });
    }
    // Create getRandomUser method
    async getRandomUser() {
        const response = await this.fakerAPI.get('users');
        const responseBody = await response.json();
        // Create the randomize number method
        const randomNumber = Math.round(Math.random() * responseBody.length);
        // Choose the randomPerson from the response
        // eslint-disable-next-line prefer-const
        let randomPerson = responseBody[randomNumber];
        // Return the random person
        return randomPerson;
    }
    // Create the createUserTodo method
    async createUserTodo() { // The request body can be used as parameter passed inside the method parameters
        const todoResponse = await this.fakerAPI.post('/users/1/todos', {
            data: {
                "title": "My first lesson",
                "completed": false,
            }
        });
        const todoResponseBody = todoResponse.json();
        return todoResponseBody;
    }

}

// Export the API Controller to be visible globally
export default new APIController(); // Remember to call the API Controller to be working in the tests

