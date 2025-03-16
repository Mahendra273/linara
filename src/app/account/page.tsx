'use client'
import { useState } from "react";
import { Phone, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export default function MobileLogin() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const countries = [
    { code: "+91", flag: "🇮🇳" },
    { code: "+1", flag: "🇺🇸" },
    { code: "+44", flag: "🇬🇧" },
    { code: "+61", flag: "🇦🇺" },
  ];

  const validatePhoneNumber = (number: string) => /^[6-9]\d{9}$/.test(number);

  const handleVerify = () => {
    if (!validatePhoneNumber(phoneNumber)) {
      setError("Enter a valid 10-digit mobile number");
      return;
    }
    setError("");
    alert("Verification Sent!");
  };

  return (
    <div className="flex flex-col items-center space-y-4 p-6 bg-black text-white min-h-screen justify-center">
      <h2 className="text-2xl font-semibold">Enter Mobile Number</h2>

      {/* Input Field */}
      <div className="flex items-center border border-gray-600 rounded-xl p-3 w-80 bg-gray-900">
        <div className="relative">
          <button
            className="flex items-center space-x-2 px-3 py-1 border-r border-gray-600"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <span>{countries.find(c => c.code === countryCode)?.flag}</span>
            <span className="text-lg">{countryCode}</span>
            <ChevronDown size={16} className="text-gray-400" />
          </button>

          {dropdownOpen && (
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              className="absolute left-0 top-10 bg-gray-800 shadow-lg rounded-lg overflow-hidden"
            >
              {countries.map((c) => (
                <button
                  key={c.code}
                  className="flex items-center space-x-2 px-3 py-2 hover:bg-gray-700 w-full text-left"
                  onClick={() => {
                    setCountryCode(c.code);
                    setDropdownOpen(false);
                  }}
                >
                  <span>{c.flag}</span>
                  <span>{c.code}</span>
                </button>
              ))}
            </motion.div>
          )}
        </div>

        <input
          type="text"
          placeholder="Enter mobile number"
          className="w-full bg-transparent outline-none text-white text-lg px-3"
          value={phoneNumber}
          onChange={(e) => {
            setPhoneNumber(e.target.value.replace(/[^0-9]/g, ""));
            setError("");
          }}
          maxLength={10}
        />
        <Phone size={20} className="text-gray-400" />
      </div>

      {/* Error Message */}
      {error && <motion.p className="text-red-500 text-sm">{error}</motion.p>}

      {/* Verify Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-white text-black px-6 py-2 rounded-xl hover:bg-gray-300 transition"
        onClick={handleVerify}
      >
        Verify
      </motion.button>
    </div>
  );
}
