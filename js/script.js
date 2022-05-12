window.addEventListener('DOMContentLoaded', ()=>{
    const openPopup = document.querySelector('.popup-open'),
          openPopup2 = document.querySelector('.popup-open2'),
          closePopup = document.querySelector('.popup-close'),
          popupBg = document.querySelector('.popup-bg'),
          bodyLock = document.querySelector('body'),
          openSucces = document.querySelector('.order-call'),
          closeSucces = document.querySelector('.succes-close'),
          succesBg = document.querySelector('.succes-bg');


          function openPopUp(){
            popupBg.style.display = 'block'; 
          }
          
          function closePopUp(){
            popupBg.style.display = 'none'; 
          }

          function openSucCes(){
              succesBg.style.display  = 'block';
              closePopUp();
          }

          function closeSucCes(){
              succesBg.style.display  = 'none';
          }


          openPopup.addEventListener('click', (event) =>{
            event.preventDefault();
            const target = event.target;
            bodyLock.classList.add('lock');
            openPopUp();
          });

          openPopup2.addEventListener('click', (event) =>{
          event.preventDefault();
          const target = event.target;
          bodyLock.classList.add('lock');
          openPopUp();
          });

        
          closePopup.addEventListener('click', (event) =>{
            const target = event.target; 
            bodyLock.classList.remove('lock');
            event.preventDefault();
            closePopUp();
          });

          openSucces.addEventListener('click', (event) => {
            event.preventDefault();
            openSucCes();
          });

          closeSucces.addEventListener('click', (event) => {
            event.preventDefault();
            closeSucCes();
            bodyLock.classList.remove('lock');
          });


          

});