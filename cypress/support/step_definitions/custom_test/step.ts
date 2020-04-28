import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given("我有{color}的鸡蛋", function(input) {
  console.log(1, input)
});

Given("我有{color}的书包", function(input) {
  console.log("颜色", input)
});