import React, { useState } from "react";
import { FilterAltOffOutlined, FilterAltOutlined } from "@mui/icons-material";
import {
  Box,
  Typography,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Button,
  ButtonGroup,
  OutlinedInput,
  InputAdornment,
} from "@mui/material";
import PropType from "prop-types";

const AsideFilters = ({ productsData, isLoading }) => {
  const [field, setFilter] = useState({
    brand: '',
    sortOrder: '',
    minPrice: 0,
    maxPrice: 0,
  });

  const onBrandFilterChange = (e) => {};

  const onSortFilterChange = (e) => {};

  const onPriceChange = (e) => {};

  const onApplyFilters = () => {};

  const onResetFilters = () => {};

  return (
    <Box sx={{ width: { md: "25vw" } }}>
      <Typography variant="h3">Filters </Typography>
      <Box height="25rem" mb={{ xs: 2, md: 0 }}>
        <FormControl fullWidth sx={{ my: 2 }}>
          <InputLabel id="brand-label">Brand</InputLabel>
          <Select
            labelId="brand-label"
            id="brands-select"
            value={field.brand}
            label="brand"
            onChange={onBrandFilterChange}
          >
            <MenuItem value="">None</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth sx={{ my: 2 }}>
          <InputLabel id="sort-label">Sort By</InputLabel>
          <Select
            labelId="sort-label"
            id="sort-select"
            value={field.sortOrder}
            label="Sort By"
            onChange={onSortFilterChange}
          >
            <MenuItem value="">None</MenuItem>
            <MenuItem value="name-asc">Name Ascending A - Z</MenuItem>
            <MenuItem value="name-desc">Name Descending Z - A</MenuItem>
            <MenuItem value="price-asc">Price Low - High</MenuItem>
            <MenuItem value="price-desc">Price High - Low</MenuItem>
          </Select>
        </FormControl>
        <Box my={2} component="form">
          <FormControl fullWidth sx={{ my: 2 }}>
            <InputLabel htmlFor="minPrice-input">Minimum Price</InputLabel>
            <OutlinedInput
              id="minPrice-input"
              startAdornment={
                <InputAdornment position="start">USD</InputAdornment>
              }
              endAdornment={
                <InputAdornment position="end">Min in USD</InputAdornment>
              }
              label="Minimum Amount"
              type="text"
              name="minPrice"
              value={field.minPrice}
              onChange={onPriceChange}
            />
          </FormControl>
          <FormControl fullWidth sx={{ my: 2 }}>
            <InputLabel htmlFor="maxPrice-input">Maximum Price</InputLabel>
            <OutlinedInput
              id="maxPrice-input"
              startAdornment={
                <InputAdornment position="start">USD</InputAdornment>
              }
              endAdornment={
                <InputAdornment position="end">Max in USD</InputAdornment>
              }
              label="Maximum Amount"
              type="text"
              name="maxPrice"
              value={field.maxPrice}
              onChange={onPriceChange}
            />
          </FormControl>
        </Box>
        <ButtonGroup variant="text">
          <Button endIcon={<FilterAltOutlined />} onClick={onApplyFilters}>
            Apply Filters
          </Button>
          <Button
            sx={{ color: "secondary.dark" }}
            endIcon={<FilterAltOffOutlined />}
            onClick={onResetFilters}
          >
            Reset Filters
          </Button>
        </ButtonGroup>
      </Box>
    </Box>
  );
};

export default AsideFilters;
AsideFilters.propTypes = {
  productsData: PropType.array,
  isLoading: PropType.bool,
};
