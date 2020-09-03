import React from 'react'

function Actions() {
  return (
    <div className="actions">
      <input className="path" />
      <button><i className="far fa-folder-open"></i></button>
    </div>
  )
}



// function Actions() {
//   return (
//     <div className="actions">
//       <form class="form-container">
//       <h1>Login</h1>
//         <label for="email"><b>Email</b></label>
//         <input type="text" placeholder="Enter Email" name="email" required/>
//           <label for="psw"><b>Password</b></label>
//           <input type="password" placeholder="Enter Password" name="psw" required/>
//             <button type="submit" class="btn">Login</button>
//             <button type="submit" class="btn cancel" onclick="closeForm()">Close</button>
//       </form>
//     </div>
//   )
// }

export default Actions