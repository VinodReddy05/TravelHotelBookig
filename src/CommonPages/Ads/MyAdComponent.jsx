
import React, { useEffect } from "react";

const MyAdComponent = () => {
    useEffect(() => {
        try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (e) {
            console.error("AdSense Error:", e);
        }
    }, []);

    return (
        <div style={{ textAlign: "center", margin: "20px 0" }}>
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
