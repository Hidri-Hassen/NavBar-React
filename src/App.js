import React from 'react';
import logo from "./Photo/logo-default-group-en.svg"
import Navmenu from "./components/navBar/navmenu.js"

const label = [
  {title:"About us",link:"#" , id:"about"},
{title:"Career",link:"#"},
{title:"Departments",drop:[{drop:"Marketing & PR",link:"#"},{drop:"Customer Success & Sales",link:"#"},{drop:"IT, Product, Design & UX",link:"#"},{drop:"Finance & Administration",link:"#"},{drop:"HR & more",link:"#"}]},
]

function App () {
return (
<div className="header">
<div className="logo">

<a href="/">
    <img id="logo" src={logo} alt="Logo-DocPlanner-group"/>
</a>

</div>
<Navmenu menu={label}/>
 </div>
);
}
export default App;
