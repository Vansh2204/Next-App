import Script from "next/script";

export default function Contact(){
    return(
        <>
        {/* <Script src="/contact.js">

        </Script> */}
        <div className="flex justify-center">
        <div className="text-justify">
            <p>We love hearing from our users! If you have any questions, suggestions, or need assistance, please feel free to reach out to us:</p>
            <ul className="mt-5">
                <li className="flex justify-center">
                Email: support@crickettickets.com
                </li>
                <li className="flex justify-center">
                Phone: +1 (800) 123-4567
                </li>
                <li className="flex justify-center">
                Address: 123 Cricket Lane, Sportstown, ST 45678
                </li>
            </ul>
        </div>
        </div>

        </>
    )
}