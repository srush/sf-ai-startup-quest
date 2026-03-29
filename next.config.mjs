function normalizeAllowedOrigin(input) {
  const value = input.trim().toLowerCase()
  if (!value) {
    return null
  }

  try {
    if (value.includes("://")) {
      return new URL(value).hostname
    }
  } catch {
    return null
  }

  return value.replace(/^https?:\/\//, "").replace(/\/.*$/, "")
}

const envAllowedDevOrigins =
  process.env.NEXT_ALLOWED_DEV_ORIGINS?.split(",")
    .map(normalizeAllowedOrigin)
    .filter(Boolean) ?? []

const defaultAllowedDevOrigins = [
  "localhost",
  "127.0.0.1",
  "::1",
  "*.localhost",
  "**.ts.net",
]

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  allowedDevOrigins: [
    ...new Set([...defaultAllowedDevOrigins, ...envAllowedDevOrigins]),
  ],
}

export default nextConfig
