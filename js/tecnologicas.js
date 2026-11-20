// solo cambio de preguntas ;ara probar
const tecnologicas = [
   {
        numb: 1,
        question: "¿Qué es la Programación Orientada a Objetos (POO)?",
        answer: "Un paradigma basado en objetos que combinan datos y comportamiento",
        options: ["Un lenguaje de programación", "Un paradigma basado en objetos que combinan datos y comportamiento", "Una base de datos relacional", "Un sistema operativo"]
    },
    {
        numb: 2,
        question: "¿Cuál es la diferencia principal entre una clase y un objeto?",
        answer: "La clase es una plantilla y el objeto es una instancia de ella",
        options: ["Son sinónimos", "La clase es una plantilla y el objeto es una instancia de ella", "El objeto es una plantilla y la clase es una instancia", "La clase solo contiene métodos"]
    },
    {
        numb: 3,
        question: "¿Qué principio de POO permite que un objeto tome muchas formas?",
        answer: "Polimorfismo",
        options: ["Encapsulamiento", "Herencia", "Polimorfismo", "Abstracción"]
    },
    {
        numb: 4,
        question: "¿Qué es el encapsulamiento?",
        answer: "Ocultar los detalles internos y exponer solo una interfaz pública",
        options: ["Unir varios archivos en uno", "Ocultar los detalles internos y exponer solo una interfaz pública", "Copiar código entre clases", "Compilar el programa"]
    },
    {
        numb: 5,
        question: "¿Qué palabra clave se usa en Java para heredar de una clase?",
        answer: "extends",
        options: ["implements", "inherits", "extends", "super"]
    },
    {
        numb: 6,
        question: "¿Qué es un constructor?",
        answer: "Un método especial que se ejecuta al crear un objeto",
        options: ["Un método que elimina objetos", "Un método especial que se ejecuta al crear un objeto", "Una variable global", "Un tipo de bucle"]
    },
    {
        numb: 7,
        question: "¿Qué modificador de acceso hace que un miembro sea visible solo dentro de su propia clase?",
        answer: "private",
        options: ["public", "protected", "private", "static"]
    },
    {
        numb: 8,
        question: "¿Qué es la sobrecarga de métodos (overloading)?",
        answer: "Varios métodos con el mismo nombre pero distinta firma",
        options: ["Reemplazar un método en una subclase", "Varios métodos con el mismo nombre pero distinta firma", "Duplicar variables", "Eliminar métodos heredados"]
    },
    {
        numb: 9,
        question: "¿Qué es la sobrescritura de métodos (overriding)?",
        answer: "Redefinir en una subclase un método heredado de la superclase",
        options: ["Crear un método nuevo sin relación", "Redefinir en una subclase un método heredado de la superclase", "Cambiar el nombre del método", "Convertir un método en estático"]
    },
    {
        numb: 10,
        question: "¿Qué es una clase abstracta?",
        answer: "Una clase que no puede instanciarse y puede tener métodos sin implementación",
        options: ["Una clase que siempre tiene main", "Una clase que no puede instanciarse y puede tener métodos sin implementación", "Una clase con solo variables", "Una interfaz gráfica"]
    },
    {
        numb: 11,
        question: "¿Qué es una interfaz en Java?",
        answer: "Un contrato que define métodos que las clases deben implementar",
        options: ["Una ventana gráfica", "Un contrato que define métodos que las clases deben implementar", "Una clase con atributos privados", "Un paquete de librerías"]
    },
    {
        numb: 12,
        question: "¿Qué estructura de datos funciona con el criterio LIFO (Last In, First Out)?",
        answer: "Pila (Stack)",
        options: ["Cola (Queue)", "Arreglo", "Pila (Stack)", "Árbol"]
    },
    {
        numb: 13,
        question: "¿Qué estructura de datos funciona con el criterio FIFO (First In, First Out)?",
        answer: "Cola (Queue)",
        options: ["Pila (Stack)", "Cola (Queue)", "Grafo", "Hash"]
    },
    {
        numb: 14,
        question: "¿Qué es una lista enlazada?",
        answer: "Una secuencia de nodos donde cada nodo apunta al siguiente",
        options: ["Un arreglo de tamaño fijo", "Una secuencia de nodos donde cada nodo apunta al siguiente", "Una tabla de base de datos", "Un archivo de texto"]
    },
    {
        numb: 15,
        question: "¿Cuál es la complejidad temporal promedio de buscar en una tabla hash?",
        answer: "O(1)",
        options: ["O(n)", "O(log n)", "O(1)", "O(n²)"]
    },
    {
        numb: 16,
        question: "¿Qué algoritmo de ordenamiento divide el problema en dos mitades recursivamente?",
        answer: "Merge Sort",
        options: ["Bubble Sort", "Selection Sort", "Merge Sort", "Insertion Sort"]
    },
    {
        numb: 17,
        question: "¿Cuál es la complejidad del Bubble Sort en el peor caso?",
        answer: "O(n²)",
        options: ["O(n)", "O(n log n)", "O(n²)", "O(1)"]
    },
    {
        numb: 18,
        question: "¿Qué es la recursividad?",
        answer: "Una función que se llama a sí misma",
        options: ["Un bucle infinito", "Una función que se llama a sí misma", "Una variable constante", "Un tipo de excepción"]
    },
    {
        numb: 19,
        question: "¿Qué es un árbol binario de búsqueda (BST)?",
        answer: "Un árbol donde la izquierda es menor y la derecha mayor que el nodo",
        options: ["Un árbol con solo hojas", "Un árbol donde la izquierda es menor y la derecha mayor que el nodo", "Una lista enlazada simple", "Una pila de enteros"]
    },
    {
        numb: 20,
        question: "¿Qué son las excepciones en programación?",
        answer: "Mecanismos para manejar errores en tiempo de ejecución",
        options: ["Errores de compilación obligatorios", "Mecanismos para manejar errores en tiempo de ejecución", "Comentarios del código", "Variables globales"]
    },
    {
        numb: 21,
        question: "¿Qué bloque se usa para capturar una excepción en Java?",
        answer: "catch",
        options: ["try", "catch", "finally", "throw"]
    },
    {
        numb: 22,
        question: "¿Qué significa static en Java?",
        answer: "El miembro pertenece a la clase, no a una instancia",
        options: ["Que es inmutable", "El miembro pertenece a la clase, no a una instancia", "Que es privado", "Que se ejecuta al final"]
    },
    {
        numb: 23,
        question: "¿Qué es this en Java?",
        answer: "Una referencia al objeto actual",
        options: ["Una clase externa", "Una referencia al objeto actual", "Un método estático", "Un puntero nulo"]
    },
    {
        numb: 24,
        question: "¿Qué patrón de diseño garantiza una única instancia de una clase?",
        answer: "Singleton",
        options: ["Observer", "Factory", "Singleton", "Adapter"]
    },
    {
        numb: 25,
        question: "¿Qué es la composición en POO?",
        answer: "Construir clases a partir de objetos de otras clases ('tiene un')",
        options: ["Heredar de varias clases", "Construir clases a partir de objetos de otras clases ('tiene un')", "Copiar métodos", "Un tipo de bucle"]
    },
    {
        numb: 26,
        question: "¿Qué es un getter?",
        answer: "Un método público que devuelve el valor de un atributo privado",
        options: ["Un método que borra datos", "Un método público que devuelve el valor de un atributo privado", "Un constructor", "Una variable estática"]
    },
    {
        numb: 27,
        question: "¿Qué es un setter?",
        answer: "Un método público que asigna valor a un atributo privado",
        options: ["Un método que guarda datos en disco", "Un método público que asigna valor a un atributo privado", "Un método privado de lectura", "Una clase hija"]
    },
    {
        numb: 28,
        question: "¿Qué es la abstracción en POO?",
        answer: "Modelar solo los aspectos relevantes, ocultando detalles innecesarios",
        options: ["Mostrar todo el código", "Modelar solo los aspectos relevantes, ocultando detalles innecesarios", "Usar solo variables públicas", "Evitar funciones"]
    },
    {
        numb: 29,
        question: "¿Qué es un generics (genéricos) en Java?",
        answer: "Tipos parametrizados que permiten clases o métodos de tipo flexible y seguro",
        options: ["Variables sin tipo", "Tipos parametrizados que permiten clases o métodos de tipo flexible y seguro", "Solo números enteros", "Una librería gráfica"]
    },
    {
        numb: 30,
        question: "¿Qué es la herencia múltiple?",
        answer: "Cuando una clase hereda de más de una superclase o interfaz",
        options: ["No existe ningún tipo de herencia", "Cuando una clase hereda de más de una superclase o interfaz", "Cuando un objeto crea otra clase", "Un error de compilación obligatorio"]
    }

];