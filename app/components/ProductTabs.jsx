// app/components/ProductTabs.js

"use client"; // Указываем, что это клиентский компонент

import React, { useState } from "react";
import { Box, Typography, Tab, Tabs } from "@mui/material";

const ProductTabs = ({
  description,
  longDescription,
  deliveryInfo,
  reviews,
}) => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  return (
    <Box mt={6}>
      {/* Вкладки */}
      <Tabs
        value={tabIndex}
        onChange={handleTabChange}
        aria-label="product details tabs"
      >
        <Tab label="Описание" />
        <Tab label="Доставка" />
        <Tab label="Отзывы" />
      </Tabs>

      {/* Содержимое вкладок */}
      <Box mt={3}>
        {tabIndex === 0 && (
          <Typography variant="body2" color="textSecondary">
            {longDescription || description || "Полное описание товара."}
          </Typography>
        )}
        {tabIndex === 1 && (
          <Typography variant="body2" color="textSecondary">
            {deliveryInfo || "Условия и сроки доставки вашего товара."}
          </Typography>
        )}
        {tabIndex === 2 && (
          <Typography variant="body2" color="textSecondary">
            {reviews || "Отзывы пользователей о данном товаре."}
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default ProductTabs;
