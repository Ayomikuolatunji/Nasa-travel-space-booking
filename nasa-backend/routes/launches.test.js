const requests = require('supertest');
const express = require('express');

const app = express();

describe("GET LAUNCHES",()=>{
    test('should test launch get api', () => { 
      const request=requests(app)
   })
})

describe("POST LAUNCH",()=>{
    test('should post request to be sucess of 201', () => { 

    })
    test('should error when post a launch with statusCode 400 with', () => { 
        
    })
    test('should error when post a launch with statusCode 400 with', () => { 
        
    })
})