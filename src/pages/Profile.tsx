import React, { useEffect, useRef, useState } from "react";
import { useAuth } from "@/contexts/AuthContext";

const LOCAL_KEY = "bhuvikart-profile-extra";

const Profile: React.FC = () => {
  const { user } = useAuth();
  const [photo, setPhoto] = useState<string | null>(null);
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const stored = localStorage.getItem(LOCAL_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      setPhoto(parsed.photo || null);
      setMobile(parsed.mobile || "");
      setAddress(parsed.address || "");
    }
  }, []);

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = ev => {
        setPhoto(ev.target?.result as string);
        localStorage.setItem(LOCAL_KEY, JSON.stringify({ photo: ev.target?.result, mobile, address }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem(LOCAL_KEY, JSON.stringify({ photo, mobile, address }));
    alert("Profile updated!");
  };

  if (!user) {
    return (
      <div className="container mx-auto p-6 max-w-3xl">
        <h1 className="text-3xl font-bold mb-4">Profile</h1>
        <p>You are not logged in. Please log in to view your profile.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 max-w-3xl sm:p-6">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4">Profile</h1>
      <form className="bg-white rounded shadow p-2 sm:p-4 space-y-4" onSubmit={handleSave}>
        <div className="flex flex-col sm:flex-row items-center sm:space-x-4 space-y-4 sm:space-y-0">
          <div>
            {photo ? (
              <img src={photo} alt="Profile" className="w-20 h-20 rounded-full object-cover border" />
            ) : (
              <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 border">No Photo</div>
            )}
          </div>
          <div>
            <button
              type="button"
              className="bg-blue-600 text-white px-3 py-1 rounded w-full sm:w-auto mt-2 sm:mt-0"
              onClick={() => fileInputRef.current?.click()}
            >
              {photo ? "Change Photo" : "Add Photo"}
            </button>
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              className="hidden"
              onChange={handlePhotoChange}
            />
          </div>
        </div>
        <div>
          <label className="font-semibold block mb-1">Name</label>
          <input type="text" value={user.name || "N/A"} disabled className="w-full border rounded p-2 bg-gray-100" />
        </div>
        <div>
          <label className="font-semibold block mb-1">Email</label>
          <input type="email" value={user.email} disabled className="w-full border rounded p-2 bg-gray-100" />
        </div>
        <div>
          <label className="font-semibold block mb-1">Mobile Number</label>
          <input
            type="tel"
            value={mobile}
            onChange={e => setMobile(e.target.value)}
            className="w-full border rounded p-2"
            placeholder="Enter mobile number"
          />
        </div>
        <div>
          <label className="font-semibold block mb-1">Address</label>
          <textarea
            value={address}
            onChange={e => setAddress(e.target.value)}
            className="w-full border rounded p-2"
            placeholder="Enter address"
          />
        </div>
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded w-full sm:w-auto">Save Changes</button>
      </form>
    </div>
  );
};

export default Profile