import { useSelector } from "react-redux";
import CartImage from "../../cart.png";
import "./Header.css";

const Header = () => {
    const {cartList} = useSelector(state=>state.cart)
    const totalCount = 
    // cartList.reduce((accumulator, { count }) => accumulator + count, 0);
    cartList.length


  return (
    <>
      <header>
        <div className="container">
          <h1>Logo</h1>
          <div className="">
            <img src={CartImage} />
            <span className="cartCounter">{totalCount}</span>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
