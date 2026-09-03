import {test,expect,Page} from '@playwright/test';
import { validateSchemaZod } from 'playwright-schema-validator';
import { z } from 'zod';


// Swagger Document :https://petstore.swagger.io/

//Syntax for creating an api request for post ==>   request.post(" ",{ data:{         }});

let petPayload ={
  "id": 3,
  "category": {
    "id": 103,
    "name": "Dogs3"
  },
  "name": "Puppy3",
  "photoUrls": [],
  "tags": [
    {
      "id": 203,
      "name": "branded3"
    }
  ],
  "status": "available"
};

const petSchema = z.object({
    id: z.number(),

    category: z.object({
        id: z.number(),
        name: z.string()
    }),

    name: z.string(),

    photoUrls: z.array(z.string()),

    tags: z.array(
        z.object({
            id: z.number(),
            name: z.string()
        })
    ),

    status: z.enum([
        'available',
        'pending',
        'sold'
    ])
});


let petid =petPayload.id;

test.describe('API Test',()=>
{

test("create a pet post method",async({request,page}) =>{

//create a api request
  let response =await request.post("https://petstore.swagger.io/v2/pet",{ data: petPayload});
  let responsebody = await response.json();
  let statuscode = await response.status();
console.log(statuscode );
console.log(responsebody);

let {id,name} = responsebody;
console.log("id",id);
console.log(name);
console.log(Object.entries(responsebody));
//Assertion
expect(statuscode).toBe(200);     
expect(response.ok()).toBeTruthy();

//Validate body
expect(petPayload.id).toBe(responsebody.id);
expect(petPayload.status).toBe(responsebody.status);
expect(petPayload).toEqual(responsebody);

//validate Schema
await petSchema.parse(petPayload);   // validate request body schema
await  validateSchemaZod({page},responsebody,petSchema);  //validate response body schema
});



test("Fetch Details Get request",async ({request,page}) => {
//create get api request
//dynamic calling petid value 
let getResponse = await request.get(`https://petstore.swagger.io/v2/pet/${petid}`);
let responsebody = await getResponse.json();
let statuscode = await getResponse.status();
expect(statuscode).toBe(200);
console.log(statuscode );
console.log(responsebody);      

//Schema Validation
await  validateSchemaZod({page},responsebody,petSchema);

})
})


test("updating a pet put method",async({request}) =>{

let UpdatedpetPayload ={ "id": 3,"category": {"id": 103,"name": "Dogs3"},"name": "PuppyDummy3",
  "photoUrls": [],
  "tags": [{  "id": 203, "name": "branded3"  }],"status": "Unavailable"   };
//create a api request for put
let updatedresponse =await request.put("https://petstore.swagger.io/v2/pet",{ data: UpdatedpetPayload});
let updatedresponsebody = await updatedresponse.json();
let statuscode = await updatedresponse.status();
console.log(statuscode );
console.log(updatedresponsebody);
//Assertion
expect(statuscode).toBe(200);     
expect(updatedresponse.ok()).toBeTruthy();
//Validate body
expect(UpdatedpetPayload.id).toBe(updatedresponsebody.id);
expect(UpdatedpetPayload.status).toBe(updatedresponsebody.status);
expect(UpdatedpetPayload).toEqual(updatedresponsebody);
})

//delete method 
//get method we used after delete 

//schema validation
//----> npm install -D playwright-schema-validator


//mocking api 
//authetication,autorization
//Dynamic data
//calling data from test data
