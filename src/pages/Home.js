import pic5 from "../images/pic5.jpg"
export default function Home() {
    return (
        <div>
<div className="overflow-x-auto mt-4">
            <div className="w-full scroll-smooth md:scroll-auto max-w-4xl mx-auto overflow-hidden bg-white divide-y divide-gray-300 rounded-lg whitespace-nowrap">
              <p className="text-justify whitespace-normal">
              This site is updating
              </p>
            
            </div>
            <div className="hero container max-w-screen-lg mx-auto pb-10">
                <img className="max-auto" src={pic5} alt="pic5"></img>

            </div>

          </div>
        </div>
        

    )
}