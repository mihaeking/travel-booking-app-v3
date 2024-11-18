import pool from "../../lib/db";
import { NextResponse } from "next/server";
export async function GET() {
  try {
    const connection = await pool.getConnection();
    await connection.beginTransaction();

    const seedTrains = `
      INSERT INTO train (id,name, origin, destination, departure_time, duration, fare)
      VALUES
      (10, 'Express  101', 'City A', 'City B', '09:00:00', '02:00:00', 50.00),
      (20, 'Fast 202', 'City A', 'City B', '11:00:00', '02:30:00', 55.00);
    `;
    await connection.query(seedTrains);

    await connection.commit();
    console.log("Database connection successful");
    connection.release();
    return NextResponse.json({ message: "Database connection successful" });
  } catch (error) {
    console.error("Database connection error:", error);
    return NextResponse.json({ error: error.message });
  }
}
