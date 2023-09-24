import pic1 from "../images/pic1.jpg"
export default function Contact() {
    return (
        <div>
        <div className="overflow-x-auto mt-4">
                    <div className="w-full scroll-smooth md:scroll-auto max-w-4xl mx-auto overflow-hidden bg-white divide-y divide-gray-300 rounded-lg whitespace-nowrap"><br></br>
                      <p className="text-justify whitespace-normal font-extrabold font-serif"><br></br>
                      This site is being updated
                      </p>
                    <br></br>
                    </div>
                    <div className="hero container max-w-screen-lg mx-auto pb-10">
                        <img className="max-auto" src={pic1} alt="pic1"></img>
        
                    </div>
        
                  </div>
                </div>
    )
}