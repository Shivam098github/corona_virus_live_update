const url='https://api.covid19api.com/summary' ;
setInterval(init,5000);
function reload(){
    location.reload();
}
async function init(){

    let response=await fetch(url);
    let data=await response.json();
    // console.log(data.Global);
    data=`
        <td>${data.Global.TotalConfirmed}</td>
        <td>${data.Global.TotalDeaths}</td>
        <td>${data.Global.TotalRecovered}</td>
    `;
    document.getElementById('data').innerHTML=data;
}
init();
