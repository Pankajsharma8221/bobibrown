// let x="notallowed"
// localStorage.setItem("accdata",JSON.stringify(x))


// let accdataget=JSON.parse(localStorage.getItem("accdata"))

// if(accdataget=="notallowed"){
//     window.location.href="Ncart.html"
// }
// else{
//     window.location.href="Acart.html"
// }






let samparr= JSON.parse(localStorage.getItem("sampledata")) || [] 
let cartarr= JSON.parse(localStorage.getItem("cartData")) || [];

let sinindata=JSON.parse(localStorage.getItem("accdata")) || []
// let offerarr= JSON.parse(localStorage.getItem("offerdata")) || [];
offerarr={"masai20":80,
            "masai30":70
        }

        


let cartproductdis=[
    {
        img:"https://www.bobbibrown.in/media/export/cms/products/290x315/bb_prod_ET0001_290x315_0.jpg",
        name:"MINI VITAMIN ENRICHED FACE BASE",
        price:990.00
    },
    {
        img:"https://www.bobbibrown.in/media/export/cms/products/290x315/bb_prod_E1LM_290x315_0.jpg",
        name:"VITAMIN ENRICHED FACE BASE",
        price:990.00
    },
    {
        img:"https://www.bobbibrown.in/media/export/cms/products/290x315/bb_prod_EPGN01_290x315_0.jpg",
        name:"TRAVEL SIZE VITAMIN ENRICHED FACE BASE",
        price:990.00
    }
]


let sampledataf=[
    {simg:"https://www.bobbibrown.in/media/export/cms/products/80x80/bb_prod_ERL441_80x80_0.jpg",
    sname:"HYDRATING WATER FRESH CREAM SAMPLE",
    squt:"1.5ml/0.5oz"},
    {simg:"https://www.bobbibrown.in/media/export/cms/products/80x80/bb_prod_EL1941_80x80_0.jpg",
    sname:"VITAMIN ENRICHED EYE BASE SAMPLE",
    squt:"1.5ml"},
    {simg:"https://www.bobbibrown.in/media/export/cms/products/80x80/bb_prod_ER4E40_80x80_0.jpg",
    sname:"HYDRATING FACE CREAM SAMPLE",
    squt:"1.5ml"}
]


function disWhenZero(){

// some css
document.querySelector(".parr").style.height="40px"
document.querySelector(".box1").style.width="100%"
document.querySelector(".box2").style.width="0%"


    let cont=document.querySelector("#chdata")

    let emp=document.createElement("p")
    emp.setAttribute("class","chill")
    emp.innerText="Please add a product to your shopping bag in order to checkout"
    let par=document.querySelector(".parr")
    par.append(emp)
    
    
    let reminder=document.createElement("p")
    reminder.setAttribute("class","gentelreminder")
    reminder.innerText="If you have previously added items to your shopping cart, sing_in</a> to see them."
    cont.append(reminder)
    
    
    let bestbutton=document.createElement("button")
    let goshopbutton=document.createElement("button")
    
    
    bestbutton.setAttribute("id","bestseller_button")
    goshopbutton.setAttribute("id","goshop_button")
    
    bestbutton.innerText="BESTSELLER"
    goshopbutton.innerText="GO SHOPPING"
    
    cont.append(bestbutton,goshopbutton)
    
    let sugest=document.createElement("p")
    sugest.innerText="WORK WELL WITH"
    sugest.style.textAlign="center"
    
    cont.append(sugest)
}

