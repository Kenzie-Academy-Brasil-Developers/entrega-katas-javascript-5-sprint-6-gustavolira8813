// implemente aqui as funções de teste

function reverseString(str){
    return str.split('').reverse().join('')
}
function testReverseString1(){
    let result = reverseString("Kenzie Academy");
    let expected = "ymedacA eizneK";
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
function testReverseString2(){
    let result = reverseString('Hello World')
    let expected = 'dlroW olleH'
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
testReverseString1()
testReverseString2()
// console.log(reverseString('Hello World'))



function reverseSetence(str){
    return str.split(' ').reverse().join(' ')
}
function testReverseSentence1(){
    let result = reverseSetence('Meu nome é Gustavo')
    let expected = 'Gustavo é nome Meu'
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
function testReverseSentence2(){
    let result = reverseSetence('O curso da Kenzie Academy me faz pensar fora da caixinha')
    let expected = 'caixinha da fora pensar faz me Academy Kenzie da curso O'
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
testReverseSentence1()
testReverseSentence2()
// console.log(reverseSetence('O curso da Kenzie Academy me faz pensar fora da caixinha'))



function testMinimumValue(arr){
   let lista = arr.sort((a, b)=>a-b)
   return lista[0]
}
function testMinimumValue1(){
    let result = testMinimumValue([25,1,34,4567,2,8,56,234,-2,-34,-70,45,7,-1])
    let expected = -70
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
function testMinimumValue2(){
    let result = testMinimumValue([5,6,8,2,8,2,9,3,3,67,8,23,56734,2,234])
    let expected = 2
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
testMinimumValue1()
testMinimumValue2()
// console.log(testMinimumValue([5,4,2,6,3,7,9]))



function testMaximumValue(arr){
    let lista = arr.sort((a, b)=>b-a)
    return lista[0] 
}
function testMaximumValue1(){
    let result = testMaximumValue([3,4,7,21,6,2,35,234,5,235,75,23,5345,3452,234,564])
    let expected = 5345
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
function testMaximumValue2(){
    let result = testMaximumValue([-30,-23,-34,-340,-4,-3499])
    let expected = -4
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
testMaximumValue1()
testMaximumValue2()
// console.log(testMaximumValue([1,2,6,4,8,5,9,3]))



function testCalculateRemainder(a, b){
    return a % b
}
function testCalculateRemainder1(){
    let result = testCalculateRemainder(900, 200)
    let expected = 100
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
function testCalculateRemainder2(){
    let result = testCalculateRemainder(1200, 400)
    let expected = 0
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
testCalculateRemainder1()
testCalculateRemainder2()

// console.log(testCalculateRemainder(10, 2))


function testDistinctValues(arr){
    let final = []
    for(let i = 0; i < arr.length; i++){
        if(final.indexOf(arr[i]) === -1){
            final.push(arr[i])
        }
    }
    return final.toString()
}
function testDistinctValues1(){
    let result = testDistinctValues([1,3,4,6,3,1,6,3,6,2,1,6,87,2,7,2,34,7,2,1])
    let out = 0
    let expected = [1,3,4,6,2,87,7,34].toString()
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
function testDistinctValues2(){
    let result = testDistinctValues([1,1,1,1,4,6,5,9,5,4,78,5,89,5,34,9,5,324,5,7,4,45,78,4,345,7,56,23,34,34])
    let expected = [1,4,6,5,9,78,89,34,324,7,45,345,56,23].toString()
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
testDistinctValues1()
testDistinctValues2()
// console.log(testDistinctValues([1,3,4,6,3,1,6,3,6,2,1,6,87,2,7,2,34,7,2,1]))


function testCountValues(arr){
    let output = ''
    let obj = {}
    let atr = []
    for(let i = 0; i < arr.length; i++){
        if(obj[arr[i]] === undefined){
            obj[arr[i]] = 1
            atr.push(arr[i])
        }else{
            obj[arr[i]]++
        }
        
    }
        for(let i = 0; i < atr.length; i++){
            output += `${atr[i]}(${obj[atr[i]]})  `
        }
        
    return output.toString()
}
function testCountValues1(){
    let result = testCountValues([1,1,1,2,2,2,2,4,4,5,7,9,9,9,0])
    let expected = '1(3)  2(4)  4(2)  5(1)  7(1)  9(3)  0(1)  '
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
function testCountValues2(){
    let result = testCountValues([2,3,2,3,2,5,6,78,3,76,3,7,3,7,3,56,8,5,45,78,4,75,4,75,34,3,5,3,43,34])
    let expected = '2(3)  3(8)  5(3)  6(1)  78(2)  76(1)  7(2)  56(1)  8(1)  45(1)  4(2)  75(2)  34(2)  43(1)  '
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
testCountValues1()
testCountValues2()
// console.log(testCountValues([1,1,1,2,2,2,2,4,4,5,7,9,9,9,0]))




function testEvaluateExpression(str, obj){
    let exp = str.split(' ')
    let num =  Number(exp)

    for(let i = 0; i < exp.length; i++){
        if(i % 2 === 0){
            exp.splice(i,1,obj[exp[i]])
        }
    }
   return eval(exp.join(''))
}
function testEvaluateExpression1(){
    let result =  testEvaluateExpression('a + b + c - d', obj = { a : 1, b : 7, c : 3, d : 14} )
    let expected = -3
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
function testEvaluateExpression2(){
    let result = testEvaluateExpression('a - b + c + d + e - f - g', obj = { a : 5, b : 7, c : 10, d : 18, e : 15, f : 9, g : 3})
    let expected = 29
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}



testEvaluateExpression1()
testEvaluateExpression2()