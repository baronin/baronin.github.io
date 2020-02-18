/* Техническое задание

Мяу! Напиши программу, которая находит периметр треугольника через катеты.

Длины катетов указаны в метрах и хранятся в переменных firstLeg и secondLeg.

Найди гипотенузу по формуле a = sqrt(b^2 + c^2) и запиши результат в переменную hypotenuse. Для того чтобы найти квадратный корень числа, используй Math.sqrt(). Результат округляй с помощью Math.round().

Найди периметр треугольника, сложив длины катетов и гипотенузы. Результат запиши в переменную perimeter.

*/
var firstLeg = 300;
var secondLeg = 700;
var test;
function Kateti(b,c){
  return test = Math.round(Math.sqrt((b * b) + (c * c)))
  } 
  var hypotenuse = Kateti(firstLeg, secondLeg);
  console.log(hypotenuse)
  
  var perimeter = hypotenuse + firstLeg + secondLeg;
  console.log(perimeter)


