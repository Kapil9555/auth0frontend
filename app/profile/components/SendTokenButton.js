"use client";
import { useState } from "react";
import axios from "axios";
import BASE_URL from "../../../constant"

export default function SendTokenButton() {
    const [loading, setLoading] = useState(false);

    const sendTokenToBackend = async () => {
        setLoading(true);
        try {
            const res = await fetch('/api/auth/token');
            const data = await res.json();

            console.log("token check",data)

            await axios.post(`${BASE_URL}/auth/callback`, { token: data.accessToken });
            alert("Token sent to backend & email sent!");
        } catch (error) {
            alert("Error sending token");
        }
        setLoading(false);
    };

    return (
        <button
        onClick={sendTokenToBackend}
        disabled={loading}
        className="px-4 py-2 rounded-md bg-blue-500 text-white disabled:bg-gray-400"
      >
        {loading ? "Sending..." : "Click to Verify Email"}
      </button>
      
    );
}
