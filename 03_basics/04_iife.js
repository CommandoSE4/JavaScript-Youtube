// Immediately Invoked Function Expressions (IIFE)


(function one()
{
    // named iife
    console.log(`DB Connected`);
})();

( (name) =>
{
    console.log(`DB Connected Two ${name}`);
})('Avinash')