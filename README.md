Here this project is serach bar in which number of brands with their specific information like "heading","description","primary text", etc will be searched.
the search bar gives related ads by combining all the fields of every brand ads.

Steps after downloading the zip:
1. Move to "api" directory run command "npm install" after that "npm start" (it will start the server)
2. Move to "client" diectory ru command "npm install" after that "npm start"(it will start the client)
#Note: both api and client has to be running simultaneusly to get data...


this can be achieved in some ways , i have chosen one of it.
#Here i have 2 sections : 
#1.API
#2.Client

#In API folder i have created a server node.js and it will render the data from mongoDB collection and helps to give data to client.
In Server side i have used PORT:5000 to pass the data.

#Client side i have used "AXIOS" to fetch data from api and also used useEffect hook to render the data in every change in the search query by denoting "query"as the depedent variable.

SO this is a short information about the project.
If there is any query regarding this kindly ping 
#mailto: nagachandanp@gmail.com
