const requests = require('supertest');
const app=require("../server")

describe("GET LAUNCHES",()=>{
    test('should test launch get api with statuscode 200', async() => { 
      const res=await requests(app)
      .get("/launches")
      .set('Accept', 'application/json')
      expect(200)    
   })
})

describe("POST LAUNCH",()=>{
    const completLaunchData={
        mission:"kepler Exploration X",
        rocket:"Explorer IS1",
        destination:"Kepler-442 b",
    }
    const launchData={
        mission:"kepler Exploration X",
        rocket:"Explorer IS1",
        destination:"Kepler-442 b",
    }

    test('should test post launch api with statuscode 200', async() => { 
        const res=await requests(app)
        .post("/launches")
        .set('Accept', 'application/json')
        .send(completLaunchData)
        expect(completLaunchData).toMatchObject(launchData)    
    //  })

})

})