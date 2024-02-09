/* FORMATEADOR DE DIVISAS */
export const formatCurrency = (value) => {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS' }).format(value)
  }

/* FORMATEADOR DE FECHAS */
export const formatDate = (date) => {
    return 
  }

  