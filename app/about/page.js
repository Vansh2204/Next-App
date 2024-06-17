import Script from "next/script";

export default function About() {
    return (
        <>
            {/* <Script src="/about.js" >

        </Script> */}
            <div className="text-justify m-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                <h1 className="font-semibold">Welcome to Ticket Hunt !</h1>
                <p className="text-sm mt-2">At Ticket Hunt, we are passionate about bringing cricket enthusiasts closer to the action. Our platform is designed to provide a seamless and convenient ticket booking experience for all cricket matches, from local games to international tournaments. Whether you're a die-hard fan or a casual spectator, we make it easy for you to secure your seat at the next big match.</p>
                </div>
                <div>
                    <h1 className="font-semibold">Why choose us ?</h1>
                    <ul className="mt-2">
                        <li>
                        Comprehensive Match Listings: Stay updated with the latest schedules and never miss out on the action. Our platform lists all upcoming cricket matches, making it easy for you to find events of interest.
                        </li>
                        <li>
                        Exclusive Offers: Get the best deals on tickets, including early bird discounts and special promotions for our members.

                        </li>
                        <li>
                        Real-time Updates: Receive instant notifications about ticket availability, match changes, and other important updates.
                        </li>
                    </ul>
                </div>
            </div>

        </>
    )
}