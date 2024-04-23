import './about.css';

export function About(){
    return(
        <>
        <div className="container">
            <div className="aboutus_inner">
                <div className="aboutus_info">
                    <img src='/aboutus.png' alt='о нас' ></img>
                    <div className="aboutus_text">
                        <a className='title_aboutus'>FISHBAR</a><br/>
                        <a className='text_ab'>- это успешный проект от LatifaGroups с акцентом на морскую еду. <br />
У нас работают лучшие шеф-повара и персонал, обучающийся по всему миру. <br />
Меню разработано совместно с ведущими шефами из “мишленовских” ресторанов.</a>
                    </div>
                </div>
                <img src="/best.svg" alt="best" className='best_aboutus' />
            </div>
        </div>
        </>
    )
}