if(cartarr.length===0){
    disWhenZero()
}
else{





    var subarrsum=subtotal(cartarr)//  defining the sunction to find subtotal
    var finalsum=finalcost(subarrsum)
    console.log(finalsum)
   document.querySelector(".box1").style.width="65%"
   document.querySelector(".box2").style.width="45%"






    // some css 
    // document.querySelector(".parr").style{
    //     height=auto;
    // }
    console.log(document.querySelector(".b2"))

    document.querySelector(".parr").style.cssText = "height:auto;display:flex;flex-direction:column;gap:20px;    background: white;";
   
    // document.getElementsByClassName(".bb").style.cssText = 'border-top:1px solid black';


    let box=document.querySelector("#cont")
    let box1=document.querySelector(".box1")
    let box2=document.querySelector(".box2")
    // box1.style.background="red"
    // box2.style.background="orange"
    // box.style.displya="flex";
    // box.style.flex-direction="collumns"
    // box.style.grid-template-columns="2fr 1fr"
    // box.style.flex-direction;"row"

    let samplearea=document.querySelector(".sampledisplay")
    // let samplecont=document.createElement("div")
    // samplecont.setAttribute("class","samplebox")
    sampleDisplayFunction(sampledataf)
 



    displaymaincart(cartarr)

    
    
    // ==========================================================================================================================

let checkoutinserts=document.querySelector("#checkout")
document.getElementById("checkout").style.boxShadow ="rgb(0 0 0 / 15%) -5.8px 3.4px 21.4px"

// creating the boxes
let box11=document.createElement("div")
box11.setAttribute("class","box11")

let box22=document.createElement("div")
box22.setAttribute("class","box22")

let box33=document.createElement("div")
box33.setAttribute("class","box33")


// adding style to boxes
// box1.style.background="#EFF0F0"
box11.setAttribute("class","box11")
box22.style.background="white"
box33.style.background="#EFF0F0"


checkoutinserts.append(box11,box22,box33)


// creating the checkout button and adding it to box1----------------------------

let  checkoutbuttot=document.createElement("button")
checkoutbuttot.setAttribute("class","checkoutbutton")
checkoutbuttot.innerText="CHECKOUT"
checkoutbuttot.style.background="#FF4661"
checkoutbuttot.style.color="white"
box11.append(checkoutbuttot)

checkoutbuttot.addEventListener("click",function(){
    checkoutbutton()
})

// box 33
let l1=document.createElement("h4")
l1.innerText="ADDITIONAL INFO"
let l2=document.createElement("h4")
l2.innerText="EMAIL US"
let l3=document.createElement("h4")
l3.innerText="DELIVERY INFORMATION"
let l4=document.createElement("h4")
l4.innerText="RETURNS"
let l5=document.createElement("h4")
l5.innerText="MAXIMUM PUSRCHASE POLICY"
box33.append(l1,l2,l3,l4,l5)















// adding content for box22


let inblock1=document.createElement("div")
inblock1.setAttribute("class","inblock1")
let inblocktital=document.createElement("h4")
let inblocktitalsym=document.createElement("h4")
inblock1.append(inblocktital,inblocktitalsym)

inblocktital.innerText="OREDER SUMMERY"
inblocktitalsym.innerText="^"



let inblock2=document.createElement("div")
inblock2.setAttribute("class","inblock2")
let inblocksubtotal=document.createElement("h4")
let inblocksubtotaltext=document.createElement("h4")
inblock2.append(inblocksubtotal,inblocksubtotaltext)

inblocksubtotal.innerText="SUB TOTAL"
inblocksubtotaltext.innerText=subarrsum+" €"


let inblock3=document.createElement("div")
inblock3.setAttribute("class","inblock3")
let inblockmethodil=document.createElement("h4")
let inblocktitaltext=document.createElement("h4")
inblock3.append(inblockmethodil,inblocktitaltext)

inblockmethodil.innerText="DELIVERY METHOD"
inblocktitaltext.innerText="0.00"


let inblock4=document.createElement("div")
inblock4.setAttribute("class","inblock4")
let inblockdeloption=document.createElement("h4")
inblockdeloption.innerText="Standard Delivery"
inblock4.append(inblockdeloption)





let inblock5=document.createElement("div")
inblock5.setAttribute("class","inblock5")
let inblocktotalex=document.createElement("h4")
let inblocktotalextext=document.createElement("h4")
inblocktotalextext.setAttribute("class","fisum")
inblock5.append(inblocktotalex,inblocktotalextext)




inblocktotalex.innerText="ESTIMATED TOTAL (MRP INCLUSIVE OF ALL TAXES)"
inblocktotalextext.innerText=finalsum+" €"
localStorage.setItem("finalSum",finalsum)


let inblockbox=document.createElement("div")
inblockbox.setAttribute("class","inblockbox")
let inblock6=document.createElement("div")
inblock6.setAttribute("class","inblock6")
let inblock6tital=document.createElement("h4")
let inblock6titalsym=document.createElement("h4")
inblock6.append(inblock6tital,inblock6titalsym)
inblock6tital.innerText="OFFER CODE"
inblock6titalsym.innerText="^"


let inblock7=document.createElement("form")
inblock7.setAttribute("class","inblock7")
let offercodeform=document.createElement("input")
offercodeform.setAttribute("class","inputoffer")
let offercodeformbutton=document.createElement("button")
offercodeformbutton.innerText="APPLY"
offercodeformbutton.setAttribute("class","applycode")
inblock7.append(offercodeform,offercodeformbutton)






let guidline=document.createElement("p")
guidline.style.fontStyle="italic"

let seeoffer=document.createElement("p")
seeoffer.style.color="red"
seeoffer.style.textDecoration="undeline"

guidline.innerText="One offer code per order"
seeoffer.innerText="SEE ALL OFFERS"



inblockbox.append(inblock6,inblock7,guidline,seeoffer)

box22.append(inblock1,inblock2,inblock3,inblock4,inblock5,inblockbox)

inblock7.addEventListener("submit",function(){
    offercode(offercodeform.value)
})

}


