import { Outlet } from "react-router-dom";

export default function CareerLayout() {
  return (
    <div className="careerLayout">
        <h1>Welcome to careers!</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, vitae.</p>

        <Outlet />
    </div>
  )
}
