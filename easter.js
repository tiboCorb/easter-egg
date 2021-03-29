function getAllRecipe() {
    return document.getElementsByClassName('recipe-card')
}

function getRecipeImageContainer(recipe) {
    return recipe.getElementsByClassName('recipe-picture')[0];
}

function getEggsSVG(height, width) {
    return `<svg width="${width}" height=${height} viewBox="0 0 413 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M397.065 264.518V195.164H397.066C391.925 177.482 385.561 160.23 378.115 143.764L274.707 87.686H137.351L33.956 143.767C26.511 160.232 20.147 177.483 15.006 195.165H15.007V264.519L0.682983 317.698C2.34298 342.632 7.03298 365.236 14.331 385.455L137.35 424.316H274.707L397.741 385.455C405.039 365.236 409.729 342.633 411.389 317.699L397.065 264.518Z" fill="#ECA0AA"/>
<path d="M137.351 87.686L33.956 143.767C26.511 160.232 20.147 177.483 15.006 195.165H15.007V264.519L0.682983 317.698C2.34298 342.632 7.03298 365.236 14.331 385.455L124.463 420.245C104.968 387.68 93.712 346.592 93.712 297.209C93.712 223.177 119.005 145.191 159.438 87.688H137.351V87.686Z" fill="#E16E7E"/>
<path d="M342.538 82.414L305.098 61.81V41.207C275.705 15.521 241.945 0 206.036 0C170.127 0 136.367 15.521 106.975 41.207V61.811L69.535 82.415C55.96 100.868 43.979 121.603 33.957 143.767C42.671 154.219 51.254 164.829 68.678 164.829C103.015 164.829 103.015 123.622 137.352 123.622C171.691 123.622 171.691 164.829 206.029 164.829C240.369 164.829 240.369 123.622 274.708 123.622C309.049 123.622 309.049 164.829 343.391 164.829C360.818 164.829 369.401 154.218 378.116 143.765C368.093 121.601 356.112 100.867 342.538 82.414Z" fill="#F6EE86"/>
<path d="M106.975 41.207V61.811L69.535 82.415C55.96 100.868 43.979 121.603 33.957 143.767C42.671 154.219 51.254 164.829 68.678 164.829C103.015 164.829 103.015 123.622 137.352 123.622C137.407 123.622 137.459 123.625 137.513 123.625C165.999 69.694 206.427 26.714 252.888 8.904C237.836 3.135 222.153 0 206.036 0C170.127 0 136.367 15.521 106.975 41.207Z" fill="#EED076"/>
<path d="M336.444 470.793V450.189L375.337 429.585C384.324 416.419 391.875 401.707 397.741 385.453C376.828 376.05 372.144 347.171 343.396 347.171C309.059 347.171 309.059 388.378 274.722 388.378C240.383 388.378 240.383 347.171 206.045 347.171C171.705 347.171 171.705 388.378 137.366 388.378C103.025 388.378 103.025 347.171 68.684 347.171C39.932 347.171 35.248 376.051 14.333 385.454C20.2 401.708 27.75 416.42 36.737 429.586L75.63 450.19V470.794C111.149 498.111 156.552 512 206.036 512C255.52 512 300.924 498.11 336.444 470.793Z" fill="#F6EE86"/>
<path d="M102.274 366.876C93.9311 356.882 85.3531 347.171 68.6821 347.171C39.9301 347.171 35.2461 376.051 14.3311 385.454C20.1981 401.708 27.7481 416.42 36.7351 429.586L75.6281 450.19V470.794C111.149 498.111 156.552 512 206.036 512C222.154 512 237.838 510.523 252.89 507.593C180.796 493.557 123.241 446.08 102.274 366.876Z" fill="#EED076"/>
<path d="M69.5339 82.414H342.538C331.116 66.888 318.567 52.978 305.098 41.207H106.975C93.5049 52.978 80.9559 66.889 69.5339 82.414Z" fill="#C8A2C8"/>
<path d="M200.693 41.207H106.974C93.504 52.978 80.955 66.888 69.533 82.414H163.244C174.669 66.887 187.22 52.978 200.693 41.207Z" fill="#B68DB7"/>
<path d="M36.736 429.586C47.695 445.642 60.799 459.388 75.629 470.793H336.445C351.274 459.388 364.378 445.641 375.338 429.586H36.736Z" fill="#C8A2C8"/>
<path d="M130.456 429.586H36.736C47.695 445.642 60.799 459.388 75.629 470.793H169.341C154.513 459.389 141.414 445.639 130.456 429.586Z" fill="#B68DB7"/>
<path d="M123.987 288.627C140.707 288.627 154.261 277.833 154.261 264.518C154.261 251.203 140.707 240.409 123.987 240.409C107.267 240.409 93.713 251.203 93.713 264.518C93.713 277.833 107.267 288.627 123.987 288.627Z" fill="white"/>
<path d="M288.085 288.627C304.805 288.627 318.359 277.833 318.359 264.518C318.359 251.203 304.805 240.409 288.085 240.409C271.365 240.409 257.811 251.203 257.811 264.518C257.811 277.833 271.365 288.627 288.085 288.627Z" fill="white"/>
<path d="M230.445 245.994C230.445 230.909 219.517 229.492 206.036 229.492C192.555 229.492 181.627 230.909 181.627 245.994C181.627 261.079 192.555 273.307 206.036 273.307C219.517 273.307 230.445 261.079 230.445 245.994Z" fill="#3A4351"/>
<path d="M129.049 243.235C124.907 243.235 121.549 239.877 121.549 235.735V223.373C121.549 219.231 124.907 215.873 129.049 215.873C133.191 215.873 136.549 219.231 136.549 223.373V235.735C136.549 239.877 133.191 243.235 129.049 243.235Z" fill="#3A4351"/>
<path d="M283.024 243.235C278.882 243.235 275.524 239.877 275.524 235.735V223.373C275.524 219.231 278.882 215.873 283.024 215.873C287.166 215.873 290.524 219.231 290.524 223.373V235.735C290.524 239.877 287.166 243.235 283.024 243.235Z" fill="#3A4351"/>
<path d="M346.141 256C346.141 290.137 373.815 317.811 407.952 317.811C409.107 317.811 410.253 317.773 411.393 317.711C411.837 311.041 412.073 304.211 412.073 297.208C412.073 263.238 406.735 228.44 397.066 195.165C368.123 200.31 346.141 225.58 346.141 256Z" fill="#FBF1CF"/>
<path d="M15.007 195.164C5.338 228.439 0 263.237 0 297.207C0 304.211 0.236 311.041 0.68 317.71C1.82 317.773 2.966 317.81 4.121 317.81C38.258 317.81 65.932 290.136 65.932 255.999C65.931 225.58 43.949 200.31 15.007 195.164Z" fill="#F7DFB7"/>
</svg>
`
}

