import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import Addition from "../../../../src/test/Addition"

let addition;

Given("初始值为{int}", function(number) {
  addition = new Addition()
  addition.setTo(number);
});

When("我增加{int}", function(number) {
  addition.incrementBy(number);
});

Then("结果为{int}", function(number) {
  expect(addition.variable).to.eql(number);
});
