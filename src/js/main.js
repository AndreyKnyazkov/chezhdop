const arrowLeft = document.querySelectorAll('.arrow-left'),
      arrowRight = document.querySelectorAll('.arrow-right')

function sliderArrow(arrow, event, src) {
  arrow.forEach((item, i) => item.addEventListener(event, (e) => {
    item.setAttribute('src', src)
  }))
}

function setSliderText(sliderText, sliderCurrent) {
  document.querySelector('.lift-slider__title').textContent = sliderText[sliderCurrent][0]
  document.querySelector('.lift-slider__subtitle').textContent = sliderText[sliderCurrent][1]
}

sliderArrow(arrowRight, 'mouseenter', './img/arrow-right-active.svg')
sliderArrow(arrowRight, 'mouseout', './img/arrow-right.svg')
sliderArrow(arrowLeft, 'mouseenter', './img/arrow-left-active.svg')
sliderArrow(arrowLeft, 'mouseout', './img/arrow-left.svg')



function slider() {
  const sliderItems = document.querySelectorAll('.slider-item')
  const sliderText = [
    ['Pokles tváří a koutků úst', 'Zvednuté rysy budí dojem mladé tváře. V průběhu času tělo spouští involuční procesy, které ovlivňují měkké tkáně a kosti.'],
    ['Povislý kontury obličeje a dolní čelisti', 'S věkem vlivem gravitace měkké tkáně postupně klesají dolů, pokožka ztrácí pružnost a rám se stává méně definovaným. '],
    ['Odstranění vrásek a záhybů na krku', 'Krk je jedním z těch důkazů mládí, které nelze udržovat pomocí cvičení nebo krémů. Je to on, kdo odhaluje náš skutečný věk.'],
    ['Nosoretní rýhy', 'Obecně se předpokládá, že obličej je ovlivněn věkem, ale také mohou se tvořit u relativně mladých lidí v důsledku genetické předispozice nebo příliš živé mimiky obličeje.'],
    ['Spadlé koutky rtů, „vrásky smutku“', 'Koutky rtů dávají tváři výraz smutku, který vyvolává pocity bezmocnosti a tendence stěžovat si. Po 35–40 letech jsou již podobné změny jasně viditelné.'],
    ['Korekce lícních kostí podle pohlaví', 'Mužská krása má své individuální vlastnosti, takže se obrací na kosmetologa, silná polovina lidstva se bojí zženštelých změn vzhledu.'],
    ['Niťový lifting obočí a Foxy Eyes', 'Tento lifting nitěmi je populární u slečen které rady sleduji trendy a touží po kočičím vzhledu.'],
  ]
  const sliderLength = sliderText.length
  let sliderCurrent = 1  

  arrowRight.forEach((item, i) => item.addEventListener('click', (e) => {
    document.querySelector('.lift-slider__2 .slider-item').classList.add('fade-in')
    

    setTimeout(() => {
      document.querySelector('.lift-slider__2 .slider-item').classList.remove('fade-in')
    }, 500)

    console.log('click')
    sliderCurrent++
    // console.log('sliderCurrent: ', sliderCurrent)
    // console.log('sliderLength: ', sliderLength);
    if (sliderCurrent === 0) {
      sliderCurrent = sliderLength
    }
    sliderItems.forEach((sliderItem, i) => {      
      if (i === 0) {
        sliderItem.setAttribute('src', `./img/small-one_${sliderCurrent}.jpg`)
      } else if (i === 1) {
        // if current slide like slide length then
        if (sliderLength - sliderCurrent === 0) {
          sliderItem.setAttribute('src', `./img/big-one_${1}.png`)
          sliderCurrent = 0
          setSliderText(sliderText, sliderCurrent)
        } else {
          setSliderText(sliderText, sliderCurrent)
          sliderItem.setAttribute('src', `./img/big-one_${sliderCurrent + 1}.png`)
        }
      } else if (i === 2) {
        if (sliderLength - sliderCurrent === 1) {
          sliderItem.setAttribute('src', `./img/small-one_${sliderLength - sliderCurrent}.jpg`)
        } else {
          sliderItem.setAttribute('src', `./img/small-one_${sliderCurrent + 2}.jpg`)        
        }
      }  
    })
  }))

  arrowLeft.forEach((item, i) => item.addEventListener('click', (e) => {
    document.querySelector('.lift-slider__2 .slider-item').classList.add('fade-in')


    setTimeout(() => {
      document.querySelector('.lift-slider__2 .slider-item').classList.remove('fade-in')
    }, 500)

    if (sliderCurrent === 0) {
      sliderCurrent = sliderLength
    } else {
      sliderCurrent--
    }

    sliderItems.forEach((sliderItem, i) => {
      if (i === 0) {
        if (sliderCurrent === sliderLength) {
          sliderItem.setAttribute('src', `./img/small-one_${sliderLength - 1}.jpg`)
          sliderCurrent = sliderLength - 1
        } else if (sliderCurrent === 0) {
          sliderItem.setAttribute('src', `./img/small-one_${sliderLength}.jpg`)
        } else {
          sliderItem.setAttribute('src', `./img/small-one_${sliderCurrent}.jpg`)
        }
      } else if (i === 1) {
        // if current slide like slide length then
        if (sliderLength - sliderCurrent === 0) {
          sliderItem.setAttribute('src', `./img/big-one_${sliderLength}.png`)
          sliderCurrent = 0          
        } else {
          setSliderText(sliderText, sliderCurrent)
          sliderItem.setAttribute('src', `./img/big-one_${sliderCurrent + 1}.png`)
        }
      } else if (i === 2) {
        if (sliderLength - sliderCurrent === 1) {
          sliderItem.setAttribute('src', `./img/small-one_${sliderLength - sliderCurrent}.jpg`)          
        } else {
          sliderItem.setAttribute('src', `./img/small-one_${sliderCurrent + 2}.jpg`)
        }
      }
    })
  }))
}

