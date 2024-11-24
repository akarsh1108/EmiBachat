// "use client";
// import { useState } from "react";

// import { Button } from "@/components/ui/button";

// export default function RegisterForm() {
//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     password: "",
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     // Call the API
//     const response = await fetch("/api/register", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(formData),
//     });
//     if (response.ok) {
//       console.log("Registration successful");
//     } else {
//       console.error("Registration failed");
//     }
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="bg-white p-6 rounded-lg shadow-md w-full max-w-md"
//     >
//       <h1 className="text-2xl font-bold text-center mb-4">Register</h1>
//       <InputField
//         label="Username"
//         id="username"
//         type="text"
//         name="username"
//         value={formData.username}
//         onChange={handleInputChange}
//       />
//       <InputField
//         label="Email"
//         id="email"
//         type="email"
//         name="email"
//         value={formData.email}
//         onChange={handleInputChange}
//       />
//       <InputField
//         label="Password"
//         id="password"
//         type="password"
//         name="password"
//         value={formData.password}
//         onChange={handleInputChange}
//       />
//       <Button text="Register" type="submit" />
//     </form>
//   );
// }
