
// import React, { useEffect } from "react";

// const MyAdComponent = () => {
//     useEffect(() => {
//         try {
//             (window.adsbygoogle = window.adsbygoogle || []).push({});
//         } catch (e) {
//             console.error("AdSense Error:", e);
//         }
//     }, []);

//     return (
//         <div style={{ textAlign: "center", margin: "20px 0" }}>
//             <ins
//                 className="adsbygoogle"
//                 style={{ display: "block" }}
//                 data-ad-client="ca-pub-1234567890123456" // Replace with your AdSense client ID
//                 data-ad-slot="1234567890" // Replace with your AdSense slot ID
//                 data-ad-format="auto"
//                 data-full-width-responsive="true"
//             ></ins>
//         </div>
//     );
// };

// export default MyAdComponent;



import React, { useEffect, useState } from "react";

const MyAdComponent = () => {
    const [adStatus, setAdStatus] = useState("Loading Google Ads...");

    useEffect(() => {
        try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
            // Set a timeout to check if the ad loaded successfully
            const timeoutId = setTimeout(() => {
                const ads = document.querySelector(".adsbygoogle");
                if (ads && ads.innerHTML.trim() !== "") {
                    setAdStatus(""); // Ad loaded successfully, remove status text
                } else {
                    setAdStatus("Google Ads not available.");
                }
            }, 5000); // 5-second timeout

            return () => clearTimeout(timeoutId); // Cleanup timeout
        } catch (e) {
            console.error("AdSense Error:", e);
            setAdStatus("Error loading Google Ads.");
        }
    }, []);

    return (
        <div style={{ textAlign: "center", margin: "20px 0" }}>
            {adStatus && <p>{adStatus}</p>}
            <ins
                className="adsbygoogle"
                style={{ display: "block" }}
                data-ad-client="ca-pub-1234567890123456" // Replace with your AdSense client ID
                data-ad-slot="1234567890" // Replace with your AdSense slot ID
                data-ad-format="auto"
                data-full-width-responsive="true"
            ></ins>
        </div>
    );
};

export default MyAdComponent;
