import pic1 from "../images/pic1.jpg"
import pic2 from "../images/pic2.jpg"
import pic4 from "../images/pic4.jpg"
import pic5 from "../images/pic5.jpg"

export default function Gallery() {
    return (
        <div>
            <div className="hero container max-w-screen-lg mx-auto pb-10" >
                <img className="max-auto" src={pic1} alt="pic1"></img>
            </div>
            <div className="hero container max-w-screen-lg mx-auto pb-10">
                <img className="max-auto" src={pic2} alt="pic2"></img>
            </div>
            <div className="hero container max-w-screen-lg mx-auto pb-10">
                <img className="max-auto" src={pic4} alt="pic4"></img>
            </div>

            <div className="hero container max-w-screen-lg mx-auto pb-10">
                <img className="max-auto" src={pic5} alt="pic5"></img>

            </div>

        </div>

    )
}
