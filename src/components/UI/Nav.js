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
              <Link href="/feature-products">CPU / Processor </Link>
            </li>

            <li>
              <Link href="/contact">Motherboard</Link>
            </li>
            <li>
              <Link href="/contact">RAM</Link>
            </li>
            <li>
              <Link href="/contact">Power Supply Unit</Link>
            </li>
            <li>
              <Link href="/contact">Storage Device</Link>
            </li>
            <li>
              <Link href="/contact">Monitor</Link>
            </li>
            <li>
              <Link href="/contact">Others</Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Nav;
