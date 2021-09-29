var products = [
    //num,names, rs, availble
    [100, "oreo", 40, 50],
    [101, "fifty-fifty", 20, 60],
    [102, "borbourne", 40, 0],
    [103, "treat", 30, 10],
    [104, "arrowroot", 30, 0],
    [105, "moms-magic", 45, 10],

]

// //print number of items in shop

// console.log("number of items",products.length);

// //print  number of available  items

// //  products.map(availableitems=>availableitems[3]>0?console.log ("available items:",availableitems[1]):"");(ith filter aan)
//   let avl_pro=0
//   for(let item of products){
//      if(item[3]>0){
//          avl_pro++
//      }
//   }

//   var available=products.filter(item=>item[3]>0)

// console.log(available);
//  //print all prodcts names only

//  var prod_names=products.map(prod_names=>prod_names[1])
//  console.log(prod_names);

//  //print out of stock  product name
//  var out_stock_name=products.filter(item=>item[3]==0).map(item=>item[1])
//  console.log(out_stock_name);


// //add offer 5 rs for all product whose stock>50

// var offer=products.filter(item=>item[3]>50).map(item=>[item[2]-5,item[1]])
// console.log(offer);

// // sort the products stock wise
// // descending

// products.sort((item1,item2)=>item2[3]-item1[3])
// console.log(products);

// //descending order of price

// products.sort((item1,item2)=>item2[2]-item1[2])
// console.log(products);

// // highest price

// var costly_product=products.reduce((item1,item2)=>item1[2]>item2[2]?item1:item2)
// console.log(costly_product);

// //low cost product  (ore value 2 ennthin vanna lst one kittum) 
// // """""""reduceRight""""""" enn kodthaaal first one verum

// var low_cost_product=products.reduce((item1,item2)=>item1[2]<item2[2]?item1:item2)
// console.log(low_cost_product);

// //--------find methods-------------------

// var srch = products.find(item => item[2] == 20)   // oru value 2 ennathin indenkil first one maathre return chyyu
// console.log(srch);                                // fiter aa value relate chythilla ellthum print cheyyum


// var srch_item = products.find(item => item[1] == "treat")
// console.log(srch_item);

// //-----------some()------------
 
// var is_available=products.some(item=>item[2]<30)
// console.log(is_available);

// var is_available=products.some(item=>item[2]<10)
// console.log(is_available);


//-----ForEach()-------------

products.map(item=>item[1]).forEach(names=>console.log(names))

//print products rs >30

products.filter(item=>item[2]>3).forEach(item=> console.log(item))


