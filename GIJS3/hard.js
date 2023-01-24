//Inside of a closure, create an object called pii (Personally Identifiable Information)that cannot be accessed directly. The object should have at least two properties:
 //name and ssn. Only the name property should be accessible, and it should be called through a public function. The ssn property should not be accessible at all. 
//Creating private objects and private properties helps you control who has access to what data and helps you prevent people who shouldn't see important info like 
//social security numbers from getting access to the data. You can use 'getName' or other get methods to access data that people might need. For example, people addressing a 
//package or email may need a customer's name, but they definitely shouldn't have access to their ssn.


const patient2 = (function() {
    let pii = {
        name: 'John',
        ssn: '123-45-6789'
    };
    return{
        getName: function() {
            return pii.name;
        },
        getSSN: function() {
            return pii.ssn;
        }
    }
})();

// Output: Undefined
console.log(patient2.names); 
// Output: Undefined
console.log(patient2.ssn); 
// Output: John
console.log(patient2.getName());
// Output: 123-45-6789
 console.log(patient2.getSSN()); 