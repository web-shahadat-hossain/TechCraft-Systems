import Link from "next/link";

const Nav = () => {
  return (
    <>
      <header className="header">
        <div
          className="container d_flex"
          style={{ height: "100%", alignItems: " center" }}
        >
          <ul className="link f_flex capitalize">
            <li>
              <Link href="/">home</Link>
            </li>
            <li>
              <Link href="/">CPU / Processor </Link>
            </li>

            <li>
              <Link href="/">Motherboard</Link>
            </li>
            <li>
              <Link href="/">RAM</Link>
            </li>
            <li>
              <Link href="/">Power Supply Unit</Link>
            </li>
            <li>
              <Link href="/">Storage Device</Link>
            </li>
            <li>
              <Link href="/">Monitor</Link>
            </li>
            <li>
              <Link href="/">Others</Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Nav;
