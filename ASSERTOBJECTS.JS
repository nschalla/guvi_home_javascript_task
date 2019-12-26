var expected = {foo: 5, bar: 6};
var actual = {foo: 5, bar: 6}
alert(assertObjectsEqual(actual, expected));
function assertObjectsEqual(actual, expected)
{
if(JSON.stringify(actual) === JSON.stringify(expected))
{
    return "passed"
}
else
{
return "failed"
}
}