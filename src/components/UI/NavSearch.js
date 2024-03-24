import Link from "next/link";
import Image from "next/image";
const Search = () => {
  return (
    <>
      <section className="search">
        <div className="container c_flex">
          <h3 style={{ width: "17%" }}> TechCraft Systems</h3>

          <div className="search-box f_flex">
            {/* <i className="fa fa-search"></i> */}
            <input type="text" placeholder="Search for products..." />
            <span>
              <i className="fa fa-search"></i>
            </span>
          </div>

          <div className="icon f_flex width">
            <div>
              <Link href="/login">
                <i
                  className="fa fa-user icon-circle"
                  style={{ marginRight: "10px" }}
                ></i>
              </Link>
            </div>
            <div className="cart">
              <button className="btn-primary">PC Builder</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Search;
