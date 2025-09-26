const elements = {
  header: document.getElementById('header'),
  title: document.getElementById('title'),
  excerpt: document.getElementById('excerpt'),
  profile_img: document.getElementById('profile_img'),
  name: document.getElementById('name'),
  date: document.getElementById('date'),
  cardContent: document.querySelector('.card-content'),
}

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2500)

const contentData = {
  headerImage:
    'https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
  title: 'Analyzing Modern JS Frameworks',
  excerpt:
    'A deep dive into the performance, ecosystem, and developer experience of today’s most popular JavaScript frameworks.',
  profileImage: 'https://randomuser.me/api/portraits/lego/1.jpg',
  name: 'Alex Doe',
  date: 'Oct 08, 2023',
}

function getData() {
  elements.header.innerHTML = `<img src="${contentData.headerImage}" alt="code on a screen" />`
  elements.title.innerHTML = contentData.title
  elements.excerpt.innerHTML = contentData.excerpt
  elements.profile_img.innerHTML = `<img src="${contentData.profileImage}" alt="user avatar" />`
  elements.name.innerHTML = contentData.name
  elements.date.innerHTML = contentData.date

  // Show the content with a fade-in effect
  elements.cardContent.style.opacity = 1

  // Remove placeholder animations
  animated_bgs.forEach((bg) => {
    bg.classList.remove('animated-bg')
  })
  animated_bg_texts.forEach((bg) => {
    bg.classList.remove('animated-bg-text')
  })
}