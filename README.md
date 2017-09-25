# JavaScript Workshop SSDD 2017

Presentation: https://oyron.github.io/ssdd-js

### Prerequisites
You need NodeJS installed on your computer. NodeJS can be installed from: https://nodejs.org/en/download

Please note that you need to configure proxy settings, if you are running NodeJS in the Statoil network: 
```
npm config set proxy "http://www-proxy.statoil.no:80"
npm config set https-proxy "http://www-proxy.statoil.no:80" 
```

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
See example test in `src/lib/answer.js` and `src/spec/answer-spec.js` 
Create similiar structure for fizzbuzz.
**NB! Remember to start by writing a (failing) test**

Command to run the tests: `npm test` 
   
2. **Web service returning complete FizzBuzz result**

Create a web service returning a JSON array containing the complete FizzBuzz 
result (from 1 to 100). Extend the skeleton web server code in `server.js`.
Start by running the server and calling the web service from a web browser.

Command to run the server: `npm start`

3. **Call the web service from the client**

Review the skeleton client in `client/index.html` and `client/js/functions.js`
Complete the `getFizzBuzz()` method and display the result in web page.
Then format the result. Try to colorized the output, e.g. by using `<span style="color: ...">...</span>`
