for(let row=0;row<4;row++){ //row=0  1<4
    //3 2 1 spaces
    let str=""
    for(let space=0;space<(4-row-1);space++){//space=0,  space=0<4-1-1=3 space=1 1<3
              str+=" "    // 3 spaces kitty
    }   
    for(let col=0;col<(row+1);col++){ // col=0   0<1  1     1<1 
         str+="* "   
    }

console.log(str);

}
