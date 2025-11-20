function print(text) {
  document.getElementById("resultado").innerText += text + "\n";
}

document.getElementById("boton").onclick = ejecutarFunciones;

// 1. Suma
function suma(num1, num2) {
  print("1) Suma: " + (num1 + num2));
}

// 2. Cuadrado
function cuadrado(num) {
  print("2) Cuadrado: " + (num * num));
}

// 3. Área rectángulo
function areaRectangulo(base, altura) {
  print("3) Área del rectángulo: " + (base * altura));
}

// 4. Mayor o menor
function verificarEdad(edad) {
  if (edad >= 18) print("4) Mayor de edad");
  else print("4) Menor de edad");
}

// 5. Consecutivos
function consecutivos(n) {
  print("5) Números consecutivos:");
  for (let i = 1; i <= n; i++) {
    print(i);
  }
}

// 6. Array 5 items
function mostrarArray() {
  const array = ["A", "B", "C", "D", "E"];
  print("6) Elementos del array:");
  array.forEach(item => print(item));
}

// 7. Mayores a N
function mayoresA(n) {
  const numeros = [3, 10, 5, 20, 7, 15, 2, 30, 8, 12];
  print("7) Números mayores a " + n + ":");
  numeros.forEach(num => {
    if (num > n) print(num);
  });
}

// 8. Objeto
function mostrarObjeto() {
  const persona = { nombre: "Carlos", edad: 25, ciudad: "Bogotá" };
  print("8) Objeto persona:");
  print("Nombre: " + persona.nombre);
  print("Edad: " + persona.edad);
  print("Ciudad: " + persona.ciudad);
}

// 9. Array objetos
function mostrarArrayObjetos() {
  const personas = [
    { nombre: "Ana", edad: 20, ciudad: "Lima" },
    { nombre: "Luis", edad: 30, ciudad: "Quito" },
    { nombre: "Marta", edad: 22, ciudad: "Medellín" },
    { nombre: "Pedro", edad: 28, ciudad: "Santiago" }
  ];

  print("9) Lista de personas:");
  personas.forEach(p => {
    print("Nombre: " + p.nombre + " - Edad: " + p.edad + " - Ciudad: " + p.ciudad);
  });
}

// Ejecutar todas
function ejecutarFunciones() {
  document.getElementById("resultado").innerText = ""; // Limpia antes de mostrar
  suma(3, 5);
  cuadrado(4);
  areaRectangulo(5, 10);
  verificarEdad(16);
  consecutivos(5);
  mostrarArray();
  mayoresA(10);
  mostrarObjeto();
  mostrarArrayObjetos();
}
