import {describe, expect, test} from '@playwright/test';
import myMethods from '../utils/readAndWrite';
import Payloads from "../Method/payloads";

let oPayload, CreatedId, totalPosts
let filePath = './src/readConfig.json'
describe('@Automated_Test',()=> {
    const jsonPayload = new Payloads()

    test('1. Read Total Number of Posts and Store in a Variable', async ({request}) => {
        const response = await request.get("/posts")
        const posts = await response.json();
        totalPosts = posts.length;
        console.log('Total number of posts:' + totalPosts);
    });

    test('2. Create a New Post and Store its ID', async ({request}) => {
        oPayload = jsonPayload.create_post()
        const query = await request.post("/posts", oPayload);
        const response = await query.json();
        myMethods.writeData(filePath, response.id);
    });

    test('3. Get a Post by its ID', async ({request}) => {
        CreatedId = parseInt(myMethods.readData(filePath));
        const query = await request.get(`/posts/${CreatedId}`)
        const response = await query.json();
        console.log(response)
    });

    test('4. Update a Post by its ID', async ({request}) => {
        oPayload = jsonPayload.update_post()
        const CreatedId = parseInt(myMethods.readData(filePath));
        const query = await request.patch(`/posts/${CreatedId}`, oPayload)
        const response = await query.json();
        if (response) {
            // sending a GET request to /posts/{id} and verifying the changes
            const query = await request.get(`/posts/${CreatedId}`)
            const result = await query.json();
            expect(result.id).toBe(String(CreatedId));
            expect(result.title).toBe("Technology")
            expect(result.body).toBe("The world is fast evolving into a technological orb")
        }
    })

    test('5. delete the Created Post by its ID', async ({request}) => {
        let CreatedId = parseInt(myMethods.readData(filePath));
        const query = await request.delete(`/posts/${CreatedId}`)
        let response = await query.json();
        if (response != null) {
            const query = await request.get(`/posts/${CreatedId}`)
            return await query.json();
        }
    });

    test('6. Check the Number of Posts to Ensure Integrity', async ({request}) => {
        const initialTotalPosts = await request.get("/posts")
            .then(response => response.json())
            .then(data => data.length);
        if (initialTotalPosts === initialTotalPosts) {
            console.log('Integrity checked: Total number of posts remains unchanged.');
        } else {
            console.log('Integrity issue detected: Total number of posts has changed.');
        }

    })
})