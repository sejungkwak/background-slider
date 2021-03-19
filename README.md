# Background Slider

<img width="1429" alt="Screenshot" src="images/screenshot.png">

#### project notes

+ carousel 

1. HTML
- div for background-image
- another div inside background-image div
- button*2 for control

2. CSS
- background-blend-mode

3. JavaScript
- click eventListener

+ Challenge from Brad Traversy & Florin Pop on Udemy '50 Projects in 50 Days'

#### Takeaways from the instructor

1. HTML
- a container wrap all the slides
- just one background-image for each image

2. CSS
- background-image in the body selector
- body: background-size: cover; transition: 400ms;
- used ::before for overlay
- ##background-size: cover##
- for the arrows: position:absolute > left: calc(15vw - 65px);, right: calc(15vw - 65px);
- transition

3. JavaScript
- set active slide + increment / decrement inside eventListener
```
let activeSlide = 0
```
- background-image for body
```
function setBgToBody() {
    body.style.backgroundImage = slide[activeSlide].style.backgroundImage
}
```
- change active slide
```
function setActiveSlide() {
    slides.forEach(slide => slide.classList.remove('active'))
    slide[activeSlide].classList.add('active')
}
```