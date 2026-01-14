// // src/contexts/AuthContext.js
// import React, { createContext, useState } from 'react';
// import { ROLES } from '../constants/role';

// export const AuthContext = createContext();

// export const AuthProvider = ({ children })=> {
//     const [role, setRole] = useState(ROLES.GUEST); // Default role

//     return (
//         <AuthContext.Provider value={{ role, setRole }}>
//             {children}
//         </AuthContext.Provider>
//     );
// };