// File: /api/login.js
export default async function handler(req, res) {
    // Hanya menerima request dengan method POST
    if (req.method !== 'POST') {
        return res.status(405).json({ success: false, message: 'Method Not Allowed' });
    }

    try {
        const { username, password } = req.body;

        // Ambil dari Environment Variables (Vercel) atau gunakan kredensial default ini
        const ADMIN_USER = process.env.ADMIN_USER || "kapusdik";
        const ADMIN_PASS = process.env.ADMIN_PASS || "kapusdikantisenggol";

        // Verifikasi Akun
        if (username === ADMIN_USER && password === ADMIN_PASS) {
            return res.status(200).json({
                success: true,
                message: "Login Berhasil!",
                token: "auth_token_sabhara_secured_2026"
            });
        } else {
            return res.status(401).json({
                success: false,
                message: "Username atau Password Admin salah!"
            });
        }
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Terjadi kesalahan pada server"
        });
    }
}

