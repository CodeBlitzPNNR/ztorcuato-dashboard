import { redirect, useRouter } from 'next/navigation'
import Swal from 'sweetalert2'

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


/* TURBIEDAD PARA QUE FUNCIONE EL LOGIN */
export const tokenValidation = ( session ) => {  

  if (session) {
    return true
  } else {          
    return false
  }  
}
