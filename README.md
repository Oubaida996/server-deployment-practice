# server-deployment-practice  



## Heroku links  
1-https://obieda-server-deploy-prod.herokuapp.com/  

2-https://obieda-server-deploy-dev.herokuapp.com/  

## GitHub actions  
https://github.com/Oubaida996/server-deployment-practice/actions  

## Pull Request  
https://github.com/Oubaida996/server-deployment-practice/pull/1  


## My notes  
When I work with team ,I should test my code befroe added to main branch bu this thing need a lot of time to check my code from scratch to solve this issue I will use CICD contionous integration and continous dilevery and how I can do that firsteval we need to create file test in local machine to test my file and output from it like (server.js and server.test.js) and the name of folder that contains files test it should start and end by two underscore like (__test__) then we need install  some libraraies as jest and supertest after that we need to add jest inside scripts like ("test" :"jest ") this is in local machine what about CD you can do CD on github from action tab and choose a new workflow then   select a workflow Node.jS then press configure then you can add branches which need test then start commit and insert name test then confirm new file .