function offercode(offertxt){
   event.preventDefault()
   console.log("okbut")
console.log(offertxt)
  let finalsum= finalcost(subarrsum,offertxt)
  document.querySelector(".fisum").innerText=finalsum
  localStorage.setItem("finalSum",finalsum)

  

   
}



function displaymaincart(cartarr){
   box=document.querySelector(".parr")
   box.innerHTML=[]
   cartarr.forEach(function(el){
    

       let bb=document.createElement("div")
       bb.setAttribute("class","bb")
    //    bb.style.display="flex"


    //    let b1=document.createElement("div")
    //    b1.setAttribute("class","b1")

       let b2=document.createElement("div")
       b2.setAttribute("class","b2")


       let b3=document.createElement("div")
       b3.setAttribute("class","b3")
    

       let b4=document.createElement("div")
       b4.setAttribute("class","b4")
       b4.style.display="flex"

      
       let pimg=document.createElement("img")
       pimg.setAttribute("src",el.img)
       pimg.setAttribute("class","atcimg")







       let h2=document.createElement("h2")
       h2.innerText=el.name

       let cross=document.createElement("p")
       cross.innerText="X"
       cross.setAttribute("class","del")
       cross.addEventListener("click",function(){
           deleatele(el)
       })


    b3.append(h2,cross)


       let select=document.createElement("select")
       for(i=1;i<=8;i++){
           let option =document.createElement("option")
           select.append(option)
           option.innerText=i
           option.setAttribute("value",i)
        //    value.innerText=i
       }

       select.setAttribute("id","select")
       let indivisulprice=document.createElement("p")
       indivisulprice.setAttribute("class","indiprice")

       indivisulprice.innerText=el.price+" €";


        let prototal=document.createElement("p")
        prototal.innerText=el.price*el.count+" €"
        prototal.setAttribute("class","prototal")


    b4.append(select,indivisulprice,prototal)

    b2.append(b3,b4)

        // card.append(pimg,h2,cross,select,indivisulprice,prototal)
        bb.append(pimg,b2)
        box.append(bb)

        select.addEventListener("change",function(){
            nextcount(el)
        })
   }) 
}


function nextcount(target){
    // localStorage.setItem('selectedtem', document.getElementById('select').value);
    
let indarr=cartarr.indexOf(target)

let n=indarr+1
    let countdown=document.querySelector(".parr>.bb:nth-of-type(" + n + ")>.b2>.b4>#select")
    // console.log(countdown.value)
    countdown.placeholder=countdown.value
    let c=countdown.value
    againupdate(target,c)
    // let countinner=target.count
    // countinner=countdown.value
    
    
}
function againupdate(el,c){
    for(i=0;i<cartarr.length;i++){
   
        if(el.name==cartarr[i].name){
           
            cartarr[i].count=Number(c)
           //  nextcount(el)
           // console.log(el)

    localStorage.setItem("cartData",JSON.stringify(cartarr))
    displaymaincart(cartarr)


        }
    }
   }



function deleatele(el){
    let element=cartarr.filter(product => product.name==el.name)
    let eleindex=cartarr.indexOf(element)
    // console.log(eleindex)
    cartarr.splice(eleindex,1)
    console.log(cartarr)
    localStorage.setItem("cartData",JSON.stringify(cartarr))
    displaymaincart(cartarr)

}



