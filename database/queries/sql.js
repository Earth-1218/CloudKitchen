const itemImagePath = 'public/upload/images/';
const sql_queries = {
  //Packages list
  'list_packages_with_items': `
      SELECT 
        DISTINCT packages.id,
        packages.name,
        packages.price,
        JSON_ARRAYAGG(
          JSON_OBJECT(
            'id', items.id,
            'name', items.name,
            'price', items.price,
            'image', items.image
          )
        ) AS items
      FROM 
        packages
      INNER JOIN 
        package_items ON package_items.package_id = packages.id
      INNER JOIN 
        items ON package_items.item_id = items.id
      GROUP BY 
        packages.id, packages.name, packages.price`,

  //Items list        
  // http://localhost:3000/public/upload/images/
  'list_items_with_category': `
      SELECT 
        DISTINCT items.id,
          items.name,
          items.price,
          CONCAT('${process.env.BASE_URL}${itemImagePath}', items.image) AS image,
          categories.name AS category_name
        FROM 
          items
        INNER JOIN 
          categories ON items.category_id = categories.id
        GROUP BY 
          items.id, items.name, items.price`
}

module.exports = {
  sql_queries
};

