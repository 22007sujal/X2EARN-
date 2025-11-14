"use client";

import { useEffect, useState, useCallback } from "react";
import axios from "axios";

interface User {
  id: number;
  username: string;
  wallet_address: string;
  jobs_done: number;
  lifetime_earning: string;
  current_balance: string;
  tsc_token_balance: string;
  joined_at: string;
  last_active: string;
}

export function useUser() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchUser = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const res = await axios.get("/api/users", { withCredentials: true });

      if (res.data?.user) {
        setUser(res.data.user);
      } else {
        setUser(null);
      }
    } catch (err: any) {
      setError(err.response?.data?.error || "Failed to fetch user");
      setUser(null);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  return {
    user,
    loading,
    error,
    refetch: fetchUser,
  };
}
