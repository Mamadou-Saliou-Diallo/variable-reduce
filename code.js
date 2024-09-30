// Définir un tableau de nombres
const nombres = [1, 2, 3, 4, 5,3,12, 13];

// Utiliser la méthode .reduce() pour sommer tous les nombres
const somme = nombres.reduce((accumulateur, nombre) => accumulateur + nombre, 0);

// Afficher le résultat
document.write(" La somme total est : ",somme); // 15
