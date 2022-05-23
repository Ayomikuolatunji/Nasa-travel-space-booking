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
        launchDate:"December 27, 2030"
    }
    const launchData={
        mission:"kepler Exploration X",
        rocket:"Explorer IS1",
        destination:"Kepler-442 b",
        launchDate:"December 27, 2030"
    }

    // test('should test post launch api with statuscode 200', async() => { 
    //     const res=await requests(app)
    //     .post("/launches")
    //     .set('Accept', 'application/json')
    //     .send(completLaunchData)
    //     const launchRes=new Date(completLaunchData.launchDate).valueOf()
    //     const responseDate=new Date(res.body.launchDate).valueOf()
    //     expect(responseDate).toBe(launchRes)
    //     expect(res.body).toMatchObject(launchData)    
    //  })
    test('should error when post a launch with statusCode 400 with', () => { 
        
    })
    test('should error when post a launch with statusCode 400 with', () => { 
          
    })
})


describe('POST /users', function() {
    it('responds with json',async()=>{
        const res= requests(app)
        .post("/users")
        .set("Accept", "application.json")
        .send({name:"ayomiku"})
    });
  });