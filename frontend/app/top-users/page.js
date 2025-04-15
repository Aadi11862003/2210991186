"use client";
import { useState, useEffect } from "react";
import { getTopUsers } from "@/lib/api";

export default function TopUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const data = await getTopUsers();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
        setUsers([]);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  if (loading) {
    return <div className="max-w-2xl mx-auto">Loading...</div>;
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)] bg-clip-text text-transparent tracking-tighter">
        Top Users
      </h1>
      <div className="space-y-4">
        {users && users.length > 0 ? (
          users.map((user, index) => (
            <div
              key={`user-${user.id}-${index}`}
              className="backdrop-blur-sm bg-dark-card border border-gray-700/30 rounded-xl p-6 flex items-center hover:bg-dark-light/80 transition-all duration-300"
            >
              <span className="text-2xl font-bold text-accent mr-6">
                #{index + 1}
              </span>
              <div>
                <h3 className="font-medium text-gray-200">{user.name}</h3>
                <p className="text-sm text-gray-400">
                  {user.commentCount} comments
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-400">No users available</p>
        )}
      </div>
    </div>
  );
}
