wc.wcBlocksRegistry.__experimentalRegisterProductCollection({
  name: "blocks/product-collection/custom-collection",
  title: "My Custom Collection",
  description: "This is a custom collection.",
  icon: "games",
  keywords: ["custom collection", "product collection"],
  innerBlocks: [
    [
      "woocommerce/product-template",
      {},
      [
        ["woocommerce/product-description"],
        ["woocommerce/product-title"],
      ]
    ]
  ]
});
