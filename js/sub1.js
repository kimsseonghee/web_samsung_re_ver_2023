window.addEventListener("load", function () {
  const lis = document.querySelectorAll('.gnb>ul>li')
  const header = document.querySelector(".header_wrap");

  for (let i = 0; i < lis.length; i++) {
    lis[i].addEventListener('mouseover', e => {
      e.currentTarget.classList.add('on');
      let ht = e.currentTarget.children[1].clientHeight;
      header.style.height = `${70 + ht}px`;
    })

    lis[i].addEventListener('mouseout', e => {
      e.currentTarget.classList.remove('on');
      header.style.height = '70px'
    })

    lis[i].children[0].addEventListener('focus', e => {
      e.currentTarget.parentElement.classList.add('on');
      var ht = e.currentTarget.nextElementSibling.clientHeight;
      header.style.height = `${70 + ht}px`
    })

    lis[i].children[0].addEventListener('blur', e => {
      e.currentTarget.parentElement.classList.remove('on'); //선택한것의 부모요소에 class on을 지워라
      header.style.height = '70px'
    })
  }


  //검색버튼 누르면 검색박스 열리고 닫기버튼 누르면 닫히게 

  const srchBtn = document.querySelector('.btn_srch')
  const closeBtn = document.querySelector('.btn_srch_close')
  const srchBox = document.querySelector('.srch_wrap')

  srchBtn.addEventListener('click', e => {
    e.preventDefault();
    srchBox.classList.add('on');
  });

  closeBtn.addEventListener('click', e => {
    e.preventDefault();
    srchBox.classList.remove('on');
  })


  const step1Menu = document.querySelectorAll(".step1>ul>li>a");

  step1Menu.forEach((item, idx) => {
    item.style.background = `url(images/ico_inquiry_0${idx + 1}.png) no-repeat 50% 35%`;
    item.addEventListener("click", e => {
      e.preventDefault();
      for (let i = 0; i < step1Menu.length; i++) {
        step1Menu[i].style.background = `url(images/ico_inquiry_0${i + 1}.png) no-repeat 50% 35%`;
        step1Menu[i].style.color = "#333";
      }
      item.style.background = `#043285 url(images/ico_inquiry_on_0${idx + 1}.png) no-repeat 50% 35%`;
      item.style.color = "#fff";
    })
  })


})