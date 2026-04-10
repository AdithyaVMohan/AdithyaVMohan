import jwt from "jsonwebtoken"

export async function POST(req: Request) {
  const { email, password } = await req.json()

  if (email === "admin@test.com" && password === "123456") {
    const token = jwt.sign(
      { email },
      "secretkey",
      { expiresIn: "1h" }
    )

    return Response.json({ token })
  }

  return Response.json(
    { message: "Invalid credentials" },
    { status: 401 }
  )
}