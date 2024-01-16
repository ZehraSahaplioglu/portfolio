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
                        <p className="services__modal-description">Kişisel Web Sitesi</p>
                        
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

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">HTML, CSS, JavaScript, ReactJS dillerini/ kütüphanelerini kullandım.</p>
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
                        <p className="services__modal-description">Kotlin Uygulama Geliştiricisi</p>
                        
                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Android Studio ile Kotlin dilini kullanarak yapıyorum.</p>
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

                        <h3 className="services__modal-title">Asp.Net Core MVC</h3>
                        <p className="services__modal-description">MVC Modelinde birçok uygulama yaptım ve kendimi hala geliştiriyorum.</p>
                        
                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">MVC tasarım deseni, uygulamayı Model, View ve Controller olmak üzere modüler parçalara ayırarak bakımı ve geliştirmeyi kolaylaştırır. Her bir bölüm, belirli bir sorumluluğa sahiptir.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Model-View-Controller ayrımı, uygulamanın farklı bölümlerini izole etmeyi ve böylece birim testlerin daha kolay yapılmasını sağlar. Controller ve Model katmanları bağımsız bir şekilde test edilebilir.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">MVC, URL'leri belirli bir denetleyici ve eyleme yönlendirmek için güçlü bir yönlendirme sistemi içerir. Bu, URL'lerin anlamlı ve okunabilir olmasını sağlar.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">ASP.NET Core MVC, doğrulama ve yetkilendirme için entegre bir sistem sunar. Identity ve Role-Based Authorization gibi özelliklerle kullanıcı yönetimi ve yetkilendirme işlemleri kolayca gerçekleştirilebilir.</p>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <i className="uil uil-database services__icon"></i>
                    <h3 className="services__title" >Veri Tabanı <br /> Uygulama Geliştiricisi</h3>
                </div>

                <span className="services__button" onClick={() => toggleTab(4)}>Görüntüle
                <i className="uil uil-arrow-right services__button-icon"></i></span>

                <div className={toggleState === 4 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                        <h3 className="services__modal-title">Sql Server</h3>
                        <p className="services__modal-description">Microsoft Sql Server uygulaması kullanıcısıyım.</p>
                        
                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Sql Server arayüzünü kullanabiliyorum.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Projelerim için veri tabanlaarı oluşturdum.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Migration veya direk SqlServer ile veri tabanında tablolar oluşturuyorum.</p>
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
