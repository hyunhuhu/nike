const liElements = document.querySelectorAll('ul.sct1 li');
const imgElements = document.querySelectorAll('.cate1 img');

liElements.forEach(li => {
  li.addEventListener('click', () => {
    const img = li.querySelector('img');
    const currentSrc = img.getAttribute('src');
    const newSrc = currentSrc.replace('1', '2');
    img.setAttribute('src', newSrc);

    liElements.forEach(otherLi => {
      if (otherLi !== li) {
        const otherImg = otherLi.querySelector('img');
        const otherCurrentSrc = otherImg.getAttribute('src');
        const otherNewSrc = otherCurrentSrc.replace('2', '1');
        otherImg.setAttribute('src', otherNewSrc);
      }
    });
  });
});

liElements.forEach((li, index) => {
  li.addEventListener('click', () => {
    imgElements.forEach((img, imgIndex) => {
      if (index === imgIndex) {
        img.style.opacity = 1;
      } else {
        img.style.opacity = 0;
      }
    });
  });
});

/* sitemap */
const siteBtn = document.querySelector('.sct4_btn');

siteBtn.addEventListener('click', () => {
  const siteMap = document.querySelector('.sct4_map');
  siteMap.classList.toggle('active');
});

/* trigger */
const trigger = document.querySelector('.trigger');

trigger.addEventListener('click', () => {
  trigger.classList.toggle('active');
  const menu = document.querySelector('.head_btm ul');
  const icon = document.querySelector('.icon');
  menu.classList.toggle('active');
  icon.classList.toggle('active');
});

window.onresize = function(){
  const trigger = document.querySelector('.trigger');
  const menu = document.querySelector('.head_btm ul');
  const icon = document.querySelector('.icon');
  let w = $(window).width();

  if(w>1025 || w<768){
    trigger.classList.remove('active');
    menu.classList.remove('active');
    icon.classList.remove('active');
  }
}

/* sec1 사진 모바일 */
if (window.innerWidth <= 767) {
  const cate1Images = document.querySelectorAll('.cate1 img');
  for (let i = 0; i < cate1Images.length; i++) {
    cate1Images[i].setAttribute('src', cate1Images[i].getAttribute('data-image'));
  }
}

window.addEventListener('resize', function(){
  if (window.innerWidth <= 767) {
    const cate1Images = document.querySelectorAll('.cate1 img');
    for (let i = 0; i < cate1Images.length; i++) {
      cate1Images[i].setAttribute('src', cate1Images[i].getAttribute('data-image'));
    }
  } else {
    const cate1Images = document.querySelectorAll('.cate1 img');
    for (let i = 0; i < cate1Images.length; i++) {
      cate1Images[i].setAttribute('src', cate1Images[i].getAttribute('src').replace('11', '1'));
    }
  }
});


/* 클릭했을때 이미지 변경되도록 */

const liList1 = document.querySelectorAll('.sect2>ul>li:nth-of-type(1)>.sec2_img>ul>li');
const liList2 = document.querySelectorAll('.sect2>ul>li:nth-of-type(2)>.sec2_img>ul>li');
const liList3 = document.querySelectorAll('.sect2>ul>li:nth-of-type(3)>.sec2_img>ul>li');
const liList4 = document.querySelectorAll('.sect2>ul>li:nth-of-type(4)>.sec2_img>ul>li');
const liList5 = document.querySelectorAll('.sect2>ul>li:nth-of-type(5)>.sec2_img>ul>li');
const img1 = document.querySelector('.bigImg1');
const img2 = document.querySelector('.bigImg2');
const img3 = document.querySelector('.bigImg3');
const img4 = document.querySelector('.bigImg4');
const img5 = document.querySelector('.bigImg5');

function selectItem1(event){
img1.setAttribute('src',event.target.dataset.img);
}
liList1[0].addEventListener('click', selectItem1);
liList1[1].addEventListener('click', selectItem1);
liList1[2].addEventListener('click', selectItem1);

function selectItem2(event){
  img2.setAttribute('src',event.target.dataset.img);
}
liList2[0].addEventListener('click', selectItem2);
liList2[1].addEventListener('click', selectItem2);
liList2[2].addEventListener('click', selectItem2);
  
function selectItem3(event){
  img3.setAttribute('src',event.target.dataset.img);
}
liList3[0].addEventListener('click', selectItem3);
liList3[1].addEventListener('click', selectItem3);
liList3[2].addEventListener('click', selectItem3);
liList3[3].addEventListener('click', selectItem3);

function selectItem4(event){
  img4.setAttribute('src',event.target.dataset.img);
}
liList4[0].addEventListener('click', selectItem4);
liList4[1].addEventListener('click', selectItem4);
liList4[2].addEventListener('click', selectItem4);

function selectItem5(event){
  img5.setAttribute('src',event.target.dataset.img);
}
liList5[0].addEventListener('click', selectItem5);
liList5[1].addEventListener('click', selectItem5);
liList5[2].addEventListener('click', selectItem5);