function sampleDisplayFunction(sampledataf){
    let box=document.querySelector(".sampledisplay")
    sampledataf.forEach(function(el){

        let card=document.createElement("div")
        card.setAttribute('class',"sampcartcard")


        let simgs=document.createElement("img")
        simgs.setAttribute("src",el.simg)

        let h3=document.createElement("h3")
        h3.setAttribute("class","sampprotital")
        h3.innerText=el.sname

        let p=document.createElement("p")
        p.setAttribute("class","proQunt")
       p.innerText=el.squt

       

        let selectbutt=document.createElement("button")
        selectbutt.setAttribute("class","selec")
        selectbutt.innerText="select"

        card.append(simgs,h3,p,selectbutt)
        box.append(card)


        selectbutt.addEventListener("click",function(){
            storsample(el)
        })
    })
}
function storsample(el){
    checksampcart(el,samparr)

    if(checksampcart(el,samparr)==false){
        
        samparr.push(el)
         localStorage.setItem("sampledata",JSON.stringify(samparr))
            }
    else{
        alert("cant add more samples")
    }
            
}

function checksampcart(el,samparr){
        for(i=0;i<samparr.length;i++){
            // console.log(cartarr[i])
            if(el.sname==samparr[i].sname){
                return true
            }
           
        }
        return false 
    
    }


let containar=document .querySelector("#Ncartproduct")
displayCP(cartproductdis)
function displayCP(cartproductdis){
    containar.innerHTML=[]
    cartproductdis.forEach(function(el){
        let card=document.createElement("div")
        card.setAttribute('id',"cartcard")

        let imgs=document.createElement("img")
        imgs.setAttribute("src",el.img)

        let h31=document.createElement("h3")
        h31.setAttribute("class","protital")
        h31.innerText=el.name

        let h32=document.createElement("h3")
        h32.setAttribute("class","proprice")
        h32.innerText=el.price+" €"
       

        let buttonatc=document.createElement("button")
        buttonatc.setAttribute("class","atc")
        buttonatc.innerText="ADD TO CART"

        card.append(imgs,h31,h32,buttonatc)
        containar.append(card)

        buttonatc.addEventListener("click",function(){
            protocart(el)
        })
    })
}


function protocart(el){
    el["count"]=1
            cartarr.push(el)
            localStorage.setItem("cartData",JSON.stringify(cartarr))
            window.location.href="Acart.html"

}
function protocart(el){
checkcart(el,cartarr)

    if(checkcart(el,cartarr)==true){
        updatacount(el)
        localStorage.setItem("cartData",JSON.stringify(cartarr))
    }
    else{
        el["count"]=1
        cartarr.push(el)
        localStorage.setItem("cartData",JSON.stringify(cartarr))
    }
  
}



function checkcart(el,cartarr){
    for(i=0;i<cartarr.length;i++){
        // console.log(cartarr[i])
        if(el.name==cartarr[i].name){
            return true
        }
       
    }
    return false 

}

function updatacount(el){
 for(i=0;i<cartarr.length;i++){

     if(el.name==cartarr[i].name){
        
         cartarr[i].count+=Number(1)
        //  nextcount(el)
        // console.log(el)



     }
 }
}

displaycount(cartarr)
function displaycount(cartarr){
    let sum=0
    cartarr.forEach(function(el){
        let x=el.count
        sum+=x
    })
    let view=document.querySelector(".countnum")
    view.innerText=sum
    localStorage.setItem("fulllength",sum)

 
}



// GETTING THE SUB TOTAL

function subtotal(cartarr){
    let sum=0
    cartarr.forEach(function(el){
        let count=el.count
        let cost=el.price
       sum += (Number(count)*Number(cost))
   
    })
   return sum
}

console.log(subarrsum)


//  getting the final total

function finalcost(subarrsum,txt){
    let f=0
    for(let i in offerarr){
        if(i==txt){
        let percen=offerarr[i]
        f=subarrsum*(percen/100)
        return f
        }
    }
    f=subarrsum
    return f
}

function checkoutbutton(){
    if(sinindata[0]=="allow"){
        window.location.href="shipping.html"
    }
    else{
        window.location.href="usersign.html "
    }
}