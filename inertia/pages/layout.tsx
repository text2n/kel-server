import { Link } from '@inertiajs/react'

export default function Layout({ children }: any) {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link href="/" className='nav-link active' aria-current="page">Home</Link>
              </li>
              <li className="nav-item">
              <Link href="/" className='nav-link'>Link</Link>
              </li>
            </ul>
            <div className="d-lg-flex col-lg-3 justify-content-lg-end">
            <button className="btn btn-outline-primary"><Link href="/logout" className='nav-link'>Logout</Link></button>
            
          </div>
          </div>
        </div>
      </nav>
      <div className="container my-5">{children}</div>
    </>
  )
}
