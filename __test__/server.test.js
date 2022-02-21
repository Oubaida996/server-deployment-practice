"use strict"

const server =require(`../server`);

const supertest =require(`supertest`);

const request =supertest(server.app);


describe('testing API server ' ,()=>{

    //you can use it ot test
it('test / home' ,async()=>{
      const response =await request.get('/');
      console.log(response);
      expect(response.text).toEqual("home route") ;

});

it('test /data', async()=>{
    const response = await request.get('/data');
    expect(typeof response.body).toEqual('object')
})


})


