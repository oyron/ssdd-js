# JavaScript Workshop SSDD 2017

Presentation: https://oyron.github.io/ssdd-js

### Prerequisites
You need NodeJS installed on your computer. NodeJS can be installed from: https://nodejs.org/en/download


### Installation instructions
1. Clone Git repo or Download Zip file
2. In directory `src`, run `npm install`


### FizzBuzz
FizzBuzz is a program that prints the numbers from 1 to 100.  
For multiples of three, “Fizz” is printed instead of the number.  
For multiples of five, “Buzz” is printed.  
For multiples of both three and five, “FizzBuzz" is printed.


### Tasks
1. **Function `fizzBuzz(number)`.**

Create function `fizzBuzz(number)` using TDD. 
See example in `src/lib/answer.js` and `src/spec/answer-spec.js`   
Create similiar structure for fizzbuzz.  
**NB! Remember to start by writing a (failing) test**

Command to run the tests: `npm test` 
   
2. **Web service returning complete FizzBuzz result**

Create a web service returning a JSON array containing the complete FizzBuzz 
result (from 1 to 100).  
Extend the skeleton web server code in `server.js`, by
calling the function created in step 1.  
Start by running the server and verify 
that you are able to call the web service from a web browser.

Command to run the server: `npm start`

3. **Call the web service from the client**

Call the web service from the web client and display it in a easily readable way.  
Start by reviewing the skeleton client in `client/index.html` and `client/js/functions.js`  
Complete the `getFizzBuzz()` method and display the result the web page.  
Then format the result. Try to colorize the output, e.g. by using 
`<span style="color: ...">...</span>`


### Misc
Note that if you are running within the Statoil network you need to configure proxy settings: 
```
npm config set proxy "http://www-proxy.statoil.no:80"
npm config set https-proxy "http://www-proxy.statoil.no:80" 
```