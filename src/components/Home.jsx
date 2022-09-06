import MainTitle from "../common/MainTitle";
import SidebarLinks from "../common/SidebarLinks";
import SidebarLogo from "../common/SidebarLogo";

function Home() {
  return (
    <>
      <div className="row">
        <SidebarLogo />
        <MainTitle title="Unity University" />
      </div>

      <div className="row">
        <SidebarLinks />
        <div className="col s8 push-s1">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente
            unde nisi similique consequatur praesentium. Repellendus, sequi
            autem facilis soluta totam nulla laborum sapiente quas dolorem
            mollitia, voluptates quis doloribus corrupti.
          </p>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit
            fugiat dolor repellendus hic rerum quidem quas consequuntur nesciunt
            quibusdam similique, excepturi sit deleniti vel! Molestiae ea
            voluptatem quasi eligendi harum?
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;
