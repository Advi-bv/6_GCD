Feature('GoogleSearch');

Scenario('test something',  ({ I }) => {

});


Scenario('GCD number' , ({ I }) => {
    I.amOnPage('file:///C:/Users/Civil/Desktop/gcd.html');
    I.wait('3');
    I.fillField("n1",8);
    I.fillField("n2",5);
    I.click('Get GCD');
    I.wait('4');



});