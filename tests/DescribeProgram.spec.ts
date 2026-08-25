import {test,expect} from '@playwright/test';


// to run only tag level npx playwright  test  tests/DescribeProgram.spec.ts --grep "@LoginFeature"
test.describe('Login Test',{tag :'@LoginFeature'},() =>{
test('Login Test Script 1',async () => {

   console.log('Login Test Script 1');
})

test('Login Test Script 2',async () => {
    console.log('Login Test Script 2');

})
test('Login Test Script 3',async () => {

 console.log('Login Test Script 3');
})

test('Login Test Script 4',async () => {
 console.log('Login Test Script 4');

})
})

test.describe('Payment Test Cases',() =>{
    test('Payment Test Script 1', () =>{
      console.log('Payment Test Script 1 is running');
    })
   test('Payment Test Script 2', () =>{
            console.log('Payment Test Script 2 is running');
    })
      test('Payment Test Script 3', () =>{
           console.log('Payment Test Script 3 is running');
    }) })

    test.describe('Checkout Test Cases',{tag:['@smoke','@regression']},() =>{
    test('Checkout Test Script 1', () =>{
      console.log('Checkout Test Script 1 is running');
    })
   test('Checkout Test Script 2', () =>{
            console.log('Checkout Test Script 2 is running');
    })
      test('Checkout Test Script 3', () =>{
           console.log('Checkout Test Script 3 is running');
    })
})