import React, { useState } from 'react';
import "./qualification.css";

const Qualification = () => {

  const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }

  return (
    <section className="qualification section">
      <h2 className="section__title">Yeterlilik</h2>
      <span className="section__subtitle">Kişisel Yolculuğum</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={() => toggleTab(1)}>
              <i className="uil uil-graduation-cap qualification__icon"></i>   
              Eğitim          
          </div>

          <div className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={() => toggleTab(2)}>
              <i className="uil uil-briefcase-alt qualification__icon"></i>   
              Deneyim          
          </div>
        </div>

        <div className="qualification__sections">
          <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content "}>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">BTK Akademi</h3>
                <span className="qualification__subtitle">Malatya - FrontEnd Atolyesi</span>

                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 20 Kasım - 22 Aralık 2023
                </div>
              </div>

            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Lisans</h3>
                <span className="qualification__subtitle">Malatya - İnönü Üniversitesi</span>

                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2019 - 2024
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Lise</h3>
                <span className="qualification__subtitle">Haci Avni Kız Anadolu İmam Hatip Lisesi Fen ve Sosyal Bilimler Proje Okulu</span>

                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2015 - 2019
                </div>
              </div>
            </div>

          </div>

          <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content "}>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">BTK Akademi</h3>
                <span className="qualification__subtitle">Malatya - FrontEnd Atolyesi</span>

                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 20 Kasım - 22 Aralık 2023
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">UME Stajı</h3>
                <span className="qualification__subtitle">Malatya - Battalgazi Belediyesi</span>

                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 16 Ekim 2023 - 21 Ocak 2024
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Gönüllü Stajyerlik</h3>
                <span className="qualification__subtitle">Malatya TCDD - Taşımacılık</span>

                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 7 Ağustos - 4 Eylül 2023
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

          </div>
        </div>
      </div>

    </section>
  )
}

export default Qualification