import { Outlet } from "react-router-dom";

function HomeLayout() {
  return (
    <div>
      <section className="align-element pt-20 pb-6 ">
        <Outlet />
      </section>
    </div>
  );
}

export default HomeLayout;
