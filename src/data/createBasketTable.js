import pool from "../config/db.js";

const createBasketTable = async () => {
  const query = `
    CREATE TABLE IF NOT EXISTS products (
      id SERIAL PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      price  NUMERIC(10,2)   NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;

  const client = await pool.connect();

  try {
    await client.query(query);
  } catch (error) {
    console.error("Error creating product table:", error);
    throw error;
  } finally {
    client.release();
  }
};

export default createBasketTable;
