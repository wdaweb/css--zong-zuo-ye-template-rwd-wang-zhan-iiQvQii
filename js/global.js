// 側選單-----------------------------
$('#navbar-toggler').on('click', function () {
  if ($('.navbar-collapse').hasClass('d-none')) {
    // open
    $('.navbar-collapse').removeClass('d-none')
    $('.navbar-collapse').addClass('d-block')
    // 換x
    $(this).html('<i class="fa-solid fa-xmark fa-2x"></i>')
  } else {
    // close
    $('.navbar-collapse').removeClass('d-block')
    $('.navbar-collapse').addClass('d-none')
    $(this).html('<i class="fa-solid fa-bars fa-2x"></i>')
  }

})

//  導覽列滾動收合
gsap.from('.nav ,.navbar-collapse', {
  yPercent: -100,
  duration: 0.5,
  scrollTrigger: {
    // 沒有 trigger 觸發目標，整份文件是滾動監控
    start: 'top 70',
    end: () => '+=' + document.documentElement.scrollHeight, // end 整份文件的高度
    onEnter(self) {
      self.animation.play()
    },
    onUpdate(self) {
      // console.log(self.direction)
      self.direction === -1 ? self.animation.play() : self.animation.reverse() // -1 往上時正向播放，否則 1 往下時反向播放
    },
    // markers: true
  }
})

console.log(window);