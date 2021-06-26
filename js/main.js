
function changeToVote(){
    
    let es = document.getElementsByClassName("side back")
    for(let i=0;i<es.length;i++){
        let randName = Math.random();
        let id1 = Math.random();
        let id2 = Math.random();
        let id3 = Math.random();
        let id4 = Math.random();
        let id5 = Math.random();
        let rate = `
        <div class="rate">
        <button>aaa</button>

        <input type="radio" id="${id1}" name="${randName}" value="5" />
        <label for="${id1}" title="text">5 stars</label>
        <input type="radio" id="${id2}" name="${randName}" value="4" />
        <label for="${id2}" title="text">4 stars</label>
        <input type="radio" id="${id3}" name="${randName}" value="3" />
        <label for="${id3}" title="text">3 stars</label>
        <input type="radio" id="${id4}" name="${randName}" value="2" />
        <label for="${id4}" title="text">2 stars</label>
        <input type="radio" id="${id5}" name="${randName}" value="1" />
        <label for="${id5}" title="text">1 star</label>
        </div>
        `;
        
        es[i].children[1].innerHTML = rate;
    }
}
changeToVote();