const burger = document.querySelector(".nav_menu")
const menu = document. querySelector(".nav_link")

burger.addEventListener("click", function(){
    menu.classList.toggle("nav_link_active")
})
const blogs = [
    // {} - обект то есть 1 карточка
    {
        // key: value
        photo: "img/IMAGE 1.png",
        job: "Photography",
        title: "Helmut Lang celebrates taxi drivers worldwide in latest campaign",
        author: "By Alessandra Ortiz"
    },
    {
        photo: "img/IMAGE2.png",
        job: "Photography",
        title: "Bowlcut launch a new summer collection that pays homage to “UK legends",
        author: "By Rosanna Ondricka"
    },
    {
        photo: "img/IMAGE3.png",
        job: "Photography",
        title: "Thousands of previously unseen photographs by Andy Warhol will be made public this Autumn",
        author: "By Annie Lueilwitz "
    },
    {
        photo: "img/IMAGE4.png",
        job: "Interactive Design",
        title: "London-based Yinka Ilori’s storytelling furniture",
        author: "By Annie Lueilwitz"
    },
    {
        photo: "img/IMAGE5.png",
        job: "Graphic Design",
        title: "Anonymous Israeli art collective Broken Fingaz direct music video for U2 and Beck",
        author: "By Simeon Brekke"
    },
    {
        photo: "img/IMAGE6.png",
        job: "Architecture",
        title: "Suzanne Saroff’s meticulously arranged photographs alter perceptions",
        author: "By Reta Torphy"
    },
]
blogs.map((val) => {
    const blog_main = document.querySelector(".blog_main")
    const blog_card = document.createElement("div")
    blog_card.classList.add("blog_card")
    blog_card.innerHTML = `
        <img src="${val.photo}" alt="">
        <h3>${val.job}</h3>
        <h1>${val.title}</h1>
        <h5>${val.author}</h5>
    `
blog_main.appendChild(blog_card)
})

const posts = [
    {
        photo: "img/post card/IMAGE1.png",
        job: "Illustration",
        title: "Japan House opens in mountainside to foster peak creativity.",
        author: "By Reta Torphy"
    },
    {
        photo: "img/post card/IMAGE2.png",
        job: "Photography",
        title: "Helmut Lang celebrates taxi drivers worldwide in latest campaign",
        author: "By Alessandra Ortiz"
    },
    {
        photo: "img/post card/IMAGE3.png",
        job: "Photography",
        title: "Bowlcut launch a new summer collection that pays homage to “UK legends”",
        author: "By Rosanna Ondricka"
    },
    {
        photo: "img/post card/IMAGE4.png",
        job: "Photography",
        title: "Thousands of previously unseen photographs by Andy Warhol will be made public this Autumn",
        author: "By Annie Lueilwitz"
    },
    {
        photo: "img/post card/IMAGE5.png",
        job: "Interactive Design",
        title: "London-based Yinka Ilori’s storytelling furniture",
        author: "By Annie Lueilwitz"
    },
    {
        photo: "img/post card/IMAGE6.png",
        job: "Graphic Design",
        title: "Anonymous Israeli art collective Broken Fingaz direct music video for U2 and Beck",
        author: "By Simeon Brekke"
    },
    {
        photo: "img/post card/IMAGE7.png",
        job: "Architecture",
        title: "Suzanne Saroff’s meticulously arranged photographs alter perceptions",
        author: "By Reta Torphy"
    },
    {
        photo: "img/post card/IMAGE8.png",
        job: "Graphic Design",
        title: "Anu Ambasna’s playful illustrations celebrate club culture, brown bodies and perfect paunches",
        author: "By Leo Bartell"
    },
]
posts.map((val) => {
    const blog_main = document.querySelector(".post_main")
    const blog_card = document.createElement("div")
    blog_card.classList.add("post_card")
    blog_card.innerHTML = `
        <img src="${val.photo}" alt="">
        <h3>${val.job}</h3>
        <h1>${val.title}</h1>
        <h5>${val.author}</h5>
    `
blog_main.appendChild(blog_card)
})

const features = [
{
    photo:"img/post card/IMAGE.png",
    job:"Graphic Design",
    title:"A Brief History of the FIFA World Cup Logo",
    author:"By Clem Onojeghuo"
},
{
    photo:"img/post card/IMAGE01.png",
    job:"Graphic Design",
    title:"Need a guide to LA’s graphic design scene? Shoplifters’ new issue has got your back",
    author:"By Alessandra Ortiz"
},
{
    photo:"img/post card/IMAGE02.png",
    job:"Photography",
    title:"Fred Rowson directs film for Years and Years",
    author:"By Coby Gottlieb"
},
{
    photo:"img/post card/IMAGE03.png",
    job:"Illustration",
    title:"M&C Saatchi and Fontsmith collaborate on font collection for House of St Barnabas",
    author:"By Annie Lueilwitz"
},
]
features.map((val) => {
    const main = document.querySelector(".features_main")
    const card = document.createElement("div")
    card.classList.add("features_card")
    card.innerHTML = `
        <img src="${val.photo}" alt="">
        <h3>${val.job}</h3>
        <h1>${val.title}</h1>
        <h5>${val.author}</h5>
    `
main.appendChild(card)
})