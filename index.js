let summarizeBasket = (prices, products) => {
  if(!products || !products.length){
    return {
      prices :0,
      countArticles :0,
      countProducts :0
    };
  }else if(products.length === 1) {
      // Traitement du panier.
      let price = prices[products[0]];

      return {
        prices : price,
        countArticles : 1,
        countProducts : 1
      }; // Fin du return
    }else {
      return 'TO BE CONTINUED';
    }// Fin du if
  }// Fin duu else
}// Fin de la fonction

module.exports = {
  summarizeBasket: summarizeBasket
};
//
// myWonderfulFunction(prices, products){
//   var price = 0;
//   var countArticles = products.length();
//   var countProducts = {};
//
//   var position = 0;
//
//   // Parcourt du panier
//   foreach(art is products){
//
//     // Recherche du produit
//     if(countProducts.find(art)){
//
//     }else{
//
//     }
//     // Récupération du prix du produit
//     price += products.find(art);
//   }
// };
// // should return
// { price: 25, countArticles: 10, countProducts: 4 }
