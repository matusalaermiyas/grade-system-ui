import logo from "../logo.png";

function SidebarLogo() {
  return (
    <div className="col s3 hide-on-med-and-down">
      <img src={logo} alt="Unity University" className="responsive-img" />
    </div>
  );
}

export default SidebarLogo;
