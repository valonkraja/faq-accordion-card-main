const faq = document.querySelector(".faq")
const faqQuestions = document.querySelectorAll(".faq-question")



faq.addEventListener("click", function(e){
    if(e.target.classList.contains("question-t")){
        if(e.target.parentElement.classList.contains("active")){
            e.target.parentElement.classList.remove("active")
        }else{
            faqQuestions.forEach(faqQuestion => {
                faqQuestion.classList.remove("active")
            })
            e.target.parentElement.classList.add("active")
        }
    }
})