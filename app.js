const form = document.querySelector('#searchForm');
// const res = document.querySelector('#result');
const res = document.querySelector('#tableResult');
// var upd;

form.addEventListener('submit',(e)=>{

    e.preventDefault();
    // if(upd){
    //     clearTimeout(upd);
    // }
   
const ctype = form.elements.coinType.value;

fetchPrice(ctype);



});

// // const fetchPrice= async(ctype) =>{
// //     const r = await axios.get(`https://api.cryptonator.com/api/ticker/${ctype}`);
// //     console.log(r.data.ticker.price);
// // }



const fetchPrice = async(ctype) =>{
    const r = await axios.get(`https://api.coinstats.app/public/v1/coins/${ctype}?currency=USD`);
    
    //  console.log(r);







     const symbol = r.data.coin.symbol;
     const price = r.data.coin.price;
    const volume= r.data.coin.volume;
    const priceChange1w= r.data.coin.priceChange1w;
    const pricechange1d=r.data.coin.priceChange1d;
    const pricechange1h=r.data.coin.priceChange1h;
    const makertCap=r.data.coin.marketCap;
   const totalSupply=r.data.coin.totalSupply;
    const rank = r.data.coin.rank;
    const timeInterval = r.data.coin.rank

    res.innerHTML= `<tr style="background-color:blue; color:white; font-weight:700">
    <td>Property</td>
    <td>value</td>
</tr>

<tr>
    <td>Rank</td>
    <td>${rank}</td>
</tr>

<tr>
    <td>Market Cap</td>
    <td>${makertCap}</td>
</tr>


<tr>
<td>Price</td>
<td id=>${price} USD </td>
</tr>

<tr>
<td>Volume</td>
<td>${volume}</td>

</tr>

<tr>
<td>Weekly price change</td>
<td>${priceChange1w}</td>
</tr>

<tr>
<td>daily price change</td>
<td>${pricechange1d}</td>
</tr>

<tr>
<td>Hourly price change</td>
<td>${pricechange1h}</td>
</tr>

<tr>
<td>Total supply</td>
<td>${totalSupply}</td>
</tr>`


// upd = setTimeout(()=>fetchPrice(ctype, 100000));
}
