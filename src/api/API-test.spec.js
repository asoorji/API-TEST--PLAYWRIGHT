import { test, expect, } from '@playwright/test';
import myMethods from '../utils/readAndWrite';
import Payloads from "../Methods/payloads";

import {config} from 'dotenv'
config()
const jsonPayload = new Payloads()


test('1. Read Total Number of Posts and Store in a Variable', async ({ request}) => {
  const data = await request.get("/posts")
  const posts = await data.json();
  const totalNumberOfPost = posts.length;
  console.log(totalNumberOfPost);
});

test('2. Create a New Post and Store its ID', async ({ request}) =>  {
    let theData = jsonPayload.create_post()
    const query = await request.post("/posts", theData);
    const result = await query.json();
    myMethods.writeData('./src/userData.json' ,result.id);
  });

test('3. Get a Post by its ID', async ({ request}) =>  {
    let CreatedId = parseInt(myMethods.readData('./src/userData.json'));
    const data = myMethods.readData("./src/payload/newData.json")


    const query = await request.get(`/posts/${CreatedId}`)
    const result = await query.json();
    if(result){
        expect(result.id).toBe(String(CreatedId));
        expect(result.title).toBe("The world");
        expect(result.body).toBe("Welcome to America");
    }

});

test('4. Update a Post by its ID', async ({ request }) =>  {
    let CreatedId = parseInt(myMethods.readData('./src/userData.json'));
    const query = await request.put(`/posts/${Number(CreatedId)}`,{
        data:{
            title: "hello",
            body: "wassup"
        }
    })
    let results = await query.json();
    if(results){
        let CreatedId2 = parseInt(myMethods.readData('./src/userData.json'));
        const query = await request.get(`/posts/${Number(CreatedId2)}`)
        const result = await query.json();
        console.log(result)
        expect(result.id).toBe(String(CreatedId2));
        expect(result.title).toBe("hello")
        expect(result.body).toBe("wassup")
    }
});

test('5. delete the Created Post by its ID', async ({ request }) =>  {
    let CreatedId = parseInt(myMethods.readData('./src/userData.json'));
    const query = await request.delete(`/posts/${Number(CreatedId)}`)
    let results = await query.json();
    if(results != null){
        const query = await request.get(`/posts/${Number(CreatedId)}`)
        const result = await query.json();
        console.log(result)
        expect(result.status).toBe(404);
    }
});

test('6. Check the Number of Posts to Ensure Integrity', async ({ request }) => {
    // Step 1: Send a GET request to /posts
    const initialData = await request.get("/posts");
    const initialPosts = await initialData.json();
    const initialTotalNumberOfPosts = initialPosts.length;

    // Step 2: Retrieve the current total number of posts from the response body
    const currentData = await request.get("/posts");
    const currentPosts = await currentData.json();
    const currentTotalNumberOfPosts = currentPosts.length;

    // Step 3: Compare the current total number of posts with the initial total number
    expect(currentTotalNumberOfPosts).toBe(initialTotalNumberOfPosts);
});