slider()

function useHover(zone, zoneBlock, event, removeHover) {

  //dots hover
  zone.forEach((item, i) => {
    item.querySelectorAll('.zone-center__dot').forEach(dot => {
      dot.addEventListener(event, (e) => {
        // find out current zone
        let currentZone = item.dataset.zone
        console.log(!!removeHover)
        const parent = dot.parentNode
        zoneBlock.forEach(elem => {
          if (removeHover === false && elem.dataset.zone === currentZone) {
            elem.classList.add('zone-desciprtion__item_active')
            item.classList.add('zone-center__dot-block_active')
            
            const elemTitle = elem.querySelector('.zone-desciprtion__item-title').textContent,
                  elemDescription = elem.querySelector('.zone-desciprtion__item-description').textContent
            
            document.querySelector('.zone-center__description-mobile__title').textContent = elemTitle
            document.querySelector('.zone-center__description-mobile__subtitle').textContent = elemDescription
            document.querySelector('.zone-center__description-mobile').classList.add('zone-center__description-mobile_active')
          
            
            
          } else if (removeHover === true) {
            item.classList.remove('zone-center__dot-block_active')
            elem.classList.remove('zone-desciprtion__item_active')
          }
        })
      })
    })
  })
  // on elements
  zoneBlock.forEach((item, i) => {
    item.addEventListener(event, (e) => {

      zone.forEach((elem, i) => {
        if (removeHover === false && item.dataset.zone === elem.dataset.zone) {
          item.classList.add('zone-desciprtion__item_active')
          elem.classList.add('zone-center__dot-block_active')
        } if (removeHover === true) {
          item.classList.remove('zone-desciprtion__item_active')
          elem.classList.remove('zone-center__dot-block_active')
        }
      })

    })
  })

}


function dots() {
  const zone = document.querySelectorAll('.zone-center__dot-block[data-zone]'),
        zoneBlock = document.querySelectorAll('.zone-desciprtion__item[data-zone]')
  
  useHover(zone, zoneBlock, 'mouseenter', false)
  useHover(zone, zoneBlock, 'mouseleave', true)
}

dots()