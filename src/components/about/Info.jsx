import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
            <i class='bx bx-award about__icon' ></i>
            <h3 className="about__title">Deneyim</h3>
            <span className="about__subtitle">Yeni Mezun</span>
        </div>

        <div className="about__box">
            <i class='bx bx-briefcase about__icon'></i>
            <h3 className="about__title">Tamamlanmış Projeler</h3>
            <span className="about__subtitle">4 + Proje</span>
        </div>

        <div className="about__box">
            <i class='bx bxs-graduation about__icon'></i>
            <h3 className="about__title">Akademik Ortalama</h3>
            <span className="about__subtitle">3.14</span>
        </div>
    </div>
  )
}

export default Info
