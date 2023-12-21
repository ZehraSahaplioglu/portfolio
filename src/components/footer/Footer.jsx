import React from 'react';
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Zehra</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">Hakkımda</a>
                </li>

                <li>
                    <a href="#portfolio" className="footer__link">Projeler</a>
                </li>

                <li>
                    <a href="#testimonials" className="footer__link">Referanslar</a>
                </li>
            </ul>

            <div className="footer__social">
                <a href="https://github.com/ZehraSahaplioglu" className="footer__social-link" target='_blank'>
                    <i class="bx bxl-github"></i>
                </a>

                <a href="https://github.com/ZehraSahaplioglu" className="footer__social-link" target='_blank'>
                    <i class="bx bxl-git"></i>
                </a>

                <a href="https://www.linkedin.com/in/zehra-%C5%9Fahapl%C4%B1o%C4%9Flu-75b38a252/" className="footer__social-link" target='_blank'>
                    <i class="bx bxl-linkedin"></i>
                </a>

                <a href="https://dribbble.com/" className="footer__social-link" target='_blank'>
                    <i class="bx bxl-dribbble"></i>
                </a>
            </div>

            <span className="footer__copy">&#169; Zehra ŞAHAPLIOĞLU. Tüm hakları saklıdır</span>
        </div>
    </footer>
  )
}

export default Footer