import { defineParameterType } from "cypress-cucumber-preprocessor/steps";

defineParameterType({  
    name: 'color',
    regexp: /红色|黄色|蓝色/,
    transformer: s => s
})