function getRandomRecipe() {
    var recipes = getAllRecipe();
    var recipeIndex = Math.floor(Math.random() * Math.floor(recipes.length));
    return recipes[recipeIndex];
}

function removeEgg() {
    document.getElementById('egg')?.remove();
}

function eggclicked() {
    modalContainer = document.createElement('div');
    var modale = `
      <div class='easter-overlay'>
      <div class='confetti-container'></div>
      </div>
    <div class='easter-modale-container'>
    <div class='easter-left-col'>
    <div class='easter-title'>Bravo !
    <span class="green-confetti"></span>
    <span class="orange-confetti"></span>
    <span class="blue-confetti"></span>
    </div>
    <p class='easter-congrate'>Tu as trouvé l’oeuf caché de Pâques 🐰</p>
    <p class='easter-action'>
    Fais des économies en faisant tes courses sur Match avec ce code promo :</p>
    <div class="easter-button">MIAM10</div>
    </div '>
    <div class='easter-right-col'>
    <div class='easter-right-col-egg'>${getEggsSVG(512, 412)}</div>
    </div>
    </div>
    `
    removeEgg()
    //  localStorage.setItem('easterFound',true);
    modalContainer = document.createElement('div');
    modalContainer.classList.add('easter-main-container')
    modalContainer.setAttribute('onclick', 'closeEaterModale()')
    const modaleFragment = document.createRange().createContextualFragment(modale);
    modalContainer.appendChild(modaleFragment);
    var body = document.body || document.getElementsByTagName('body')[0]
    body.appendChild(modalContainer);
    window.confettiful = new Confettiful(document.querySelector('.confetti-container'));
}

