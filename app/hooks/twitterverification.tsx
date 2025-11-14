"use client";

import axios from "axios";
import { useState, useEffect, useCallback } from "react";
import { useAccount, useConnect, useDisconnect, useSignMessage } from "wagmi";

export function useVerification() {
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();
  const { address, isConnected } = useAccount();
  const { signMessageAsync } = useSignMessage();

  const [message] = useState("Hello from X2EARN");
  const [nonce, setNonce] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showPopup, setShowPopup] = useState(false);
  const [walletSigned, setWalletSigned] = useState(false);
  const [signature, setSignature] = useState<string | null>(null);
  const [verifying, setVerifying] = useState(false);
  const [verified, setVerified] = useState<boolean | null>(null);

  // 🔌 Connect wallet
  const connectWallet = useCallback(async () => {
    try {
      setError(null);
      connect({ connector: connectors[0] });
    } catch (err) {
      console.error("Wallet connection failed:", err);
      setError("Failed to connect wallet");
    }
  }, [connect, connectors]);



  // ✍️ Sign message & verify with backend (runs once on connect)
  useEffect(() => {
    if (!isConnected || !address || !message || walletSigned) return;

    const signAndVerify = async () => {
      try {
        setError(null);
        // Step 1: Sign message
        const sig = await signMessageAsync({ message });
        setSignature(sig);

        // Step 2: Verify with backend
        const res = await axios.post("/api/wallet", {
          message,
          signature: sig,
          address,
        });

        if (res.data?.verified && !res.data.alreadyUser) {
          setWalletSigned(true);
        } else {
          throw new Error(res.data?.error || "Wallet verification failed");
        }
      } catch (err: any) {
        console.error("Error during signing/verification:", err);
        setError(err.message || "Signing or backend verification failed");
      }
    };

    signAndVerify();
  }, [isConnected, address, message, walletSigned, signMessageAsync]);



  // 🪙 Fetch nonce after wallet is verified
  useEffect(() => {
    if (!address || !walletSigned) return;

    const fetchNonce = async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await axios.post("/api/nonce", { wallet_address: address });
        const data = res.data;

        if (res.status === 200 && data?.nonce) {
          setNonce(data.nonce);
          setShowPopup(true);
        } else {
          throw new Error(data?.error || "Failed to get nonce");
        }
      } catch (err: any) {
        console.error("Nonce fetch error:", err);
        setError(err.message || "Network error while fetching nonce");
      } finally {
        setLoading(false);
      }
    };

    fetchNonce();
  }, [walletSigned, address]);

  
  
  // 🧩 Verify Tweet
  const verifyTweet = useCallback(
    async (tweetUrl: string) => {
      if (!address || !tweetUrl) {
        setError("Missing wallet or tweet link");
        return;
      }

      try {
        setVerifying(true);
        setError(null);
        setVerified(null);

        const res = await axios.post("/api/users", {
          wallet: address,
          tweetUrl,
        });

        if (res.data?.verified) {
          setVerified(true);
          setShowPopup(false);
        } else {
          throw new Error(res.data?.error || "Tweet verification failed");
        }
      } catch (err: any) {
        console.error("Error verifying tweet:", err);
        setError(err.message || "Network error while verifying tweet");
        setVerified(false);
      } finally {
        setVerifying(false);
      }
    },
    [address]
  );


  return {
    connectWallet,
    disconnect,
    address,
    isConnected,
    message,
    nonce,
    showPopup,
    setShowPopup,
    verifyTweet,
    verifying,
    verified,
    loading,
    error,
    walletSigned,
    signature,
  };
}
