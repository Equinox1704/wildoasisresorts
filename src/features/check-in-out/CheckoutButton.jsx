import Button from "../../ui/Button";
import {useCheckout} from './useCheckout';

function CheckoutButton({ bookingId }) {
  const {checkout, isCheckingOut} = useCheckout();
  return (
    <Button 
      $size="small" 
      $variation="primary" 
      onClick={()=>checkout(bookingId)} 
      disabled={isCheckingOut}
    >
      Check out
    </Button>
  );
}

export default CheckoutButton;
