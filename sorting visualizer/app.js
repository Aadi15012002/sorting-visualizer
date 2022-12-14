let grid=document.querySelector('.grid')
let timeout = 1000
let squares = []
for(let i=0;i<10;i++){
    let square =document.createElement('div')
    square.setAttribute('id',i)
    square.innerHTML =10-i

    grid.append(square)
    squares.push(square)
}
function bubble_sort(){
    for(let i=0;i<squares.length-1;i++){
        for(let j=0;j<(squares.length-i-1);j++){
            setTimeout(() => {
               if(parseInt(squares[j].innerHTML)>parseInt(squares[j+1].innerHTML)) {
                if(j>0){
                    squares[j-1].classList.remove('exchange')
                    squares[j].classList.remove('exchange')
                }
                squares[j].classList.add('exchange')
                squares[j+1].classList.add('exchange')
                setTimeout(()=>{
                    let temp=squares[j].innerHTML
                    squares[j].innerHTML=squares[j+1].innerHTML
                    squares[j+1].innerHTML=temp
                },1000)
                if(j===squares.length-i-2){
                    setTimeout(()=>{
                        squares[j].classList.remove('exchange')
                        squares[j+1].classList.remove('exchange')
                    },2000)
                }
               }
            }, timeout)
            timeout+=2000;
        }
    }
}
bubble_sort();
// another
var container = document.getElementById("array");
  

function generatearray() {
    for (var i = 0; i < 20; i++) {
  
        var value = Math.ceil(Math.random() * 100);
  
        var array_ele = document.createElement("div");
  

        array_ele.classList.add("block");
  

        array_ele.style.height = `${value * 3}px`;
        array_ele.style.transform = `translate(${i * 30}px)`;

        var array_ele_label = document.createElement("label");
        array_ele_label.classList.add("block_id");
        array_ele_label.innerText = value;

        array_ele.appendChild(array_ele_label);
        container.appendChild(array_ele);
    }
}

function swap(el1, el2) {
    return new Promise((resolve) => {

        var temp = el1.style.transform;
        el1.style.transform = el2.style.transform;
        el2.style.transform = temp;
  
        window.requestAnimationFrame(function() {
  
           
            setTimeout(() => {
                container.insertBefore(el2, el1);
                resolve();
            }, 250);
        });
    });
}
  

async function BubbleSort(delay = 100) {
    var blocks = document.querySelectorAll(".block");
  

    for (var i = 0; i < blocks.length; i += 1) {
        for (var j = 0; j < blocks.length - i - 1; j += 1) {
  

            blocks[j].style.backgroundColor = "#FF4949";
            blocks[j + 1].style.backgroundColor = "#FF4949";
  
            
            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, delay)
            );
  
            console.log("run");
            var value1 = Number(blocks[j].childNodes[0].innerHTML);
            var value2 = Number(blocks[j + 1]
                        .childNodes[0].innerHTML);
  
            if (value1 > value2) {
                await swap(blocks[j], blocks[j + 1]);
                blocks = document.querySelectorAll(".block");
            }
  
          
            blocks[j].style.backgroundColor = "#6b5b95";
            blocks[j + 1].style.backgroundColor = "#6b5b95";
        }
  
        blocks[blocks.length - i - 1]
                .style.backgroundColor = "#13CE66";
    }
}
  

generatearray();
  
BubbleSort();
