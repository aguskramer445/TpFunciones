//Punto 1
function cuadrado(num)
{
    return num * num
}
console. log (cuadrado(5))

//Punto 2
function cubo(num)
{
    return num * num * num
}
console.log (cubo(5))

//Punto a
function operacionA(x)
{
    let resultado = cuadrado(x) - x - 10
    return resultado
}

//Punto b
function operacionB(x)
{
    let resultado = (x-3) * 2
    return resultado
}

//Punto c
function operacionC(x)
{
    let resultado = x * cuadrado(x) + 20
    return resultado
}

//Punto d
function operacionD(x)
{
    let resultado = (x/2) + 5
    return resultado
}

//Punto e
function operacionE(x)
{
    let resultado = cubo(x) + cuadrado(x) + 10
    return resultado
}

//Punto f
function operacionF(x)
{
    let resultado = (x*10) * 5
    return resultado
}