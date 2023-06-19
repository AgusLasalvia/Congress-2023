export default function HomeCTA() {

     function scrollAnimation() {
          var element = document.getElementById('homeCta');

          if (element) {
               var currentPosition = window.pageYOffset;

               if (currentPosition > 500) {
                    element.animate({
                         transform: 'translate(0px, 60px)',
                         opacity: 0,
                    }, { duration: 2000, fill: "forwards" });
               } else {
                    element.animate({
                         opacity: 1,
                         transform: 'translate(0px, 0px)',
                    }, { duration: 1000, fill: "forwards" });
               }
          }
     }

     // CTA dissapears when scrolling past 500px
     window.addEventListener('scroll', scrollAnimation);

     // CTA scrolls to 1000px on click
     // const scrollDown = () => {
     //      window.scrollTo(0, 300);
     // }

     return (
          <div className="home-cta" id="homeCta">
               <p className="text-cta">Find out more</p>
               <img src="assets/svg/arrow-cta.svg" alt="" className="arrow" />
          </div>
     )
}