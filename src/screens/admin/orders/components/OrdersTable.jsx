import PropType from "prop-types";

const OrdersTable = ({ isLoading, data }) => {
  return <h1>Orders Table goes here</h1>;
};

export default OrdersTable;

OrdersTable.propTypes = {
  isLoading: PropType.bool.isRequired,
  data: PropType.array,
};