function closeEaterModale() {
    modalRef = document.querySelector('.easter-main-container')
    modalRef.remove();
}

function reUpSuggestion() {
    sugs = document.getElementsByClassName('suggested');
    for (var sug of sugs) {
        sug.style['z-index'] = '2';
    }
}


function createEgg() {


    var egg = document.createElement('div')
    egg.innerHTML = getEggsSVG(51, 41);
    egg.setAttribute('id', 'egg');
    egg.classList.add("eggs")
    egg.setAttribute('onclick', 'eggclicked()')
    egg.style.position = 'absolute'
    egg.style['z-index'] = '0'
    egg.style.height = '50px'
    egg.style.width = '50px'
    egg.style.right = '-20px';
    egg.style.top = '-20px';
    egg.style.cursor = 'pointer';
    return egg
}


function addEggToRecipe() {
    var recipe = getRandomRecipe();
    recipe.style.postition = 'relative';
    recipe.appendChild(createEgg());
    recipePict = getRecipeImageContainer(recipe);
    recipePict.style.position = 'relative';
    recipePict.style['z-index'] = '1'
    return recipe;
}


function gameLoop() {
    var int = setInterval(() => {
        reUpSuggestion();
        removeEgg();
        if (!localStorage.getItem('easterFound')) {
            addEggToRecipe();
        }
    }, 10010);

}

const Confettiful = function (el) {
    this.el = el;
    this.containerEl = null;

    this.confettiFrequency = 3;
    this.confettiColors = ['#ECA0AA', '#2BB6AA', '#B68DB7', '#F6EE86'];
    this.confettiAnimations = ['slow', 'medium', 'fast'];

    this._setupElements();
    this._renderConfetti();
};

Confettiful.prototype._setupElements = function () {
    const containerEl = document.createElement('div');
    const elPosition = this.el.style.position;

    if (elPosition !== 'relative' || elPosition !== 'absolute') {
        this.el.style.position = 'relative';
    }

    containerEl.classList.add('confetti-container');

    this.el.appendChild(containerEl);

    this.containerEl = containerEl;
};

Confettiful.prototype._renderConfetti = function () {
    this.confettiInterval = setInterval(() => {
        const confettiEl = document.createElement('div');
        const confettiSize = (Math.floor(Math.random() * 3) + 7) + 'px';
        const confettiBackground = this.confettiColors[Math.floor(Math.random() * this.confettiColors.length)];
        const confettiLeft = (Math.floor(Math.random() * this.el.offsetWidth)) + 'px';
        const confettiAnimation = this.confettiAnimations[Math.floor(Math.random() * this.confettiAnimations.length)];

        confettiEl.classList.add('confetti', 'confetti--animation-' + confettiAnimation);
        confettiEl.style.left = confettiLeft;
        confettiEl.style.width = confettiSize;
        confettiEl.style.height = confettiSize;
        confettiEl.style.backgroundColor = confettiBackground;

        confettiEl.removeTimeout = setTimeout(function () {
            confettiEl.parentNode.removeChild(confettiEl);
        }, 3000);

        this.containerEl.appendChild(confettiEl);
    }, 25);
};




