function cal(){
    if (!(document.getElementsByClassName('invisible1')[0].classList.contains('invisible')) ){
    var p1 = document.getElementById('quantity1').value
    var v1 = document.getElementsByClassName('prix-quantity1')[0].innerHTML
    }else {p1 =0 ; v1 =0}

    if (!(document.getElementsByClassName('invisible2')[0].classList.contains('invisible'))) {
    var p2 = document.getElementById('quantity2').value
    var v2 = document.getElementsByClassName('prix-quantity2')[0].innerHTML 
    } else { p2 = 0; v2 = 0 }

    if ( !(document.getElementsByClassName('invisible2')[0].classList.contains('invisible')) ) {
    var p3 = document.getElementById('quantity3').value
    var v3 = document.getElementsByClassName('prix-quantity3')[0].innerHTML 
    } else { p3 = 0; v3 = 0 }


    x1 =document.getElementsByClassName('prix1')[0].innerHTML = p1 * parseInt(v1, 10)
    x2 =document.getElementsByClassName('prix2')[0].innerHTML = p2 * parseInt(v2, 10)
    x3 =document.getElementsByClassName('prix3')[0].innerHTML = p3 * parseInt(v3, 10)
    
         
     
   
   document.getElementsByClassName('price-finale')[0].innerHTML  = x1+x2+x3
}
function supp(val){
     
    document.getElementsByClassName(val)[0].classList.add('invisible');
    let v =val+"p" 
    var v1 = document.getElementsByClassName(v)[0].innerHTML

    document.getElementsByClassName('price-finale')[0].innerHTML = document.getElementsByClassName('price-finale')[0].innerHTML -v1
}
function love(val){
     
    document.getElementsByClassName(val)[0].classList.add('love');
}
 
 