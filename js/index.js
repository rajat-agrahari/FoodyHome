// for Burger Menu
let burger = document.querySelector('#burger');
let nav =document.querySelector('#nav');
let cancel = document.querySelector("#cancel");
cancel.style.display='none';

burger.addEventListener('click',()=>{
    nav.classList.remove("display-none");
    burger.style.display="none";
    cancel.style.display="block" 
});
cancel.addEventListener('click',()=>{
    nav.classList.add("display-none");
    burger.style.display="block";
    cancel.style.display="none";
});


//------------------- For Order Page--------------------//

var addBtnCart = document.querySelectorAll('.order-item-addbtn');
var cartItemContainer = document.querySelector('.cart-item-container');
var cartItem = document.querySelector('.cart-item');
let totalPay = document.querySelectorAll('.total-amount');

let amountPay =0;
var storRemovePrice='';
// For onclick add items to cart
for( key of addBtnCart){
    key.addEventListener('click',(e)=>{
        
        console.log('clicked add cart btn');
        var orderItemCode = e.target.parentNode.firstElementChild.innerText;
        var orderItemName =  e.target.parentNode.firstElementChild.nextElementSibling.innerText;
        var orderItemPrice = e.target.parentNode.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.innerText;
       

        // grab order cart
        let createDivElm = document.createElement('div');
        createDivElm.className="cart-item";
        
        let createSpanCode = document.createElement('span');
        createSpanCode.className="cart-item-code";
        createSpanCode.innerHTML=orderItemCode
        
        let createH5Name = document.createElement('h5');
        createH5Name.className="cart-item-name";
        createH5Name.innerHTML=orderItemName;
        
        let createBr = document.createElement('br');
        
        let createPPrice = document.createElement('p');
        createPPrice.className="cart-item-price";
        createPPrice.innerHTML=orderItemPrice
        
        /* Calculate total amount */
       var fullPay;
       let rate = orderItemPrice.slice(1,orderItemPrice.length);
       
        amountPay += Number(rate);
        fullPay = '₹'+String(amountPay);
        totalPay[0].innerHTML = fullPay;
        totalPay[1].innerHTML = fullPay;

        let createSpanBtn =document.createElement('span');
        let createBtnremove =document.createElement('button');
        createBtnremove.className="remove-cart-item";
        createBtnremove.innerHTML="Remove";
        createBtnremove.setAttribute('type','button');
        
        createSpanBtn.append(createBtnremove); //append button in span
        
        let createHr = document.createElement('hr');
        createHr.className="inner-cart-hr";
        
        createDivElm.appendChild(createSpanCode);
        createDivElm.appendChild(createH5Name);
        createDivElm.appendChild(createBr);
        createDivElm.appendChild(createPPrice);
        createDivElm.appendChild(createSpanBtn);
        createDivElm.appendChild(createHr);
        
        cartItemContainer.appendChild(createDivElm);
        

    //   for remove order items
          removeCartItem = document.querySelectorAll('.remove-cart-item');
        for(i of removeCartItem){
            i.addEventListener('click',(E)=>{
                // E.target.parentNode.parentNode.style.display="none";
                E.target.parentNode.parentNode.remove();
                    
                // grab remove itemprice
                let   storRemovePrice = E.target.parentNode.parentNode.children[3].innerText;                
                    // console.log(storRemovePrice);
        });
        }
                  
});
}

// /************************************************ */
// removeCartItem.addEventListener('click',()=>{

//     // storRemovePrice = String(storRemovePrice); //coverted into string
//     let removeRate = storRemovePrice.slice(1,storRemovePrice.length); //remove ₹ Symbol
//     console.log(Number(removeRate));  //converted into number
//     amountPay -= Number(removeRate);
    
//     var paybalAmount;
//     var fromgrandtotal = totalPay[0].innerText
//     paybalAmount = fromgrandtotal.slice(1,fromgrandtotal.length); //remove ₹ Symbol from main total
//     paybalAmount =Number(paybalAmount);
//     paybalAmount -= Number(removeRate);
//     console.log(paybalAmount);
    
// });

/************************************************ */


// On clicking Order-Submit Button

let  submitOrder = document.getElementById('submit-order');
let submitOrderMessage =document.querySelector('.submit-order-message');
submitOrderMessage.style.display="none";

submitOrder.addEventListener('click',(e)=>{
    console.log('submit order');
    
    function GenralOrder(ItemCode,ItemName,ItemPrice){  /*create genral submit order */
        this.submitItemCode = ItemCode;
        this.submitItemName = ItemName;
        this.submitItemPrice = ItemPrice;  
    }
    function GenInfoReciver(RecName,RecPhone,Recaddress){ /* To create genral Information function of receiver*/
        this.receiverName = RecName;
        this.receiverPhone = RecPhone;
        this.receiverAddress = Recaddress;
    }
    
    var arrayOrder =  [];  /* Empty array to store diffrent items */

    //to grab fil entry into cart form
    let receiverName = document.querySelector('#receiver-name');
    let receiverPhone = document.querySelector('#receiver-phone');
    let receiverAddress = document.querySelector('#receiver-address');

    let submitOrderItem = document.querySelectorAll('.cart-item');

    for(j=1; j<submitOrderItem.length;j++){  //on click Order Now Btn
        let submitItemCode = submitOrderItem[j].children[0].innerHTML;
        let submitItemName = submitOrderItem[j].children[1].innerHTML;
        let submitItemPrice = submitOrderItem[j].children[3].innerHTML;
       
        let customer = new GenralOrder(submitItemCode,submitItemName,submitItemPrice);/* gatter one item deails- code,name,price into one object */
        
        arrayOrder.push(customer);  //gatter diffrent item into one array during order
    }
    let receiverInfo = new GenInfoReciver(receiverName.value,receiverPhone.value,receiverAddress.value);
    arrayOrder.push(receiverInfo); //push Receiver information into array

    console.log(arrayOrder);
    // console.log(receiverName.value);
    // console.log(receiverPhone.value);
    // console.log(receiverAddress.value);

   
    submitOrderMessage.style.display="flex";     /*Display success message */
});


// remove successfully messgae
let cancelMessage = document.querySelector('.cancel-message');
cancelMessage.addEventListener('click',()=>{
    submitOrderMessage.style.display="none";
     setTimeout(() => {
        location.reload();  //reload page to remove current order data
    }, 400);
});













