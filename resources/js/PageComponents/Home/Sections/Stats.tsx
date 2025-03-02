import React from "react";
import stat from "../../../Types/Stat";
import StatsSettings from "../../../Types/StatsSettings";

type StatsProps = {
    statsSettings : StatsSettings
}

const Stats = ({statsSettings} : StatsProps) => {
    const stats: stat[] = [
        {
            desc: "Профессиональных сотрудников",
            imgUrl: "/images/Home/stats/gunman.jpg",
            numText: statsSettings.staff,
        },
        {
            desc: "Год обслуживания компаний",
            imgUrl: "/images/Home/stats/hall.jpg",
            numText: statsSettings.years,
        },
        {
            desc: "Проведенных работ",
            imgUrl: "/images/Home/stats/guardWithTalkie.jpg",
            numText: statsSettings.jobs,
        },
    ];

    return (
        <section className="stats container">
            {stats.map((item, index) => (
                <article className="stats__card" key={index}>
                    <div className="stats__card-top">
                        <img src={item.imgUrl} alt={"Карточка: " + item.desc} className="stats__card-img" />
                    </div>
                    <div className="stats__card-bottom">
                      <h2 className="stats__card-num">{item.numText}</h2>
                      <h3 className="stats__card-desc">{item.desc}</h3>
                    </div>
                </article>
            ))}
        </section>
    );
};

export default Stats;
