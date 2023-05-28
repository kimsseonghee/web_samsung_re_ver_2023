
window.addEventListener("load", () => {
  // main.js

  // 주메뉴
  // 각 li에 마우스를 올리면 (높이값 가져와서) 풀다운 메뉴 내려오고 보여야됨,
  //키보드 탭으로 움직여야됨

  const lis = document.querySelectorAll('.gnb>ul>li')
  const header = document.querySelector(".header_wrap")
  console.log(lis)

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



  //내가한거
  // for(let i=0; i<lis.length; i++){
  //   lis[i].addEventListener("mouseover",e=>{

  //     activ(i,lis);
  //   })

  //   lis[i].addEventListener("mouseout",e=>{
  //     for(let el of lis){
  //       el.classList.remove("on");
  //     }
  //   })
  // }



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

  //----스크롤 이벤트----//

  const newsRoom = document.querySelector(".content1>.content1_inner>ul");
  const newsLetter = document.querySelector(".news_letter");
  const prHall = document.querySelector(".prhall");
  const prHallImg = document.querySelector(".prhall img");
  const productCont = document.querySelectorAll(".content2_inner>ul li");


  window.addEventListener("scroll", () => {

    let windowScroll = document.querySelector("html").scrollTop;

    console.log(windowScroll);

    if (windowScroll >= 238) {
      newsRoom.classList.add("on");
      if (windowScroll >= 900) {
        newsLetter.classList.add("on");
        if (windowScroll >= 1400) {
          prHall.classList.add("on");
          prHallImg.classList.add("on");
          if (windowScroll >= 2050) {
            productCont[0].classList.add("on");
            if (windowScroll >= 2450) {
              productCont[1].classList.add("on");
              if (windowScroll >= 2850) {
                productCont[2].classList.add("on");
              }
            }
          }
        }
      }
    }
  })



  // 스크롤 내리면 top버튼 나오게

  const topBtn = document.querySelector(".btn_top");
  const museumBtn = document.querySelector(".btn_museum")

  topBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth"
    })
  })

  window.addEventListener("scroll", () => {
    let scrollHeight = document.querySelector("html").scrollTop;
    if (scrollHeight >= 100) {
      topBtn.classList.add("on");
      museumBtn.classList.add("on");
      if (scrollHeight > 4480) {
        topBtn.classList.add("ab");
        museumBtn.classList.add("ab");
      } else {
        topBtn.classList.remove("ab");
        museumBtn.classList.remove("ab");
      }
    } else {
      topBtn.classList.remove("on");
      museumBtn.classList.remove("on");
    }
  })

})