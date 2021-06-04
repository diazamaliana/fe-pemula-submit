// Music List
var music =JSON.parse(localStorage.getItem('music'));
if (music === null) {
    music = [];
}

var music =JSON.parse(localStorage.getItem('music'));
if (music === null) {
    music = [];
        music = [{
            id:0,
            title:"Leave The Door Open",
            album:"Silk Sonic",
            year: "2021",
            image:"assets/images/cover6.jpg",
            link :"https://www.youtube.com/watch?v=adLGHcj_fmA"
        },{
            id:1,
            title:"24K Magic",
            album:"24K Magic",
            year: "2016",
            image:"assets/images/cover5.jpg",
            link:"https://www.youtube.com/watch?v=UqyT8IEBkvY"
        },{
            id:2,
            title:"That's What I Like",
            album:"24K Magic",
            year: "2016",
            image:"assets/images/cover5.jpg",
            link:"https://www.youtube.com/watch?v=PMivT7MJ41M"
        },{
            id:3,
            title:"Versace on The Floor",
            album:"24K Magic",
            year:"2016",
            image:"assets/images/cover5.jpg",
            link:"https://www.youtube.com/watch?v=-FyjEnoIgTM"
        },{
            id:4,
            title:"Locked Out of Heaven",
            album:"Unorthodox Jukebox",
            year:"2012",
            image:"assets/images/cover3.jpg",
            link :"https://www.youtube.com/watch?v=e-fA-gBCkj0"
        },{
            id:5,
            title:"Treasure",
            album:"Unorthodox Jukebox",
            year:"2012",
            image:"assets/images/cover3.jpg",
            link:"https://www.youtube.com/watch?v=nPvuNsRccVw"
        },{
            id:6,
            title:"Just The Way You Are",
            album:"Doo Wops and Hooligans",
            year:"2010",
            image:"assets/images/cover2.jpg",
            link:"https://www.youtube.com/watch?v=LjhCEhWiKXk"
        },{
            id:7,
            title:"The Lazy Song",
            album:"Doo Wops and Hooligans",
            year:"2010",
            image:"assets/images/cover2.jpg",
            link: "https://www.youtube.com/watch?v=fLexgOxsZu0"
        },{
            id:8,
            title:"Runaway Baby",
            album:"Doo Wops and Hooligans",
            year:"2010",
            image:"assets/images/cover2.jpg",
            link: "https://www.youtube.com/watch?v=HIgvP7B3Hg8"
        }
    ];
       
        localStorage.setItem("music", JSON.stringify(music)); 
    }


function listMusic(){
document.getElementById("prinf_music").innerHTML ='';
var music =JSON.parse(localStorage.getItem('music'));
    for(let i = 0; i < music.length; i++) { 
    var prinf =
    `<div class="column">
        <div class="card" >
            <div class="box"  id="prinf_music">
                <img src="`+music[i].image+`" alt="">
                <h3  style="font-weight: bold; height:75px">`+music[i].title+`</h3>
                <h3 style="font-style: italic;">`+music[i].year+`</h3>
                <div class="stars" >
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
                <div class="album"  style="font-size:22px; height:70px">`+music[i].album+`</div>
                <a href="`+music[i].link+`"><button class="btn">Play</button></a>
            </div>
            <div style="clear: both;"></div>
        </div>
    </div>`;
    document.getElementById("prinf_music").innerHTML +=prinf;
    }}
    document.getElementById("listMusic_menu").style.display = 'block';
listMusic();
