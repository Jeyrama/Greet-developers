/*
You will be given an array of objects representing data about developers 
who have signed up to attend the next coding meetup that you are organising.

Your task is to return an array where each object will have 
a new property 'greeting' with the following string value:
Hi < firstName here >, what do you like the most about < language here >?

Example:
  let list1 = [
    { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' }
  ]

Your function should return the following array:
[
  { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java',
    greeting: 'Hi Sofia, what do you like the most about Java?'
  }
]

Notes:
  The order of the properties in the objects does not matter.
  The input array will always be valid and formatted as in the example above.
*/