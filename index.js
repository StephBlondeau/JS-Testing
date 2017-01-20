let summarizeBasket = (prices, products) => {
  if(!products || !products.length){
    return {
      prices :0,
      countArticles :0,
      countProducts :0
    };
  } else {
    // Traitement du panier pour 1 produit
    let price = 0;

    products.forEach(function(product) {
        price += prices[product];
    })

    return {
      prices : price,
      countArticles : products.length,
      countProducts : products.length
    }; // Fin du return
  }// Fin du else
}// Fin de la fonction

module.exports = {
  summarizeBasket: summarizeBasket
};

// let summarizeBasket = (prices, products) => {
//   if(!products || !products.length){
//     return {
//       prices :0,
//       countArticles :0,
//       countProducts :0
//     };
//   }else if(products.length === 1) {
//       // Traitement du panier.
//       let price = prices[products[0]];
//
//       return {
//         prices : price,
//         countArticles : 1,
//         countProducts : 1
//       }; // Fin du return
//     }else if(products.length === 2){
//       // Traitement du panier.
//       let price = prices[products[0]] + prices[products[1]];
//
//       return {
//         prices : price,
//         countArticles : products.length,
//         countProducts : products.length
//       }; // Fin du return
//     }else {
//       return 'TO BE CONTINUED';
//     }// Fin du if
//   }// Fin duu else
// }// Fin de la fonction
//
// module.exports = {
//   summarizeBasket: summarizeBasket
// };
