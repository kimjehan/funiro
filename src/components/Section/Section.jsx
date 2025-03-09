import s from "./Section.module.css"
import fon_img from '/assets/images/fon.jpg';

function Section() {
    return (
        <section className={s.AllSection}>
            <div className={s.fon}>
             <img src={fon_img} alt="logo" />
             <div className={s.Text}>
                 <p>New Arrival</p>
                 <p className={s.Bold}>Discover Our</p>
                 <p className={s.Bold}>New Collection</p>
                 <p>lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut<br/>
                 elit tellus,luctus nec ullamcorper mattis.</p>
                 <button className={s.btn}>BY NOW</button>
             </div>
            </div>
        </section>

    )
} export default Section;