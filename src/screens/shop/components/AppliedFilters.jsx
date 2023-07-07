import React, { useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import PropType from "prop-types";
import { formatPrice } from "../../../helpers/utils";
import FilterChip from "./FilterChip";

const AppliedFilters = ({ filteredProductsCount }) => {
  const [filter, setFilter] = useState({
    brand: "",
    sortOrder: "",
    minPrice: 0,
    maxPrice: 0,
  });

  const onRemoveBrandFilter = () => {};

  const onRemovePriceRangeFilter = () => {};

  const onRemoveSortFilter = () => {};

  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      spacing={3}
      height="3rem"
      px={3}
      py={{ xs: 3, md: 0 }}
      alignItems="center"
      mb={{ xs: 10, md: 3 }}
    >
      <Box>
        {/* <Typography>
          Found {filteredProductsCount} product
          {filteredProductsCount > 1 && "s"}
        </Typography> */}
      </Box>
      <Stack direction={{ xs: "column", sm: "row" }} spacing={1}>
        {filter.brand && (
          <FilterChip label={filter.brand} handleDelete={onRemoveBrandFilter} />
        )}

        {(!!filter.minPrice || !!filter.maxPrice) && (
          <FilterChip
            label={`${formatPrice(filter.minPrice)}  - ${formatPrice(
              filter.maxPrice
            )}`}
            handleDelete={onRemovePriceRangeFilter}
          />
        )}

        {filter.sortOrder && (
          <FilterChip
            label={
              filter.sortOrder === "price-desc"
                ? "Price High - Low"
                : filter.sortOrder === "price-asc"
                ? "Price Low - High"
                : filter.sortOrder === "name-desc"
                ? "Name Z - A"
                : "Name A - Z"
            }
            handleDelete={onRemoveSortFilter}
          />
        )}
      </Stack>
    </Stack>
  );
};

export default AppliedFilters;

AppliedFilters.propTypes = {
  filteredProductsCount: PropType.number.isRequired,
};
