for (var i = 0; i < 150; i++) {
    const top = Math.floor(Math.random() * 250) + 1
    const left = Math.floor(Math.random() * 95) + 1
    const top2 = Math.floor(Math.random() * 250) + 1
    const left2 = Math.floor(Math.random() * 95) + 1
    
    $('.sky').append(
    `<div class="stars-1" style="left:${left}%;
      top:${top}px"></div>`
  )
    $('.sky').append(
    `<div class="stars-2" style="left:${left2}%;
      top:${top2}px"></div>`
  )
  }
