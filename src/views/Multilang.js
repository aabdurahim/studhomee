/*let langs = document.querySelector(".langs"),
     link = document.querySelectorAll("a"),
     title = document.querySelector(".title"),
     descr = document.querySelector(".description");

link.forEach(el=>{
     el.addEventListener("click", ()=>{
          langs.querySelector(".active").classList.remove("active");
          el.classList.add("active");

          let attr = el.getAttribute("language")

          title.textContent = data[attr].title
          descr.textContent = data[attr].description
     })
})

let data = {
     kazakh: {
          title: ""
           },
     english: {
          title: "Hello World"
           },
     russian: {
          title: "Привет мир"
          }
}*/
/*/*<div class="langs" src="multilang.js">
    <a href="#" src="multilang.js" language="english" class="active">ENG</a>
    <a href="#" src="multilang.js" language="russian">РУС</a>
    <a href="#" src="multilang.js" language="kazakh">kaz</a>
</div>*/ 

/*

        function googleTranslateElementInit() {
            new google.translate.TranslateElement({
                pageLanguage: 'en',
                includedLanguages: 'ru,en,kk',
                layout: google.translate.TranslateElement.InlineLayout.SIMPLE
            }, 'google_translate_element');
        }

        // Загрузка скрипта Google Translate
        function loadGoogleTranslateScript() {
            const script = document.createElement('script');
            script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
            document.getElementsByTagName('head')[0].appendChild(script);
        }

        // Инициализация Google Translate после загрузки страницы
        window.onload = function () {
            loadGoogleTranslateScript();
        };
    
*/