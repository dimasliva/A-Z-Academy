import { Link, Outlet } from "react-router-dom"

export default function Layout() {
  return (
  <>
    <div className="navbar px-5 py-4 bg-dark text-light">
      <Link className="fw-bold text-decoration-none text-light" to="/">А-Я Академия</Link>
      <Link className="text-decoration-none text-light" to="/">Главная</Link>
    </div>
    <Outlet/>
  </>
  )
}