var css = `

.eggs {
   animation: eggs-annim 10s;
   transform-style: preserve-3d;
   animation-iteration-count: infinite;
}

.easter-main-container {
   position: fixed;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   z-index:12;
   justify-content: center;
   align-items: center;
   display:flex;
}

.easter-overlay{
   position: fixed;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   z-index: 0;
   justify-content: center;
   align-items: center;
   display:flex;
    background-color: #fff;
    opacity: .9;

}
.easter-left-col {
      flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 40px 24px 24px 24px;
}
.easter-right-col{
    width: 370px;
    position: relative;

}
.confetti-container{
  height:100vh;
  width:100vw;
}

.easter-modale-container{
      background: white;
      box-shadow: 0px 3px 4px #EAF2FB;
    display: flex;
    border-radius: 15px;
    overflow: hidden;
    height: 450px;
    width: 600px;
    z-index:1
}

.easter-right-col-egg{
      position: absolute;
    top: 50px;
    left: 50px;
}
.easter-title{
  font-family: Work Sans;
font-style: normal;
font-weight: bold;
font-size: 50px;
line-height: 59px;
letter-spacing: -0.02em;
color: #0E0E2C;
position:relative;
}

.easter-button{
    font-family: Work Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    display: flex;
    align-items: center;
    letter-spacing: 0.5px;
    color: #FAFCFE;
    flex: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 16px 40px;
    margin: 0px 8px;
    background: #2BB6AA;
    border-radius: 8px;
    pointer: cursor

}

.easter-congrate{
  font-family: Work Sans;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 140%;
color: #4A4A68;
}

.easter-action{
  font-family: Work Sans;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 140%;
color: #4A4A68;
}

.orange-confetti{
    position: absolute;
    width: 40px;
    height: 0px;
    left: 200px;
    border-radius: 9px;
    top: 2px;
    border: 5px solid #EF760F;
    transform: rotate(
163.23deg
);
}

.green-confetti{
  position: absolute;
   border-radius: 9px;
width: 40px;
height: 0px;
left: 150px;
top: -35px;
border: 5px solid #2BB6AA;
transform: rotate(-82.55deg);
}

.blue-confetti{
  position: absolute;
width: 40px;
height: 0px;
left: 180px;
top: 66px;
  border-radius: 9px;
border: 5px solid #1ACCF8;
transform: rotate(27.23deg);
}

@keyframes confetti-slow {
  0% { transform: translate3d(0, 0, 0) rotateX(0) rotateY(0); }
  
  100% { transform: translate3d(25px, 105vh, 0) rotateX(360deg) rotateY(180deg); }
}

@keyframes confetti-medium {
  0% { transform: translate3d(0, 0, 0) rotateX(0) rotateY(0); }
  
  100% { transform: translate3d(100px, 105vh, 0) rotateX(100deg) rotateY(360deg); }
}

@keyframes confetti-fast {
  0% { transform: translate3d(0, 0, 0) rotateX(0) rotateY(0); }
  
  100% { transform: translate3d(-50px, 105vh, 0) rotateX(10deg) rotateY(250deg); }
}



.confetti-container {
  perspective: 700px;

  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.confetti {
  position: absolute;
  z-index: 1;
  top: -10px;
  border-radius: 0%;
  }

  .confetti--animation-slow {
    animation: confetti-slow 2.25s linear 1 forwards;
  }
  
  .confetti--animation-medium {
    animation: confetti-medium 1.75s linear 1 forwards;
  }
  
  .confetti--animation-fast {
    animation: confetti-fast 1.25s linear 1 forwards;
  }



@keyframes eggs-annim {
    0% {
       left: 15px;
       top: 10px;
    }
    10%{
      left: 10px
    }

    33% {
          transform: rotate(
-40deg
);
       left: -10px;
       top: 10px;
    }

    43% {
          transform: rotate( 
45deg
 );
      left: 260px;
      top: 10px;
    }

    53%  {
          transform: rotate( 
-360deg
 );
      left: 220px;
      top: 10px;
    }
    
    63%{
        transform: rotate( 
-0deg
 );

    }

    73% {
           top: -30px;
    }

    83% {
       left: 15px;
       top: 10px;
    }

    90% {
       left: -20px;
       top: -30px;
    }
    100% {
          transform: rotate( 
-10deg
 );
       left: 50px;
       top: 50px;
    }
}
`
var eggsStyle = document.createElement('style');
var el = document.getElementById('recipes');
var head = document.head || document.getElementsByTagName('head')[0]
head.appendChild(eggsStyle);

eggsStyle.type = 'text/css';
if (eggsStyle.styleSheet) {
    eggsStyle.styleSheet.cssText = css;
} else {
    eggsStyle.appendChild(document.createTextNode(css));
}
el.style.overflow = 'unset';



//addEggToRecipe()
gameLoop()
