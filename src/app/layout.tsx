import "./globals.css";
import type { Metadata } from "next";
import { ClientBody } from "./ClientBody";

export const metadata: Metadata = {
  title: "Royal Robotics | Team 9562",
  description:
    "Bishop Reding Catholic Secondary School's FIRST Robotics Competition Team 9562",
  keywords: [
    "robotics",
    "FIRST Robotics",
    "FRC",
    "Team 9562",
    "Bishop Reding",
    "Royal Robotics",
  ],
  authors: [{ name: "Royal Robotics Team 9562" }],
  creator: "Royal Robotics Team 9562",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" }
    ],
    apple: { url: "/apple-icon.png", type: "image/png" }
  },
  manifest: "/manifest.json",
  themeColor: "#e11d48"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const logoBase64 = "iVBORw0KGgoAAAANSUhEUgAAAMAAAADACAMAAABlApw1AAAAnFBMVEX////LICTIAADeamzNIyf22tv++vv++vrJCxDrjI7SRkn88/PTV1jfaWrkcnPqeHvYRkjKEBTZVljkdnfyra7toqP77e3MHB/44uL66urOKCvOLzHnl5jyz8/YXV/eZGXWUVLSODrywMHic3TpgILhaGnwq6vXTU/vn6Dzzc7trK3lkpLqhYfRNTb11dXRMTTdYGHVSErvp6fje3xSk+BPAAAKUklEQVR4nO2dC3PTOBCFV06wpYScOI6d0jRuSZpCW6Bd3v//Y69jB9rSFtuR7B3tzP1mOtN2yDlI1urherW6unr16tWTB5JHbz2Q0qcPpXBpI72IOfvcH94Fkk/n7x8KtN9cxZxJH77uMnR/PmIH+UH6Pv/6QeaP3z6U0m/v5LRPP+/PvQu/PX4Uh9zv9wf+1cuXO/rw5V/5/eFfcvHyr8nTpxPpy9Pkx9un8vH26eGdlK6eJm/fpP+8SSYvd/+6m778NVWLZPZSPm4+Jz91GQBcKlbBr9++ff36aTuPzBWvxOTNrMCbnYn8J2+Sx5+2jwV5LFAzP5VZaP9XL+dnefNf0vb5u/9NnKfb18iY5+82T8pPyWb2GDm6erpJkqvkafL+6erN+/f/JLOf3++o2lw93Tz+9ePZzffnb95P59sPm7G02ezH5pL5aLdanW0VvD/cbNabt8tJo9FYTEYrResvhtPDgR80Gg6w0p7wYKZ5yHk+2kwbC2xGZT59ioQBZXm4sZ0dVpvxePzxZLzdCj18Ot6uJuU9JOWWQMaYhWWZ5ZynzHnOOGN8G3bkcXI8ZdBptVq9ZHk4OBFEq5Us/vjjbN3r96cDpTbYxbC5nGsW+rDQmyEI/P60tlyO/GfyeHWUt4fTyWT7sEge/qeglwpajWYQNBuNIG26/U6zGQRZnMwPFmkjiO8vVXUiA8eesjRJl8TzXK8xNYazXbLa+dR97wdB8ZnTcveDkwUBLuNK9f1Dd7QIaA8HPx+Ky6K3ioF0Qy8LssRrjYpF60dHWb84t6KHxfF9wBL5I4d1LfBhQ7h6FH/xHgjFhbp6wWnrZtnx46rZXvvf2Wbz9d6qHvEh0JGZ4v02vNDLlMrEqT+YTjcFgfgVfBZRZSQdP6rKWDqUVUHAoNEcAq7S7UWgvMpHfRAwyJdBT+djoI8CBgXMIPzYnCMjnUQaRKMgqIijGDyX5zJx1ASKMpS8CBlkH4gLdV3RIRDSoXyxFfcorWDRSCwgDTyUjpKLzTSvRR3j8Sy1LdgNyqzZBBkGY31h/oBBsRFIBkFDf2EeQyGPAu2FLQqi0+kZPBOHKWRQRZfZZCcBXLxvozCW5w8Fs/mEzWcR4TIoLuwZKDuO/EK77hkkA7XFVxbGRaOh/NKaQdfZBMB8HmX6m3DkFzaEu/mY1cPhJoNpMn8AJIbTGT6DNAh2ExaDbV92rjKUocJrA1TbwZV/kKJsB0jbwaEtHhcIdyFwMR+zaQiXQVUZTAd4F+qVRvLmMdCyGDiMjxR+aGlkuL2wV2jXRqMBUk5JVKK5q3GVDzWVUHnlCEhbAyHsF/hy6FAwlX8AXm0kT+/tBSobOmGQGhTpyKDjrVZwQzDrZjrM6Y7NUVBlbAdpVKTDwKE2gq4MFqyL5nrOUhEUxYxXbgKEwzOmstIBLqWzSxlMKu+EAcJkLJQ9AuV+xTKWTsWVnvOgPpV9/OzUF8qnAp1mI3ngGCjM+9BvSdVq0Q4OlBNVf+gZKGsVDWotDsomg0DJMSqGYX3QCz9EHMnDOxmUnZrAZyM55eSGqbpQHyGBfDaQzVGt6a2DlUxJr95ULu8RZLDQRVr73Mwpg4/QpLurkEGwYJjcELcCHSKDQMdSOpN7DWYg2gUKIeywbAY6nTpODVp8QkEgfcq7o+UhvQ2tQObA0r9HodVhLQhSBp3VdCaH1adHZhCsBsJVWBvOc8JBYeEKdR2Hh9U0KAbSZAP4MsgK0qXsYUWvE6sZPPFrYhBbngElGcLpLiwnkc6QRsNX3ZdB5Lhwlo9qMwx0LTUfQqkdkNF4rkTT1NW2xFJrOnOMAKJUJO/FTgbhbAePbQmOwm1mAWhfqGx7iRbA5kAaYWd7h86OV4FAZoL9nYLcpxqRQUfW+ACPQH6O0UiLbOO40lSLXSm/XJNY7RkDNJ1OKhnsCrcQGrp1tjYXOsOQ4hwLj0GMw4FwHGZnQRGIj3gTH1MgFrUuFh5mKmv9Uy9VZlbTmRw43Cno2GBnAjfTGQcTHxqbGjsFP5iBpgwG5qQPiDodBhm3IwPp61F4HjCYcTsLoTPiMF16UO4dLf0Qyq0DuIbVlNGGMEoEcpAw1cCw9kIoRcaH7l0GNxA+D0hHOsYCMQC6DsPmQtk2YlYziFvITmUr1W05jyDPeREwCKbJQFEXoQ4+x0XpTLKmsmFYKlBuAJVLkMkmKg16pQx2gW5tMmC4xSqR1UjXdovQgI9UZZcxABp6NrMQ5JpqIMHJDZpGLaNbCH+F/rG4O5Efy1ZLHupyoD/+IKbLpUcx7a+/EKlhG/QMSCIwJlWyBq7QxnlN9mw6mz7XnOYNGN62iLWYWq3yw9rV4MNkLIVfJ7GWySUmU2HxYnNaHr4LhHqMI4NRNDU0Axko6m6NFh06PFZnzRmjQQ8Jgz1fV3fW5A0MBrG6I0rEjHR5Ahy3DHnHVS/SYFFsZBWlrUjYG9CZiAr0c/UTrYcn5C2BbC4YSYQ9Zxmi3kSFQvU57VHSZ1SHHmkXlz2FQdlTDaS0L+5jcLvAYxAhV7dkEL8Mhur9M2K8O2YQO40kY9Bbn5TBLRx3eaSy1Lf98NHsKXFugE0gEeYGYEYapTM1n0xnUNGX1RrJ3jPX0XgvEWRl23FBfdhDGES5UEsuF9OE7l3RQnkkYyfXuxmvlq4qgmWAkAiEiVlIZaNLJQaEq7kkYHCq//CUbG52hmYQOgAkYxCnmgbKZ/BjXm2QmCO5HGZUXwziVLmcMIjcqGQQw1N4bVzLIFqV9Jl8OhQMdmC3I4OI1b5BLAYXcUJwZeygf40YyhWFEPqwU7BxhOTWI2Qbx1HqOl1h5HQIFxsX6eJYs0UHPLcNQY0N4j3EB1OEHX0ovnGYQU5pYPuTU/J0wd+p/Y9IW9wXNxSb4YhjuZ7B9YmMwTVgcF0yiJHAjsCVZBAx+2dQzY2PCYSSQfgr+JcQvjEOMJilI8glIWGRhQE7gFrfQNCJGMa2w3CDJnFJmJXBMK3V1iAXDEL7+iUYhBfnAZQMlrMdCNx10+IUQkMGl9EHolRW5WKN9QvJ2PwBsHlPxGA9F2gRwUi++MBr2wkDaAM5NtrIGRSNLGBrEGvJIKG9YM1Z+PEq6sV34hcvWLWDQmFXLGQQ7+IgRFxshYwwJ0FVZDBMV9VlzIPfZxDP8SCcJRV+gG7FPc8UfP3i/MmD1xfnV1cP5Gj/9IMo/XR1dfXd7xfn5+fvrs/Pz8/O3orSN+fm5vl73z7sB1H63dlbcXp+dv7dGbk+uzi7vrg4eydK5xcXF+8uLs6vz76J0tfX4nRx9vbc3Lxx5R9gKJyaW3Nz8/X84X2pOLo3X8zvS/n9fSn/9d3Z29/nP84eSE/PN8/PN8/N7c353Wl1c2Nubm6eP7xvbm7u7+/uzff399+d3pzfmefP70vFr8/uzc35m3tzf//yvrm7uy89vbm5N7dm/vzuvvT05u7m5v7+PzTb/wMTLnqPvGbzQAAAAABJRU5ErkJggg==";

  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="96x96" href="/apple-icon.png" />
      </head>
      <body className="min-h-screen h-screen bg-black text-white antialiased overflow-x-hidden overflow-y-auto w-full">
        {/* Background Logo - Direct embed with base64 */}
        <div className="fixed inset-0 z-[-2] pointer-events-none">
          <div
            className="absolute inset-0 bg-black bg-center bg-no-repeat bg-[length:70%] opacity-[0.13] animate-logo-fade"
            style={{
              backgroundImage: `url(data:image/png;base64,${logoBase64})`
            }}
          ></div>
        </div>
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
