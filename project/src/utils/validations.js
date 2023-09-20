// Formato del celular
export const formatPhone = (input) => {
  const cleaned = ("" + input).replace(/\D/g, "");
  const match = cleaned.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/);
  if (!match) return "";
  return (
    match[1] +
    (match[2] ? "-" : "") +
    match[2] +
    (match[3] ? "-" : "") +
    match[3]
  );
};

// Formato del numero
export const formatNumber = (input) => {
  const cleaned = ("" + input).replace(/[^0-9]/g, "");
  return cleaned;
};

// Formato de letras con acentos
export const formatLetters = (input) => {
  const cleaned = ("" + input).replace(/[^A-Za-zÁÉÍÓÚáéíóúÜüÑñ]/g, "");
  return cleaned;
};

// Formato de letras con acentos y espacios
export const formatLettersWithSpaces = (input) => {
  const cleaned = ("" + input).replace(/[^A-Za-zÁÉÍÓÚáéíóúÜüÑñ ]/g, "");
  return cleaned;
};

// Formato de alfanumérico con acentos
export const formatAlphanumeric = (input) => {
  const cleaned = ("" + input).replace(/[^A-Za-zÁÉÍÓÚáéíóúÜüÑñ0-9]/g, "");
  return cleaned;
};

// Formato de fecha de aaaa-mm-dd a dd/mm/aaaa
export const formatDateDMA = (dateString) => {
  const dateParts = dateString.split("-");
  if (dateParts.length !== 3) {
    return dateString; // No es un formato de fecha válido, devolver tal cual
  }
  const day = dateParts[2];
  const month = dateParts[1];
  const year = dateParts[0];
  return `${day}/${month}/${year}`;
};

// Formato de fecha de dd/mm/aaaa a aaaa-mm-dd
export const formatDateAMD = (dateString) => {
  const dateParts = dateString.split("/");
  if (dateParts.length !== 3) {
    return dateString; // No es un formato de fecha válido, devolver tal cual
  }
  const day = dateParts[0];
  const month = dateParts[1];
  const year = dateParts[2];
  return `${year}-${month}-${day}`;
};

// Formato de fecha de dd/mm/aaaa a mm/dd/aaaa
export const formatDateMDA = (dateString) => {
  const dateParts = dateString.split("/");
  if (dateParts.length !== 3) {
    return dateString; // No es un formato de fecha válido, devolver tal cual
  }
  const day = dateParts[0];
  const month = dateParts[1];
  const year = dateParts[2];
  return `${month}/${day}/${year}`;
};

// Validar formato del celular
export const validatePhone = (input) => {
  const pattern = /^\d{3}-\d{3}-\d{4}$/;
  return pattern.test(input);
};

// Validar formato del numero
export const validateNumber = (input) => {
  const pattern = /^\d+$/;
  return pattern.test(input);
};

// Validar formato letras con acentos
export const validateLetters = (input) => {
  const pattern = /^[A-Za-zÁÉÍÓÚáéíóúÜüÑñ]+$/;
  return pattern.test(input);
};

// Validar formato letras con acentos y espacios
export const validateLettersWithSpaces = (input) => {
  const pattern = /^[A-Za-zÁÉÍÓÚáéíóúÜüÑñ ]+$/;
  return pattern.test(input);
};

// Validar formato alfanumérico sin acentos
export const validateAlphanumeric = (input) => {
  const pattern = /^[A-Za-z0-9]+$/;
  return pattern.test(input);
};

// Validar formato alfanumérico con acentos
export const validateAlphanumericExtra = (input) => {
  const pattern = /^[A-Za-zÁÉÍÓÚáéíóúÜüÑñ0-9]+$/;
  return pattern.test(input);
};

// Validar formato de fecha dd/mm/aaaa
export const validateDateFormat = (dateString) => {
  const pattern = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
  return pattern.test(dateString);
};

// Validar formato de CURP
export const validateCURP = (input) => {
  const pattern = /^[A-Z]{4}[0-9]{6}[A-Z]{7}[0-9]{1}$/;
  return pattern.test(input);
};

// Validar formato de RFC
export const validateRFC = (input) => {
  const pattern = /^[A-Z]{4}[0-9]{6}[A-Z0-9]{3}$/;
  return pattern.test(input);
};

export const sortOptionsAlphabetically = (options) => {
  return options.slice().sort((a, b) => {
    // Compara las cadenas sin importar mayúsculas o minúsculas
    const normalizedA = a.toLowerCase();
    const normalizedB = b.toLowerCase();

    if (normalizedA < normalizedB) {
      return -1;
    }
    if (normalizedA > normalizedB) {
      return 1;
    }
    return 0;
  });
};

export const sortOptionsReverseAlphabetically = (options) => {
  return options.slice().sort((a, b) => {
    // Compara las cadenas sin importar mayúsculas o minúsculas
    const normalizedA = a.toLowerCase();
    const normalizedB = b.toLowerCase();

    if (normalizedA < normalizedB) {
      return 1; // Cambiado de -1 a 1 para ordenar de la Z a la A
    }
    if (normalizedA > normalizedB) {
      return -1; // Cambiado de 1 a -1 para ordenar de la Z a la A
    }
    return 0;
  });
};

export const addBlankItem = (options) => {
  options.unshift("");
  return options;
};
