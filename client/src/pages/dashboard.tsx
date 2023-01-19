import { type NextPage } from "next";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

import Navbar from "../components/UI/Navbar";
import AccessDenied from "../components/access-denied";
import Layout from "../components/Layout";

export default function Dashboard() {
  const { data: session } = useSession();

  // If no session exists, display access denied message
  if (!session) {
    return (
      <Layout>
        <AccessDenied />
      </Layout>
    );
  }
  // If session exists, display content
  return (
    <Layout>
      <h1>Dashboard</h1>
      <p></p>
    </Layout>
  );
}
