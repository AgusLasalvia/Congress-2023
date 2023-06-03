export default function Footer() {
     return (
          <div className="footer">
               <div className="footer-content">
                    <img src="/assets/svg/stamp.svg" alt="QUITEL 2023" className="footer-stamp" id="menuStamp" />
                    <div className="footer-text">
                         <p>
                              XLVI International Congress of
                              <br />
                              Theoretical Chemists of Latin Expression
                         </p>
                         <p>
                              26-30th NOVEMBER 2023
                              <br />
                              MONTEVIDEO, URUGUAY
                         </p>
                    </div>

                    <div className="social-media">
                         <a href="https://www.instagram.com/quitel_2023/" rel="noreferrer" target="_blank"><img src="/assets/svg/instagram-icon.svg" alt="" className="sm-icon" /></a>
                         <a href="https://twitter.com/quitel_2023" rel="noreferrer" target="_blank"><img src="/assets/svg/twitter-icon.svg" alt="" className="sm-icon" /></a>
                    </div>
               </div>
          </div>
     )
}
