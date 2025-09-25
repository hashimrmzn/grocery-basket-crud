import pool from "../config/db.js";

export const getProductByIdService = async (id) => {
  const client = await pool.connect();
  try {
    const result = await client.query("SELECT * FROM products WHERE id = $1", [
      id,
    ]);

    console.log(result);
    if (result.rowCount === 1) {
      return result.rows[0];
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error fetching product:", error);
    throw error;
  } finally {
    client.release();
  }
};

export const getAllProductsService = async () => {
  const client = await pool.connect();
  try {
    const result = await client.query("SELECT * FROM products");
    return result.rows;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  } finally {
    client.release();
  }
};

export const createProductService = async (productData) => {
  const client = await pool.connect();
  try {
    const { name, price } = productData;

    const result = await client.query(
      "INSERT INTO products (name, price) VALUES ($1, $2) RETURNING *",
      [name, price]
    );
    return result.rows[0];
  } catch (error) {
    console.error("Error creating product:", error);
    throw error;
  } finally {
    client.release();
  }
};

export const updateProductService = async (id, productData) => {
  const client = await pool.connect();
  try {
    const { name, price } = productData;

    const result = await client.query(
      "UPDATE products SET name = $1, price = $2 WHERE id = $3 RETURNING *",
      [name, price, id]
    );

    return result.rows[0]; 
  } catch (error) {
    console.error("Error updating product:", error);
    throw error;
  } finally {
    client.release();
  }
};

export const deleteProductByIdService = async (id) => {
  const client = await pool.connect();
  try {
    const result = await client.query(
      "DELETE FROM products WHERE id = $1 RETURNING *",
      [id]
    );

    return result.rows[0];
  } catch (error) {
    console.error("Error deleting product:", error);
    throw error;
  } finally {
    client.release();
  }
};
