'use client';

import Swal from 'sweetalert2'
import { jwtDecode } from "jwt-decode";

/* FORMATEADOR DE DIVISAS */
export const formatCurrency = (value) => {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS' }).format(value)
  }

  /* FORMATEADOR DE FECHAS */
export const dateFormat = date => {
  const newDate = new Date(date)
  const options = {
    year: 'numeric',
    month: 'long',
    day: '2-digit'
  }
  return newDate.toLocaleDateString('es-AR', options)  
}

/* TOASTS */
const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  }
});

export const toastTrigger = (state, msg) => {
  state === 'error'
  ?
  Toast.fire({
    icon: state,
    title: msg
  })
  :
  Toast.fire({
    icon: state,
    title: msg
  })
}

/* SUMA DE ARRAYS PARA TOTALES */
export const sumaTotal = (arr) => {
  let suma = 0;
  for (let i = 0; i < arr.length; i++) {
    suma = suma + arr[i].cantidad * arr[i].precio;
  }
  return suma;
};


/* HOOK TURBIO PARA QUE FUNCIONE EL LOGIN */
export const useAuth = () => {  
    const token = localStorage.getItem("sessionID");        
    const decodedToken = jwtDecode(token);    
    let currentDate = new Date();
    // JWT exp is in seconds
    if (decodedToken.exp * 10000 < currentDate.getTime()) {
        return false
    } else {        
        return true
    }    
};
