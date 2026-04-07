import React, { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const OAuthCallback: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { syncOAuth } = useAuth();

  useEffect(() => {
    const loginStatus = searchParams.get("login");
    const tokenFromUrl = searchParams.get("token"); 
    if (loginStatus === "success" && tokenFromUrl) {
      localStorage.setItem("token", tokenFromUrl);
      alert('token: ' + tokenFromUrl);
      syncOAuth(undefined, {
        onSuccess: () => navigate("/user"),
        onError: () => {
          localStorage.removeItem("token");
          navigate("/login?error=sync_failed");
        }
      });
    } else if (loginStatus === "error") {
      navigate("/login?error=oauth_failed");
    }
  }, [searchParams, navigate, syncOAuth]);

  return (
    <div className="flex items-center justify-center h-screen">
      <p>Finalizing your login...</p>
    </div>
  );
};


export default OAuthCallback;
