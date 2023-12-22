import React, { useState } from 'react';
import "./services.css";

const Services = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }

  return (
    <section className="services section" id="services">
        <h2 className="section__title">Hizmetler</h2>
        <span className="section__subtitle">Neler Yaptım?</span>

        <div className="services__container container grid">
            <div className="services__content">
                <div>
                    <i className="uil uil-web-grid services__icon"></i>
                    <h3 className="services__title" >Web <br /> Tasarımı</h3>
                </div>

                <span className="services__button" onClick={() => toggleTab(1)}>Görüntüle
                <i className="uil uil-arrow-right services__button-icon"></i></span>

                <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                        <h3 className="services__modal-title">Web Tasarımı</h3>
                        <p className="services__modal-description">Yeni mezunum, öğrenmeye ve gelişmeye açığım. Yaptığım işi en iyi şekilde sunmak isterim</p>
                        
                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Kullanıcı arayüzünü geliştiriyorum.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Web sayfası geliştirme üzerine uğraşıyorum.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Kişisel web sayfası yapıyorum.</p>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <i className="uil uil-arrow services__icon"></i>
                    <h3 className="services__title">Mobil Uygulama <br /> Geliştiricisi</h3>
                </div>

                <span className="services__button" onClick={() => toggleTab(2)}>Görüntüle
                <i className="uil uil-arrow-right services__button-icon"></i></span>

                <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                        <h3 className="services__modal-title">Mobil Uygulama Geliştiricisi</h3>
                        <p className="services__modal-description">Yeni mezunum, öğrenmeye ve gelişmeye açığım. Yaptığım işi en iyi şekilde sunmak isterim</p>
                        
                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Android Studio ile yapıyorum.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Mobil uygulama olarak bir tablet onarım uygulaması yaptım.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Veritabanına bağlı ve uygulama seçenekleri çok.</p>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <i className="uil uil-edit services__icon"></i>
                    <h3 className="services__title">ASP.NET Core MVC <br /> Uygulama Geliştiricisi</h3>
                </div>

                <span className="services__button" onClick={() => toggleTab(3)}>Görüntüle
                <i className="uil uil-arrow-right services__button-icon"></i></span>

                <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                        <h3 className="services__modal-title">Asp.Net Core MVC Uyggulama Geliştiricisi</h3>
                        <p className="services__modal-description">Yeni mezunum, öğrenmeye ve gelişmeye açığım. Yaptığım işi en iyi şekilde sunmak isterim</p>
                        
                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Web sayfası ve portal yapıyorum.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">SqlServer ile bağlantı kuruyorum..</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Kurumsl ve kişisel web sayfaları yapıyorum.</p>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services