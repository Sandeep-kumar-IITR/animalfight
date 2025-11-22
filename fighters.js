
/*let fighters =[  "🐒", "🦍", "🦧", "🦁", "🐯", "🐅","🐃", "🐪",  "🦒", "🐘", "🦣", "🦏", "🦛",  "🦔",  "🐼",  "🦘", "🦃", "🐧",  "🦅" ]*/

let fighters = [
  "\u{1F412}", // 🐒
  "\u{1F98D}", // 🦍
  "\u{1F9A7}", // 🦧
  "\u{1F981}", // 🦁
  "\u{1F42F}", // 🐯
  "\u{1F405}", // 🐅
  "\u{1F403}", // 🐃
  "\u{1F42A}", // 🐪
  "\u{1F992}", // 🦒
  "\u{1F418}", // 🐘
  "\u{1F9A3}", // 🦣
  "\u{1F98F}", // 🦏
  "\u{1F98B}", // 🦛
  "\u{1F994}", // 🦔
  "\u{1F43C}", // 🐼
  "\u{1F998}", // 🦘
  "\u{1F983}", // 🦃
  "\u{1F427}", // 🐧
  "\u{1F985}"  // 🦅
];

let player1 = 6 
let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightbutton")


fightButton.addEventListener("click", function() {
  /* My Method 
  function playerOne() {
    let leftSide = Math.floor(Math.random() * 20)
    return fighters[leftSide]
  }
  
  
  function playerTwo() {
    let leftSide = Math.floor(Math.random() * 20)
    return fighters[leftSide]
  }
  
  stageEl.textContent = playerOne() + " VS " + playerTwo()
  
  
  console.log("click")*/
  
  // Per's method //
  
  let leftSide = Math.floor(Math.random() * fighters.length)
  
  let RightSide = Math.floor(Math.random() * fighters.length)
  
  stageEl.textContent = fighters[leftSide] + " VS " + fighters[RightSide]
})




