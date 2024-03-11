"use client";
import { useAuth } from "../helpers";
import SessionError from "./SessionError";

export default function presupuestoContainer( children ) {
  const showInfo = useAuth();

  return <>{showInfo ? 
  <>
    { children } 
  </> : 
  <>
    <SessionError text={'Salio todo como el orto.'}/>
  </>}</>;
}
