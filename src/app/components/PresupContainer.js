"use client";
import { useAuth } from "../helpers";
import SessionError from "./SessionError";

export default function PresupContainer( children ) {
  const showInfo = useAuth();

  return <>{showInfo ? 
  <>
    { children } 
  </> : 
  <>
    <SessionError text={'Algo salio mal.'}/>
  </>}</>;
}
