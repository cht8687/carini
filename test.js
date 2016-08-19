var carini = require('./');
var test = require('tape');

test('carini', function(t) {
  t.plan(5);
  t.strictEqual(carini('examle???string.@@!!', ['?','@']), 'examlestring.!!');
  t.strictEqual(carini('examle&%?string.@!!', ['?','@','&', '!', '.', '%']), 'examlestring');
  t.strictEqual(carini('cht8687@gmail.com', ['.','@']), 'cht8687gmailcom');
  t.strictEqual(carini('% % % t e s t $ $ $ ', ['%',' ', '$']), 'test');
  t.strictEqual(carini('% % %t e s t$ $ $ ', ['%t',' ', '%', '$', 't']), 'es');
});
