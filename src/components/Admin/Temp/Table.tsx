// import React, { useEffect, useState } from 'react'

// interface FieldLength {
//   firstname: number;
//   lastname: number;
//   email: number;
//   phoneNumber: number;
//   district: number;
// }

// const Table: React.FC = () => {


//     const heading = ['#','Firstname','Lastname','Email','Phn.No','district','Block','createdAt','Action']
    
//     const users = [
//       {
//         _id: "662544fd203d01524aba2213",
//         firstname: "swathin",
//         lastname: "K T K",
//         email: "swathinktk10@gmail.com",
//         phoneNumber: "7994546435",
//         district: "kannur",
//         password:
//           "$2a$10$yhPahfvqMios3khPHXYT7.annC2phTiWKnsNYinvLGfPA1mueDo3W",
//         _isBlocked: false,
//         createdAt: "2024-04-21T16:55:25.953Z",
//         updatedAt: "2024-04-21T16:55:25.953Z",
//         __v: 0,
//       },
//       {
//         _id: "662544fd203d01524aba2218",
//         firstname: "Sarang",
//         lastname: "K T K",
//         email: "sarang@gmail.com",
//         phoneNumber: "9294546435",
//         district: "kannur",
//         password:
//           "$2a$10$yhPahfvqMios3khPHXYT7.annC2phTiWKnsNYinvLGfPA1mueDo3W",
//         _isBlocked: false,
//         createdAt: "2024-04-21T16:55:25.953Z",
//         updatedAt: "2024-04-21T16:55:25.953Z",
//         __v: 0,
//       },
//       {
//         _id: "662544fd203d01524aba2217",
//         firstname: "Sayand",
//         lastname: "A K",
//         email: "sayand@gmail.com",
//         phoneNumber: "8594546435",
//         district: "kannur",
//         password:
//           "$2a$10$yhPahfvqMios3khPHXYT7.annC2phTiWKnsNYinvLGfPA1mueDo3W",
//         _isBlocked: false,
//         createdAt: "2024-04-21T16:55:25.953Z",
//         updatedAt: "2024-04-21T16:55:25.953Z",
//         __v: 0,
//       },
//     ];

//     const [inputWidths, setInputWidths] = useState<FieldLength[]>([]);
//     const [editUser, setEditUser] = useState('');

//     useEffect(() => {
//       // Calculate maximum length for each column
//       const maxLengths: FieldLength = users.reduce(
//         (acc, user) => {
//           return {
//             firstname: Math.max(acc.firstname, user.firstname.length),
//             lastname: Math.max(acc.lastname, user.lastname.length),
//             email: Math.max(acc.email, user.email.length),
//             phoneNumber: Math.max(acc.phoneNumber, user.phoneNumber.length),
//             district: Math.max(acc.district, user.district.length),
//           };
//         },
//         { firstname: 0, lastname: 0, email: 0, phoneNumber: 0, district: 0 }
//       );

//       // Set input field widths based on maximum lengths
//       setInputWidths(maxLengths);
//     },[]); 

//     const handleClick = (userId: string) => {
//         alert(userId)
//             setEditUser(userId)
//     }
//     return (
      
//     <table className="w-full  text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
//       <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
//         <tr>
//           {heading.map((title) => (
//             <th scope="col" className="px-3 py-3">
//               {title}
//             </th>
//           ))}
//         </tr>
//       </thead>
//       <tbody>
//               {users.map((user, index) => {
                 
//                   return (
//                     <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
//                       <td className="px-3 py-2">{index + 1}</td>
//                       <td className="px-3 py-2">
//                         <input
//                           className="w-auto"
//                           type="text"
//                           value={user.firstname}
//                           disabled={editUser != user._id}
//                           style={{ width: `${inputWidths.firstname * 8}px` }}
//                         />
//                       </td>
//                       <td className="px-3 py-2">
//                         <input
//                           type="text"
//                           value={user.lastname}
//                           disabled={editUser != user._id}
//                           style={{ width: `${inputWidths.lastname * 8}px` }}
//                         />
//                       </td>
//                       <td className="px-3 py-2">
//                         <input
//                           type="text"
//                           value={user.email}
//                           disabled={editUser != user._id}
//                           style={{ width: `${inputWidths.email * 8}px` }}
//                         />
//                       </td>
//                       <td className="px-3 py-2">
//                         <input
//                           type="text"
//                           value={user.phoneNumber}
//                           disabled={editUser != user._id}
//                           style={{ width: `${inputWidths.phoneNumber * 8}px` }}
//                         />
//                       </td>
//                       <td className="px-3 py-2">
//                         <input
//                           type="text"
//                           value={user.district}
//                           style={{ width: `${inputWidths.district * 8}px` }}
//                           disabled={editUser != user._id}
//                         />
//                       </td>
//                       <td className="px-3 py-2">
//                         {user._isBlocked ? "Blocked" : "Unblocked"}
//                       </td>
//                       <td className="px-3 py-2">{user.createdAt}</td>
//                       <td className="px-3 py-2">
//                         <button
//                           className="text-blue-600 font-semibold"
//                           onClick={() => handleClick(user._id)}
//                         >
//                           Edit
//                         </button>
//                       </td>
//                     </tr>
//                   );
//               })}
//         {/* <td className="px-6 py-4">Silver</td>
//           <td className="px-6 py-4">Laptop</td>
//           <td className="px-6 py-4">$2999</td>
//           <td className="px-6 py-4">
//             <a
//               href="#"
//               className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
//             >
//               Edit
//             </a>
//           </td> */}
//       </tbody>
//     </table>
//   );
// }

// export default Table
