const saveUserDataToJson = (userData) => {
    const jsonString = JSON.stringify(userData, null, 2);
  
    // Para un entorno como React (usando localStorage)
    localStorage.setItem('userData', jsonString);
  };
  
  export default saveUserDataToJson;